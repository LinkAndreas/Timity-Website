// Builds the site's images from content/: icons, device mockups and the social preview image.
//
//   npm run images                     icons and social preview (keeps the device mockups)
//   BEZELS=/Volumes npm run images     also the device mockups, with Bezel-iPhone-17,
//                                      Bezel-iPad-Pro-(M5) and Bezel-MacBook-Neo mounted there
//
// Screenshots live in content/screenshots/<language>/<screen>-<light|dark>.webp, taken from the app
// in that language and appearance.

import { existsSync } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { site } from '../content/site.js';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const brand = path.join(root, 'content/brand');
const screensIn = path.join(root, 'content/screenshots');
const publicDir = path.join(root, 'public');
const devicesOut = path.join(publicDir, 'images/devices');
const languages = site.languages.map((l) => l.code);
const schemes = ['light', 'dark'];

await mkdir(path.join(publicDir, 'images'), { recursive: true });

// ---- Icons -----------------------------------------------------------------------------------
// The square icon for iOS (which rounds it itself), the rounded one wherever the page shows it.
const iconSquare = path.join(brand, 'icon.png');
const iconRounded = path.join(brand, 'icon-rounded.png');
await sharp(iconSquare).resize(180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
await sharp(iconRounded).resize(64).png().toFile(path.join(publicDir, 'favicon.png'));
await sharp(iconRounded).resize(256).webp({ quality: 90 }).toFile(path.join(publicDir, 'images/icon-256.webp'));

// The app icons supporters can choose (App/Resources/Assets.xcassets/IconPreview-<Name> in the app).
await mkdir(path.join(publicDir, 'images/themes'), { recursive: true });
// The previews are opaque, with white corners, so they're cut to the icon's rounded shape here.
const themeSize = 160;
const corners = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${themeSize}" height="${themeSize}"><rect width="${themeSize}" height="${themeSize}" rx="${themeSize * 0.235}" fill="#fff"/></svg>`,
);
for (const theme of ['classic', 'sunrise', 'lagoon', 'forest', 'rose', 'midnight', 'ember']) {
  await sharp(path.join(brand, `themes/${theme}.png`))
    .resize(themeSize)
    .composite([{ input: corners, blend: 'dest-in' }])
    .webp({ quality: 88, alphaQuality: 100 })
    .toFile(path.join(publicDir, `images/themes/${theme}.webp`));
}
console.log('Icons written to public/.');

// ---- Device mockups --------------------------------------------------------------------------
const manifestFile = path.join(root, 'content/devices.json');
const manifest = existsSync(manifestFile) ? JSON.parse(await readFile(manifestFile, 'utf8')) : {};

async function writeSizes(image, outBase, widths) {
  for (const w of widths) {
    await sharp(image).resize({ width: w }).webp({ quality: 86, alphaQuality: 90, effort: 6 }).toFile(`${outBase}-${w}.webp`);
  }
}

// iPhone: composited into Apple's official bezel. The bezels come from Apple Design Resources
// (developer.apple.com/design/resources) and are licensed for mock-ups only — they must not be
// extracted or redistributed on their own. So the bare bezel is never copied into this
// repository; only the finished, flattened mockups are.
const devices = {
  iphone: {
    bezel: 'Bezel-iPhone-17/PNG/iPhone 17 Pro Max/iPhone 17 Pro Max - Cosmic Orange - Portrait.png',
    screens: ['iphone-event', 'iphone-events', 'iphone-calculate', 'iphone-countdays', 'iphone-sun'],
    widths: [480, 760],
  },
  ipad: {
    bezel: 'Bezel-iPad-Pro-(M5)/PNG/iPad Pro (M5) 13" - Space Black - Landscape.png',
    screens: ['ipad-event'],
    widths: [900, 1600],
  },
  mac: {
    bezel: 'Bezel-MacBook-Neo/PNG/MacBook Neo - Silver.png',
    screens: ['mac-event'],
    widths: [900, 1600],
  },
};

/** The bezel's transparent screen area: the region connected to the image center. */
async function screenArea(file) {
  const { data, info } = await sharp(file).ensureAlpha().extractChannel(3).raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  const inside = new Uint8Array(w * h);
  const start = (h >> 1) * w + (w >> 1);
  const stack = [start];
  inside[start] = 1;
  let x0 = w, x1 = 0, y0 = h, y1 = 0;
  while (stack.length) {
    const i = stack.pop();
    const x = i % w, y = (i / w) | 0;
    x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y);
    for (const [j, ok] of [[i - 1, x > 0], [i + 1, x < w - 1], [i - w, y > 0], [i + w, y < h - 1]]) {
      if (ok && !inside[j] && data[j] < 128) { inside[j] = 1; stack.push(j); }
    }
  }
  // Grow the area a few pixels under the bezel's anti-aliased inner edge, so no seam shows.
  const grown = new Uint8Array(inside);
  for (let pass = 0; pass < 3; pass++) {
    const source = new Uint8Array(grown);
    for (let i = 0; i < w * h; i++) {
      if (source[i]) continue;
      const x = i % w;
      if ((x > 0 && source[i - 1]) || (x < w - 1 && source[i + 1]) || source[i - w] || source[i + w]) grown[i] = 1;
    }
  }
  // The device's own outline (opaque pixels), so mockups are cropped to the product itself.
  let bx0 = w, bx1 = 0, by0 = h, by1 = 0;
  for (let i = 0; i < w * h; i++) {
    if (data[i] < 128) continue;
    const x = i % w, y = (i / w) | 0;
    bx0 = Math.min(bx0, x); bx1 = Math.max(bx1, x); by0 = Math.min(by0, y); by1 = Math.max(by1, y);
  }
  const bounds = { left: bx0, top: by0, width: bx1 - bx0 + 1, height: by1 - by0 + 1 };
  return { width: w, height: h, left: x0, top: y0, screenWidth: x1 - x0 + 1, screenHeight: y1 - y0 + 1, mask: grown, bounds };
}

async function inBezel(bezelFile, area, screenshotFile) {
  const { width, height, left, top, screenWidth, screenHeight, mask } = area;
  const screen = await sharp(screenshotFile).resize(screenWidth, screenHeight, { fit: 'fill' }).png().toBuffer();
  const layer = await sharp({ create: { width, height, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: screen, left, top }])
    .raw()
    .toBuffer();
  for (let i = 0; i < width * height; i++) layer[i * 4 + 3] = mask[i] ? layer[i * 4 + 3] : 0;
  const composited = await sharp(layer, { raw: { width, height, channels: 4 } }).composite([{ input: bezelFile }]).png().toBuffer();
  return sharp(composited).extract(area.bounds).png().toBuffer();
}

for (const [kind, device] of Object.entries(devices)) {
  const bezelFile = process.env.BEZELS && path.join(process.env.BEZELS, device.bezel);
  if (!bezelFile || !existsSync(bezelFile)) {
    console.log(`${kind}: BEZELS not set or bezel not found — kept the existing mockups.`);
    continue;
  }
  const area = await screenArea(bezelFile);
  for (const lang of languages) {
    await mkdir(path.join(devicesOut, lang), { recursive: true });
    for (const name of device.screens) {
      for (const scheme of schemes) {
        const mockup = await inBezel(bezelFile, area, path.join(screensIn, lang, `${name}-${scheme}.webp`));
        await writeSizes(mockup, path.join(devicesOut, lang, `${name}-${scheme}`), device.widths);
      }
    }
  }
  manifest[kind] = { width: area.bounds.width, height: area.bounds.height, widths: device.widths };
  console.log(`${kind}: ${device.screens.length} screens per language, screen ${area.screenWidth}×${area.screenHeight} at ${area.left},${area.top}`);
}

await writeFile(manifestFile, `${JSON.stringify(manifest, null, 2)}\n`);

// ---- Social preview (1200×630) ---------------------------------------------------------------
// The app icon's dark appearance: a warm charcoal ground with the orange countdown ring.
const iconData = `data:image/png;base64,${(await sharp(iconRounded).resize(224).png().toBuffer()).toString('base64')}`;
const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0.3" y2="1"><stop offset="0" stop-color="#2a2422"/><stop offset="1" stop-color="#121010"/></linearGradient>
    <radialGradient id="glow" cx="930" cy="315" r="420" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ff6a26" stop-opacity="0.35"/><stop offset="1" stop-color="#ff6a26" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffb04a"/><stop offset="1" stop-color="#ff5a1f"/></linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <g transform="translate(930 315)">
    <circle r="190" fill="none" stroke="#ff8c3c" stroke-opacity="0.18" stroke-width="64"/>
    <path d="M 0 -190 A 190 190 0 1 1 -164.5 -95" fill="none" stroke="url(#ring)" stroke-width="64" stroke-linecap="round"/>
    <circle cx="-164.5" cy="-95" r="58" fill="#ffffff"/>
    <circle cx="-164.5" cy="-95" r="26" fill="#ff7a2a"/>
  </g>
  <image href="${iconData}" x="80" y="92" width="112" height="112"/>
  <text x="80" y="300" font-family="SF Pro Display, Helvetica Neue, Arial" font-weight="700" font-size="84" fill="#ffffff" letter-spacing="-2">Timity</text>
  <text x="82" y="362" font-family="SF Pro Display, Helvetica Neue, Arial" font-weight="500" font-size="34" fill="#ffffff" fill-opacity="0.85">Every moment, counted.</text>
  <text x="82" y="430" font-family="SF Pro Display, Helvetica Neue, Arial" font-weight="600" font-size="24" fill="#ffb04a" letter-spacing="1">COUNTDOWNS · CALCULATORS · SUN</text>
</svg>`;
await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toFile(path.join(publicDir, 'og-image.png'));
console.log('Social preview written to public/og-image.png.');
