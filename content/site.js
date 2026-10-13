// Site-wide settings used by the page templates (scripts/templates) and the renderer.
const appStoreId = '491746507';

/** Canonical, absolute URL of the deployed site. Override with SITE_URL at build time. */
const siteUrl = (process.env.SITE_URL || 'https://timity.linkandreas.de/').replace(/\/?$/, '/');

export const site = {
  /** Canonical, absolute URL of the deployed site, with a trailing slash. */
  url: siteUrl,
  appStoreId,
  appStoreUrl: `https://apps.apple.com/app/id${appStoreId}`,
  githubUrl: 'https://github.com/LinkAndreas/Timity',
  /** The app's terms of use: Apple's Standard License Agreement, as linked in the app (SupportLinks.swift). */
  termsUrl: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
  /** The address the app's Send Feedback opens (SettingsView.swift). */
  feedbackEmail: 'feedback@linkandreas.de',
  privacyEmail: 'privacy@linkandreas.de',

  /** The provider of the app, named in the privacy policy. */
  developer: {
    name: 'Andreas Link',
    email: 'feedback@linkandreas.de',
    // Postal address for the contact block of the privacy policy. Lines are rendered as given;
    // leave empty to omit (the build warns while it is missing).
    address: [],
  },

  /** Effective date of the privacy policy (ISO). Update whenever its text changes. */
  legalEffectiveDate: '2026-10-13',

  /** Languages, in switcher order — the app's own. The first is the default at the site root. */
  languages: [
    { code: 'en', name: 'English', locale: 'en_US' },
    { code: 'de', name: 'Deutsch', locale: 'de_DE' },
    { code: 'es', name: 'Español', locale: 'es_ES' },
    { code: 'fr', name: 'Français', locale: 'fr_FR' },
  ],
};
