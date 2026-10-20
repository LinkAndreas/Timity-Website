// The landing page, one per language.
import { site } from '../../content/site.js';
import devices from '../../content/devices.json' with { type: 'json' };
import { renderDocument, storeBadge } from './layout.js';
import { escapeHtml, rel, routes, asset } from './util.js';

const deviceSizes = {
  iphone: '(min-width: 960px) 340px, 70vw',
  ipad: '(min-width: 1100px) 1000px, 94vw',
  mac: '(min-width: 1100px) 1000px, 94vw',
};

/**
 * A screenshot inside its device frame (composited by scripts/build-images.mjs), taken from the
 * app running in the page's language. It follows the visitor's light/dark appearance.
 */
function device(lang, kind, name, { alt, className = '', eager = false }) {
  const { width, height, widths } = devices[kind];
  const set = (scheme) => widths.map((w) => `${asset(`/images/devices/${lang}/${name}-${scheme}-${w}.webp`)} ${w}w`).join(', ');
  const fallback = asset(`/images/devices/${lang}/${name}-light-${widths[0]}.webp`);
  const loading = eager ? ' fetchpriority="high"' : ' loading="lazy"';
  return `<figure class="device device--${kind}${className ? ` ${className}` : ''}">
              <picture>
                <source srcset="${set('dark')}" sizes="${deviceSizes[kind]}" media="(prefers-color-scheme: dark)" data-dark-source />
                <img src="${fallback}" srcset="${set('light')}" sizes="${deviceSizes[kind]}" width="${width}" height="${height}"${loading} alt="${escapeHtml(alt)}" />
              </picture>
            </figure>`;
}

/** Line icons for cards and pillars (24×24, stroked). */
const icons = {
  widgets: '<rect x="4" y="4" width="7" height="7" rx="2" /><rect x="13" y="4" width="7" height="7" rx="2" /><rect x="4" y="13" width="16" height="7" rx="2" />',
  gauge: '<path d="M6.3 17.7a8 8 0 1 1 11.4 0" /><path d="M12 12l3.2-3.2" /><circle cx="12" cy="12" r="1" />',
  live: '<rect x="2.5" y="8" width="19" height="8" rx="4" /><circle cx="7" cy="12" r="1.6" /><path d="M11 12h6.5" />',
  watch: '<rect x="6" y="6" width="12" height="12" rx="3.5" /><path d="M9 6l.6-3h4.8l.6 3M9 18l.6 3h4.8l.6-3" /><path d="M12 9.5V12l1.8 1.2" />',
  voice: '<path d="M4 12h1.5M8 8.5v7M12 5v14M16 8.5v7M20 12h-1.5" />',
  search: '<circle cx="11" cy="11" r="6.5" /><path d="M16 16l4 4" />',
  type: '<path d="M4 7V5h16v2M12 5v14M9 19h6" />',
  import: '<path d="M4 14v4.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V14" /><path d="M12 4v11" /><path d="M8 11l4 4 4-4" />',
  sparkles: '<path d="M11 3.5l1.7 4.3 4.3 1.7-4.3 1.7L11 15.5l-1.7-4.3L5 9.5l4.3-1.7z" /><path d="M18 14.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" />',
  bell: '<path d="M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15z" /><path d="M10 20.5a2 2 0 0 0 4 0" />',
  share: '<path d="M12 3v12" /><path d="M8 7l4-4 4 4" /><path d="M6 11H5v9h14v-9h-1" />',
  year: '<rect x="4" y="5" width="16" height="15" rx="2.5" /><path d="M4 10h16M8 3v4M16 3v4" /><path d="M12 12.6l1 2 2.2.3-1.6 1.5.4 2.2-2-1-2 1 .4-2.2-1.6-1.5 2.2-.3z" />',
  noAccount: '<circle cx="12" cy="8" r="3.5" /><path d="M5 20c1-4 4-6 7-6s6 2 7 6" /><path d="M4 4l16 16" />',
  cloud: '<path d="M7 18.5h10a4 4 0 0 0 .6-8 6 6 0 0 0-11.6 1.6A3.4 3.4 0 0 0 7 18.5z" /><rect x="10" y="12.5" width="4" height="3.5" rx="0.8" /><path d="M10.9 12.5v-.9a1.1 1.1 0 0 1 2.2 0v.9" />',
  noTracking: '<path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z" /><circle cx="12" cy="12" r="2.5" /><path d="M4 4l16 16" />',
};
const icon = (name, className) => `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true">${icons[name]}</svg>`;

/** Filled glyphs for event badges, standing in for the app's SF Symbols. */
const glyphs = {
  airplane: '<path d="M21 15.5v-2l-8-5V3.6a1.5 1.5 0 0 0-3 0v4.9l-8 5v2l8-2.5v5.4l-2 1.5v1.6l3.5-1 3.5 1v-1.6l-2-1.5V13z" />',
  cake: '<path d="M11 2.5c.9.9 1.5 1.8 1.5 2.6a1.5 1.5 0 0 1-3 0c0-.8.6-1.7 1.5-2.6z" transform="translate(.5 0)" /><rect x="11" y="7" width="2" height="4" rx=".6" /><path d="M5 13a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2.2c-1.2.9-2.3.9-3.5 0-1.2.9-2.3.9-3.5 0-1.2.9-2.3.9-3.5 0-1.2.9-2.3.9-3.5 0z" /><path d="M5 17.3c1.2.6 2.3.6 3.5 0 1.2.6 2.3.6 3.5 0 1.2.6 2.3.6 3.5 0 1.2.6 2.3.6 3.5 0V20H5z" /><rect x="3.5" y="20" width="17" height="1.6" rx=".8" />',
  leaf: '<path d="M20.5 3.5C11 3.5 4.5 8.5 4.5 16.5c0 1 .1 1.9.3 2.7l-1.3 1.3 1 1 1.3-1.3c.8.2 1.7.3 2.7.3 8 0 13-6.5 13-16V3.5zM8 18.5l7.5-7.5" />',
  music: '<path d="M9.5 18a3 3 0 1 1-2-2.83V5.2l11-2.2v12a3 3 0 1 1-2-2.83V7.4l-7 1.4z" />',
};
const badge = (glyph, color, className = '') =>
  `<span class="badge-icon badge-icon--${color}${className ? ` ${className}` : ''}" aria-hidden="true"><svg viewBox="0 0 24 24">${glyphs[glyph]}</svg></span>`;

/** The app icon's countdown ring: a faint track, the part that has passed, and the moment ahead. */
const ring = `<svg class="ring" viewBox="0 0 1024 1024" aria-hidden="true">
              <defs>
                <linearGradient id="ring-arc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffb04a" /><stop offset="1" stop-color="#ff5a1f" /></linearGradient>
              </defs>
              <circle class="ring__track" cx="512" cy="512" r="286" />
              <path class="ring__arc" d="M 512 226 A 286 286 0 1 1 264.32 369" pathLength="100" />
              <g class="ring__moment"><circle cx="264.32" cy="369" r="92" /><circle class="ring__core" cx="264.32" cy="369" r="42" /></g>
            </svg>`;

/** Redirects first-time visitors of the default-language home page to their browser's language. */
const languageRedirect = (dir) => `<script>
      (function () {
        try {
          if (localStorage.getItem('timity.lang')) return;
          var supported = ${JSON.stringify(site.languages.map((l) => l.code).slice(1))};
          var preferred = (navigator.languages || [navigator.language]).map(function (l) { return String(l).slice(0, 2).toLowerCase(); });
          for (var i = 0; i < preferred.length; i++) {
            if (preferred[i] === '${site.languages[0].code}') return;
            if (supported.indexOf(preferred[i]) !== -1) { location.replace('${dir}' + preferred[i] + '/' + location.hash); return; }
          }
        } catch (e) {}
      })();
    </script>`;

/** The countdown maker: pick a date, see it counted the way the app shows it (site/src/countdown.js). */
function maker(t, lang) {
  const { tryit, units } = t;
  const presets = Object.entries(tryit.presets)
    .map(([id, label], i) => `<button type="button" class="chip" aria-pressed="${i === 0}" data-preset="${id}">${label}</button>`)
    .join('\n                  ');
  const colors = Object.entries(tryit.colors)
    .map(
      ([id, label], i) =>
        `<button type="button" class="swatch swatch--${id}" role="radio" aria-checked="${i === 0}" aria-label="${label}" title="${label}" data-color="${id}"></button>`,
    )
    .join('\n                  ');
  const tile = (unit) => `<li class="tile"><span class="tile__value" data-unit="${unit}">0</span><span class="tile__label" data-unit-label="${unit}">${units[unit].other}</span></li>`;
  const strings = { units, toGo: tryit.toGo, ago: tryit.ago, today: tryit.today, workdays: tryit.workdays, weekends: tryit.weekends, heartbeats: tryit.heartbeats, presets: tryit.presets, christmasDay: tryit.christmasDay };

  return `<div class="maker" data-maker data-lang="${lang}">
              <div class="maker__controls">
                <div class="field">
                  <label class="field__label" for="maker-name">${tryit.nameLabel}</label>
                  <input class="field__input" id="maker-name" type="text" maxlength="40" placeholder="${escapeHtml(tryit.namePlaceholder)}" value="${escapeHtml(tryit.presets.newYear)}" data-name />
                </div>
                <div class="field">
                  <label class="field__label" for="maker-date">${tryit.dateLabel}</label>
                  <input class="field__input" id="maker-date" type="date" data-date />
                </div>
                <div class="field field--wide">
                  <span class="field__label" id="maker-presets">${tryit.presetsLabel}</span>
                  <div class="chips" role="group" aria-labelledby="maker-presets">
                  ${presets}
                  </div>
                </div>
                <div class="field field--wide">
                  <span class="field__label" id="maker-colors">${tryit.colorLabel}</span>
                  <div class="swatches" role="radiogroup" aria-labelledby="maker-colors">
                  ${colors}
                  </div>
                </div>
              </div>

              <div class="countdown countdown--lagoon" data-card aria-live="off">
                <p class="countdown__title" data-title>${tryit.presets.newYear}</p>
                <p class="countdown__date" data-when>&nbsp;</p>
                <p class="countdown__number" data-days>0</p>
                <p class="countdown__unit" data-days-label>${tryit.toGo.other}</p>
                <ul class="tiles" role="list">
                  ${['week', 'day', 'hour', 'minute', 'second'].map(tile).join('\n                  ')}
                </ul>
              </div>

              <div class="maker__also">
                <span class="maker__also-label">${tryit.alsoLabel}</span>
                <ul role="list">
                  <li data-also="workdays">&nbsp;</li>
                  <li data-also="weekends">&nbsp;</li>
                  <li data-also="heartbeats">&nbsp;</li>
                </ul>
              </div>
              <p class="maker__fineprint">${tryit.fineprint}</p>
              <script type="application/json" data-maker-strings>${JSON.stringify(strings)}</script>
            </div>`;
}

/** Recreations of the app's widgets, complication and Live Activity, for the "everywhere" showcase. */
function showcase(t) {
  const e = t.everywhere;
  return `<div class="showcase" aria-hidden="true">
            <div class="widget widget--lagoon reveal">
              ${badge('airplane', 'glass', 'widget__icon')}
              <p class="widget__days"><strong>12</strong> ${e.widgetDays}</p>
              <p class="widget__title">${e.widgetTitle}</p>
              <p class="widget__date">${e.widgetDate}</p>
            </div>
            <div class="lockscreen reveal">
              <p class="lockscreen__time">9:41</p>
              <div class="lockscreen__row">
                <div class="complication">
                  <svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" class="complication__track" /><circle cx="24" cy="24" r="20" class="complication__fill" pathLength="100" /></svg>
                  <span>23</span>
                </div>
                <div class="complication complication--rect">
                  <span class="complication__name">${t.hero.cards.birthday.title}</span>
                  <span class="complication__value">23 ${t.hero.cards.birthday.unit}</span>
                </div>
              </div>
              <div class="island">
                ${badge('music', 'purple', 'island__icon')}
                <span class="island__text"><span class="island__title">${e.liveTitle}</span><span class="island__sub">${e.liveIn}</span></span>
                <span class="island__timer" data-live-timer>02:14:33</span>
              </div>
            </div>
            <div class="watch reveal">
              <div class="watch__screen">
                <p class="watch__time">9:41</p>
                <div class="watch__row watch__row--lagoon">${badge('airplane', 'glass')}<span><strong>12</strong> ${e.widgetDays}</span></div>
                <div class="watch__row watch__row--blossom">${badge('cake', 'glass')}<span><strong>23</strong> ${e.widgetDays}</span></div>
                <div class="watch__row watch__row--green">${badge('leaf', 'glass')}<span><strong>214</strong> ${e.widgetDays}</span></div>
              </div>
            </div>
          </div>`;
}

export function renderHome(lang, t) {
  const dir = routes.home(lang);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Timity',
    alternateName: t.meta.alternateName,
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'iOS, iPadOS, macOS, watchOS',
    description: t.meta.description,
    url: site.url + dir,
    downloadUrl: site.appStoreUrl,
    image: `${site.url}${asset('og-image.png')}`,
    inLanguage: site.languages.map((l) => l.code),
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@type': 'Person', name: site.developer.name },
  };

  const head = `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>${
    dir === '' ? `\n    ${languageRedirect(rel(dir, ''))}` : ''
  }`;

  const calculatorCount = t.calculators.groups.reduce((sum, group) => sum + group.items.length, 0);

  const content = `
      <!-- Hero -->
      <section class="hero" id="top" aria-labelledby="hero-title">
        <div class="hero__glow" aria-hidden="true"></div>
        <div class="hero__inner container">
          <div class="hero__copy">
            <p class="hero__eyebrow intro">
              <img src="${asset('/images/icon-256.webp')}" width="56" height="56" alt="" class="hero__icon" />
              <span>${t.hero.eyebrow}</span>
            </p>
            <p class="live intro" data-live data-lang="${lang}" data-day-forms='${JSON.stringify(t.hero.liveDays)}' hidden>
              <span class="live__dot" aria-hidden="true"></span>
              <span class="live__label">${t.hero.liveLabel}</span>
              <span class="live__value" data-live-value></span>
            </p>
            <h1 class="hero__title intro" id="hero-title">${t.hero.title}</h1>
            <p class="hero__lede intro">${t.hero.lede}</p>
            <div class="hero__actions intro">
              ${storeBadge(t, lang)}
              <a class="link-arrow link-arrow--light" href="#tryit">${t.hero.secondary}</a>
            </div>
            <p class="hero__meta intro">${t.hero.meta}</p>
          </div>

          <div class="hero__stage">
            ${ring}
            ${device(lang, 'iphone', 'iphone-event', { alt: t.hero.phoneAlt, className: 'hero__phone', eager: true })}
            <div class="hero__cards" aria-hidden="true">
              <div class="minicard minicard--blossom">
                ${badge('cake', 'glass')}
                <span class="minicard__text"><span class="minicard__value"><strong>23</strong> ${t.hero.cards.birthday.unit}</span><span class="minicard__title">${t.hero.cards.birthday.title}</span></span>
              </div>
              <div class="minicard minicard--green">
                ${badge('leaf', 'glass')}
                <span class="minicard__text"><span class="minicard__value"><strong>214</strong> ${t.hero.cards.smokeFree.unit}</span><span class="minicard__title">${t.hero.cards.smokeFree.title}</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- At a glance -->
      <section class="glance" aria-label="${t.glance.label}">
        <ul class="glance__list container" role="list">
          <li><strong>${calculatorCount}</strong><span>${t.glance.calculators}</span></li>
          <li><strong>${site.languages.length}</strong><span>${t.glance.languages}</span></li>
          <li><strong>4</strong><span>${t.glance.devices}</span></li>
          <li><strong>0</strong><span>${t.glance.accounts}</span></li>
        </ul>
      </section>

      <!-- Countdowns -->
      <section class="section" id="events" aria-labelledby="events-title">
        <div class="container split">
          <div class="split__copy">
            <p class="eyebrow reveal" style="--accent: var(--orange)">${t.events.eyebrow}</p>
            <h2 class="section__title reveal" id="events-title">${t.events.title}</h2>
            <p class="section__lede reveal">${t.events.lede}</p>
            <ul class="ticks reveal" role="list" style="--accent: var(--orange-fill)">
              ${t.events.ticks.map((tick) => `<li>${tick}</li>`).join('\n              ')}
            </ul>
          </div>
          <div class="split__visual reveal">
            ${device(lang, 'iphone', 'iphone-events', { alt: t.events.alt })}
          </div>
        </div>
      </section>

      <!-- Try it -->
      <section class="section section--alt" id="tryit" aria-labelledby="tryit-title">
        <div class="container split split--maker">
          <div class="split__copy">
            <p class="eyebrow reveal" style="--accent: var(--lagoon)">${t.tryit.eyebrow}</p>
            <h2 class="section__title reveal" id="tryit-title">${t.tryit.title}</h2>
            <p class="section__lede reveal">${t.tryit.lede}</p>
          </div>
          <div class="split__visual reveal">
            ${maker(t, lang)}
            <noscript>${device(lang, 'iphone', 'iphone-countdays', { alt: t.calculators.alt })}</noscript>
          </div>
        </div>
      </section>

      <!-- Calculators -->
      <section class="section" id="calculators" aria-labelledby="calculators-title">
        <div class="container">
          <header class="section__header section__header--center">
            <p class="eyebrow reveal" style="--accent: var(--violet)">${t.calculators.eyebrow}</p>
            <h2 class="section__title reveal" id="calculators-title">${t.calculators.title}</h2>
            <p class="section__lede reveal">${t.calculators.lede}</p>
          </header>
          <div class="calcs">
            <div class="calcs__phones reveal">
              ${device(lang, 'iphone', 'iphone-calculate', { alt: t.calculators.listAlt, className: 'calcs__back' })}
              ${device(lang, 'iphone', 'iphone-countdays', { alt: t.calculators.alt, className: 'calcs__front' })}
            </div>
            <div class="calcs__groups">
              ${t.calculators.groups
                .map(
                  (group, g) => `<div class="calc-group reveal">
                <h3 class="calc-group__title">${group.title}</h3>
                <ul class="calc-group__list" role="list">
                  ${group.items
                    .map(([name, question]) => `<li class="calc calc--${g}"><span class="calc__name">${name}</span><span class="calc__question">${question}</span></li>`)
                    .join('\n                  ')}
                </ul>
              </div>`,
                )
                .join('\n              ')}
            </div>
          </div>
        </div>
      </section>

      <!-- Sun -->
      <section class="section section--sun" id="sun" aria-labelledby="sun-title">
        <div class="container split split--reverse">
          <div class="split__copy">
            <p class="eyebrow reveal" style="--accent: var(--amber)">${t.sun.eyebrow}</p>
            <h2 class="section__title reveal" id="sun-title">${t.sun.title}</h2>
            <p class="section__lede reveal">${t.sun.lede}</p>
            <ul class="ticks reveal" role="list" style="--accent: var(--amber-fill)">
              ${t.sun.ticks.map((tick) => `<li>${tick}</li>`).join('\n              ')}
            </ul>
          </div>
          <div class="split__visual reveal">
            ${device(lang, 'iphone', 'iphone-sun', { alt: t.sun.alt })}
          </div>
        </div>
      </section>

      <!-- Everywhere -->
      <section class="section section--alt" id="everywhere" aria-labelledby="everywhere-title">
        <div class="container">
          <header class="section__header section__header--center">
            <p class="eyebrow reveal" style="--accent: var(--lagoon)">${t.everywhere.eyebrow}</p>
            <h2 class="section__title reveal" id="everywhere-title">${t.everywhere.title}</h2>
            <p class="section__lede reveal">${t.everywhere.lede}</p>
          </header>
          ${showcase(t)}
          <ul class="cards cards--everywhere" role="list">
            ${t.everywhere.cards
              .map(
                (card, i) => `<li class="card reveal">
              ${icon(['widgets', 'gauge', 'live', 'watch', 'voice', 'search'][i], 'card__icon')}
              <h3>${card.title}</h3>
              <p>${card.body}</p>
            </li>`,
              )
              .join('\n            ')}
          </ul>
        </div>
      </section>

      <!-- Details -->
      <section class="section" id="details" aria-labelledby="details-title">
        <div class="container">
          <header class="section__header">
            <p class="eyebrow reveal" style="--accent: var(--rose)">${t.details.eyebrow}</p>
            <h2 class="section__title reveal" id="details-title">${t.details.title}</h2>
          </header>
          <ul class="cards cards--details" role="list">
            ${t.details.cards
              .map(
                (card, i) => `<li class="card reveal">
              ${icon(['type', 'import', 'sparkles', 'bell', 'share', 'year'][i], 'card__icon')}
              <h3>${card.title}</h3>
              <p>${card.body}</p>
            </li>`,
              )
              .join('\n            ')}
          </ul>
        </div>
      </section>

      <!-- iPad -->
      <section class="section section--ipad" id="ipad" aria-labelledby="ipad-title">
        <div class="container">
          <header class="section__header section__header--center">
            <p class="eyebrow reveal" style="--accent: var(--orange)">${t.ipad.eyebrow}</p>
            <h2 class="section__title reveal" id="ipad-title">${t.ipad.title}</h2>
            <p class="section__lede reveal">${t.ipad.lede}</p>
          </header>
          ${device(lang, 'ipad', 'ipad-event', { alt: t.ipad.alt, className: 'ipad__device reveal' })}
          <ul class="ipad__points" role="list">
            ${t.ipad.points.map((point) => `<li class="reveal">${point}</li>`).join('\n            ')}
          </ul>
        </div>
      </section>

      <!-- Mac -->
      <section class="section section--mac" id="mac" aria-labelledby="mac-title">
        <div class="container">
          <header class="section__header section__header--center">
            <p class="eyebrow reveal" style="--accent: var(--orange)">${t.mac.eyebrow}</p>
            <h2 class="section__title reveal" id="mac-title">${t.mac.title}</h2>
            <p class="section__lede reveal">${t.mac.lede}</p>
          </header>
          ${device(lang, 'mac', 'mac-event', { alt: t.mac.alt, className: 'mac__device reveal' })}
          <ul class="ipad__points" role="list">
            ${t.mac.points.map((point) => `<li class="reveal">${point}</li>`).join('\n            ')}
          </ul>
        </div>
      </section>

      <!-- Privacy -->
      <section class="section section--dark" id="privacy" aria-labelledby="privacy-title">
        <div class="container">
          <header class="section__header section__header--center">
            <p class="eyebrow reveal" style="--accent: var(--green)">${t.privacy.eyebrow}</p>
            <h2 class="section__title reveal" id="privacy-title">${t.privacy.title}</h2>
            <p class="section__lede reveal">${t.privacy.lede}</p>
            <p class="section__link reveal"><a class="link-arrow" href="${rel(dir, routes.privacy(lang))}">${t.privacy.link}</a></p>
          </header>

          <ul class="pillars" role="list">
            ${t.privacy.pillars
              .map(
                (pillar, i) => `<li class="pillar reveal">
              <svg viewBox="0 0 24 24" aria-hidden="true">${icons[['noAccount', 'cloud', 'noTracking'][i]]}</svg>
              <h3>${pillar.title}</h3>
              <p>${pillar.body}</p>
            </li>`,
              )
              .join('\n            ')}
          </ul>
        </div>
      </section>

      <!-- Free, with optional support -->
      <section class="section" id="support" aria-labelledby="support-title">
        <div class="container">
          <header class="section__header section__header--center">
            <p class="eyebrow reveal" style="--accent: var(--orange)">${t.support.eyebrow}</p>
            <h2 class="section__title reveal" id="support-title">${t.support.title}</h2>
            <p class="section__lede reveal">${t.support.lede}</p>
          </header>
          <ul class="themes" role="list" aria-label="${t.support.iconsLabel}">
            ${Object.entries(t.support.themes)
              .map(
                ([id, name]) => `<li class="theme reveal${id === 'classic' ? ' theme--free' : ''}">
              <img src="${asset(`/images/themes/${id}.webp`)}" width="96" height="96" alt="" loading="lazy" />
              <span>${name}</span>
            </li>`,
              )
              .join('\n            ')}
          </ul>
          <p class="themes__note reveal">${t.support.note}</p>
        </div>
      </section>

      <!-- Download CTA -->
      <section class="cta" id="download" aria-labelledby="cta-title">
        <div class="container">
          <div class="cta__panel">
            ${ring.replace('class="ring"', 'class="ring ring--cta"').replaceAll('ring-arc', 'ring-arc-cta')}
            <img class="cta__icon reveal" src="${asset('/images/icon-256.webp')}" width="112" height="112" alt="${escapeHtml(t.cta.iconAlt)}" loading="lazy" />
            <h2 class="cta__title reveal" id="cta-title">${t.cta.title}</h2>
            <p class="cta__lede reveal">${t.cta.lede}</p>
            ${storeBadge(t, lang, { height: 56 })}
            <p class="cta__meta reveal">${t.cta.meta}</p>
          </div>
        </div>
      </section>`;

  return renderDocument({
    lang,
    t,
    page: 'home',
    title: t.meta.title,
    description: t.meta.description,
    ogTitle: t.meta.ogTitle,
    ogDescription: t.meta.ogDescription,
    head,
    content,
  });
}
