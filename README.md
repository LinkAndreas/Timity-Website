# Timity website

Marketing site for [Timity](https://github.com/LinkAndreas/Timity) — countdowns, count-ups and time calculators for
iPhone, iPad and Apple Watch — in English, German, Spanish and French (the app's languages), with its Privacy Policy.
Static HTML rendered at build time, built with Vite. Same structure as the
[ImgZen](https://github.com/LinkAndreas/ImgZen-Website) and [Breathia](https://github.com/LinkAndreas/Breathia-Website)
websites.

```bash
npm install
npm run dev       # local development (re-renders when content or templates change)
npm run build     # production build → dist/
npm run preview   # serve dist/
```

## Pages

| Path | Page |
|---|---|
| `/` · `/de/` · `/es/` · `/fr/` | Landing page (English at the root) |
| `/privacy/<lang>/` | Privacy Policy |
| `/privacy/` | Forwards to the visitor's language |

The app links to `/privacy/<lang>/` (`SupportLinks.swift`) and to the site itself (`SettingsView.swift`) — keep these
paths. The terms of use are Apple's Standard EULA, as in the app, so there is no terms page. On a first visit, the
English root page forwards visitors whose browser prefers another of the site's languages; choosing a language in
the switcher is remembered and turns this off.

## Where things live

| Path | What |
|---|---|
| `content/locales/<lang>.js` | All page copy per language — keys must match `en.js` (checked at build) |
| `content/legal/privacy.<lang>.html` | Privacy Policy text |
| `content/site.js` | URLs, App Store ID, developer details, policy effective date, languages |
| `content/screenshots/<lang>/` | App screenshots, `<screen>-<light\|dark>.webp` |
| `content/brand/` | App icon (rendered from the app's `Shared/AppIcon.icon`) and the supporter icons |
| `scripts/templates/` | Page templates (layout, home, legal) |
| `scripts/render.mjs` | Renders all pages into `site/` and writes `public/sitemap.xml` |
| `scripts/build-images.mjs` | Icons, device mockups and the social preview image |
| `site/src/` | Client code: styles, nav/reveal/theme (`main.js`), the countdown maker and live chip (`countdown.js`) |
| `public/` | Static files: images, icons, OG image |

`site/**/*.html`, `public/sitemap.xml` and `public/robots.txt` are generated — edit `content/` or the templates
instead.

## Screenshots and device mockups

The screenshots were taken from a debug build in the iOS Simulator (iPhone 17 Pro Max, and iPad Pro 13-inch in
landscape), once per language and appearance, with a clean status bar and the app's sample events:

```bash
xcrun simctl status_bar <device> override --time "9:41" --batteryState discharging --batteryLevel 100
xcrun simctl location <device> set 38.7223,-9.1393   # Lisbon, for the Sun tab
xcrun simctl launch <device> de.link.timity -ScreenshotSamples -syncsWithICloud NO -hasCompletedOnboarding YES \
  -AppleLanguages "(de)" -AppleLocale de_DE
xcrun simctl ui <device> appearance dark
```

Screens: `iphone-events`, `iphone-event` (Trip to Lisbon), `iphone-calculate`, `iphone-countdays` (Count Days) and
`iphone-sun`, plus `ipad-event`. The countdown ticks every second; take a few shots of the event screens and keep
one where no digit is mid-animation. Save them as `content/screenshots/<lang>/<screen>-<light|dark>.webp` and run
`npm run images`.

The screenshots are composited into Apple's official bezels — the Cosmic Orange iPhone 17 Pro Max and the Space
Black iPad Pro 13-inch (M5). The bezels are Apple Design Resources, licensed for mock-ups only: they must not be
extracted or redistributed on their own, so they are **not** in this repository. Download `Bezel-iPhone-17` and
`Bezel-iPad-Pro-(M5)` from [developer.apple.com/design/resources](https://developer.apple.com/design/resources/),
mount both, and run:

```bash
BEZELS=/Volumes npm run images
```

Without `BEZELS`, the existing mockups are kept.

## Deploying

The site is served at **https://timity.linkandreas.de**, the same way as `imgzen.linkandreas.de` and
`breathia.linkandreas.de`: a Docker image with [Caddy](https://caddyserver.com) on port 32774 (compression,
caching and security headers in `docker/Caddyfile`), on the Hostinger VPS behind the Cloudflare Tunnel. The
container publishes no ports; it joins the shared Docker network `web`, where the `cloudflared` container reaches it
at `http://timity-website:32774`.

Every merge into `main` (each release) runs `.github/workflows/deploy.yml`: GitHub builds the image and pushes it
to `ghcr.io/linkandreas/timity-website`, tagged with the commit SHA. The VPS then only receives `compose.yaml` in
`~/timity-website`, pulls that image and restarts the container. It can also be started by hand under
**Actions › Deploy to Hostinger VPS › Run workflow**.

To roll back, run on the VPS: `cd ~/timity-website && TAG=<older commit sha> docker compose up -d`.

### First-time setup

1. **Create the repository** on GitHub, e.g. `LinkAndreas/Timity-Website` (public, no README or license — this
   repository brings its own), and push both branches:

   ```bash
   git remote add origin git@github.com:LinkAndreas/Timity-Website.git
   git push -u origin main develop
   ```

   Pushing `main` starts the first deployment, which fails until the secrets below exist; re-run it afterwards.
2. **Secrets** — in the repository, under **Settings › Secrets and variables › Actions**, add the same three as for
   the other websites: `HOSTINGER_HOST` (VPS IP address), `HOSTINGER_USERNAME` (SSH user, e.g. `root`) and
   `HOSTINGER_SSH_KEY` (the private deploy key authorized on the VPS).
3. **Environment** — the deploy job runs in the `production` environment, which GitHub creates on the first run.
4. **Package visibility** — after the first successful build, open the `timity-website` package under your GitHub
   profile › Packages and connect it to the repository (Package settings › Manage Actions access) if GitHub didn't.
   The VPS logs in with the job's token, so the package can stay private.
5. **Domain** — in Cloudflare **Zero Trust › Networks › Tunnels**, edit the tunnel and add a public hostname:
   subdomain `timity`, domain `linkandreas.de`, service **HTTP**, URL `timity-website:32774`. Cloudflare creates the
   DNS record and serves HTTPS.

To run it locally:
`docker build -t timity-website . && docker run --rm -p 32774:32774 timity-website` → <http://localhost:32774>.

### Anywhere else

`npm run build` outputs a static site in `dist/` with relative asset URLs, so it can be served from any host and
path. `SITE_URL` sets the canonical URL used in links, the sitemap and `robots.txt` (default
`https://timity.linkandreas.de/`, see `content/site.js`).

## License

The code is available under the [MIT License](LICENSE). The Timity name, icons and screenshots, the Apple device
mockups and the App Store badges are excluded — see [NOTICE.md](NOTICE.md).
