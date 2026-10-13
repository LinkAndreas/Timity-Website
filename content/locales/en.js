// English copy. Other locales mirror these keys exactly (checked at build time).
// Strings may contain inline HTML. Feature and calculator names use the app's own wording.

export default {
  meta: {
    title: 'Timity — Countdowns & Time Calculators for iPhone, iPad & Apple Watch',
    alternateName: 'Timity: Countdown & Days Since',
    description:
      'Count down to birthdays, trips and deadlines, and see how long it’s been since the moments behind you. Fourteen calculators for everyday questions about time, sunrise and sunset anywhere, widgets and Apple Watch. Free, no account.',
    ogTitle: 'Timity — Every moment, counted',
    ogDescription: 'Countdowns, count-ups and calculators for every question about time — on iPhone, iPad and Apple Watch.',
    ogImageAlt: 'The Timity app icon — a countdown ring on orange — with the words: Timity, Every moment, counted.',
  },

  common: {
    skip: 'Skip to content',
    backToTop: 'Timity, back to top',
    sections: 'Sections',
    download: 'Download',
    appStoreBadge: 'Download on the App Store',
    language: 'Language',
    chooseLanguage: 'Choose language',
    home: 'Home',
    themeToDark: 'Switch to dark appearance',
    themeToLight: 'Switch to light appearance',
  },

  nav: {
    events: 'Countdowns',
    calculators: 'Calculators',
    sun: 'Sun',
    everywhere: 'Widgets & Watch',
    privacy: 'Privacy',
  },

  hero: {
    eyebrow: 'Timity for iPhone, iPad &amp; Apple Watch',
    title: 'Every moment,<br /><span class="hero__title-glow">counted.</span>',
    lede: 'Count down to the dates ahead — birthdays, trips, exams — and see how long it’s been since the ones behind you. Plus a calculator for every question about time, and the sun wherever you are.',
    secondary: 'Make a countdown',
    meta: 'Free · No account · No ads',
    phoneAlt: 'Timity on iPhone: a live countdown to a trip to Lisbon, 12 days to go, broken down into weeks, days, hours, minutes and seconds, with 84% of the wait over.',
    liveLabel: 'New Year in',
    liveDays: { one: 'day', other: 'days' },
    cards: {
      birthday: { title: 'Mum’s Birthday', unit: 'days to go' },
      smokeFree: { title: 'Smoke-Free', unit: 'days ago' },
    },
  },

  units: {
    week: { one: 'Week', other: 'Weeks' },
    day: { one: 'Day', other: 'Days' },
    hour: { one: 'Hour', other: 'Hours' },
    minute: { one: 'Minute', other: 'Minutes' },
    second: { one: 'Second', other: 'Seconds' },
  },

  glance: {
    label: 'Timity at a glance',
    calculators: 'calculators, each answering one question',
    languages: 'languages: English, Deutsch, Español, Français',
    devices: 'devices, in sync: iPhone, iPad, Apple Watch',
    accounts: 'accounts, ads or trackers',
  },

  events: {
    eyebrow: 'Countdowns',
    title: 'The dates that matter,<br class="br-lg" /> always in sight.',
    lede: 'Birthdays, trips, exams, anniversaries — Timity counts the days to each, or since it happened. By the day, or live to the second.',
    ticks: [
      '<strong>Count down or count up</strong> — to a date ahead, or since one behind you, like the day you quit smoking.',
      '<strong>Repeats from daily to yearly</strong>, even in the Chinese, Hebrew and Islamic calendars, so lunar birthdays and holidays land on the right day.',
      '<strong>Make each one yours</strong> with a color and symbol, a photo, notes, a checklist, a progress bar, reminders and lists. Pin the ones that matter most.',
    ],
    alt: 'The Events list in Timity: pinned cards for a trip to Lisbon and Mum’s birthday, then upcoming and past events, each with its days to go or days ago.',
  },

  tryit: {
    eyebrow: 'Try it',
    title: 'Your countdown,<br class="br-lg" /> right here.',
    lede: 'Pick a date and watch the time tick — the way Timity shows it, only smaller. In the app, it lives on your Home Screen, your Lock Screen and your wrist.',
    nameLabel: 'Event',
    namePlaceholder: 'My event',
    dateLabel: 'Date',
    presetsLabel: 'Ideas',
    presets: { newYear: 'New Year', christmas: 'Christmas', summer: 'Summer', weekend: 'Weekend' },
    /** The day of December the Christmas preset counts to, as it is celebrated in the language. */
    christmasDay: 25,
    colorLabel: 'Color',
    colors: { lagoon: 'Lagoon', sunrise: 'Sunrise', blossom: 'Blossom', aurora: 'Aurora', ember: 'Ember', nightfall: 'Nightfall' },
    toGo: { one: 'day to go', other: 'days to go' },
    ago: { one: 'day ago', other: 'days ago' },
    today: 'Today is the day!',
    alsoLabel: 'That’s also',
    workdays: { one: '{n} workday (Monday to Friday)', other: '{n} workdays (Monday to Friday)' },
    weekends: { one: '{n} weekend', other: '{n} weekends' },
    heartbeats: 'about {n} heartbeats',
    fineprint: 'Workdays don’t count public holidays here. In Timity, they do — for your region.',
  },

  calculators: {
    eyebrow: 'Calculators',
    title: 'A calculator for every<br class="br-lg" /> question about time.',
    lede: 'No formulas, no settings to learn. Each calculator answers one question — pick the one you have and get the answer as you type.',
    groups: [
      {
        title: 'Dates &amp; Deadlines',
        items: [
          ['Count Days', 'How many days between two dates?'],
          ['Find a Date', 'Which date is 90 days from today?'],
          ['Workdays', 'How many workdays until a deadline?'],
          ['Bridge Days', 'Which days off give the longest breaks?'],
          ['Week Number', 'Which week of the year is it?'],
        ],
      },
      {
        title: 'Hours &amp; Time Zones',
        items: [
          ['Add Up Times', 'What do my times add up to?'],
          ['Work Hours', 'How long did I work, and what did I earn?'],
          ['Time Zones', 'What time is it for friends abroad?'],
          ['Flight Arrival', 'When do I land, in local time?'],
        ],
      },
      {
        title: 'You &amp; Your Family',
        items: [
          ['Bedtime', 'When should I go to bed tonight?'],
          ['Exact Age', 'How old am I, to the day?'],
          ['Milestones', 'When am I 10,000 days old?'],
          ['Life in Weeks', 'How many weeks have I lived so far?'],
          ['Due Date', 'When is the baby due?'],
        ],
      },
    ],
    listAlt: 'Calculate in Timity: calculators grouped into Dates &amp; Deadlines and Hours &amp; Time Zones, each with the question it answers.',
    alt: 'Count Days in Timity: from October 13 to November 13, 2026 is 31 days — also 4 weeks and 3 days, or 745 hours.',
  },

  sun: {
    eyebrow: 'Sun',
    title: 'Catch the golden hour.',
    lede: 'Sunrise, sunset, golden and blue hour and twilight — for where you are, or any city you choose, each in its own time zone. For the photo walk, the run before work, the evening on the balcony.',
    ticks: [
      '<strong>The sun’s path across the day</strong>, with its height right now and how much daylight you gain or lose.',
      '<strong>Any city in the world</strong>, in its own time zone — plan the sunset of your next trip from home.',
      '<strong>On your Home Screen</strong> as a widget, and on your Apple Watch.',
    ],
    alt: 'The Sun tab in Timity for Lisbon: the sun’s path across the day, sunrise at 7:42, sunset at 19:02, 11 hours 20 minutes of daylight, golden hour and blue hour.',
  },

  everywhere: {
    eyebrow: 'Everywhere',
    title: 'Never open the app<br class="br-lg" /> to know how long.',
    lede: 'Timity puts your countdowns wherever you look — and keeps them in sync across your devices through your own iCloud.',
    cards: [
      { title: 'Widgets', body: 'Your next event, a pinned one or a whole list on the Home Screen — in small, medium and large.' },
      { title: 'Lock Screen &amp; Watch faces', body: 'A glance at your wrist or your Lock Screen shows the days to go, with a ring that fills as the day comes closer.' },
      { title: 'Live Activities', body: 'The final hours count down live on the Lock Screen and in the Dynamic Island.' },
      { title: 'Apple Watch app', body: 'Your events on your wrist. Add new ones and delete old ones right there.' },
      { title: 'Siri &amp; Shortcuts', body: 'Ask how long until an event, add one by voice, or build it into your own shortcuts.' },
      { title: 'Control Center &amp; Spotlight', body: 'Add an event from Control Center, and find any of them by searching your iPhone.' },
    ],
    widgetDays: 'days',
    widgetTitle: 'Trip to Lisbon',
    widgetDate: 'Sun, Oct 25',
    liveTitle: 'Concert',
    liveIn: 'starts in',
  },

  details: {
    eyebrow: 'Thoughtful details',
    title: 'Quick to fill.<br class="br-lg" /> Lovely to look at.',
    cards: [
      { title: 'Just type it', body: 'Type “Mum’s birthday on 3 March” and Timity fills in the title, date, repeat, color and symbol.' },
      { title: 'Import in one go', body: 'Birthdays and anniversaries from Contacts, events from Calendar, and the public holidays of many countries.' },
      { title: 'Ready-made events', body: 'New Year’s Eve, payday, the weekend, summer or the next public holiday — they keep themselves up to date.' },
      { title: 'Reminders, your way', body: 'Get a heads-up days before, on the day, or at the moment it happens — and on milestones like 1,000 days.' },
      { title: 'Share a countdown', body: 'Send a beautiful card of any event to friends, or share the event itself for them to add.' },
      { title: 'Your Year in Review', body: 'Look back on the moments of the year — what you counted down to, and how long you’ve kept going.' },
    ],
  },

  ipad: {
    eyebrow: 'iPad',
    title: 'Room for every moment.',
    lede: 'On iPad, one sidebar takes you everywhere — your events, every calculator and the sun — with your list and the countdown side by side.',
    alt: 'Timity on iPad: a sidebar with Events, Calculate, Sun and Settings, the list of events, and the live countdown to a trip to Lisbon with its checklist.',
    points: [
      '<strong>Three columns</strong> — sidebar, list and countdown at once.',
      '<strong>Every calculator</strong> one tap away in the sidebar.',
      '<strong>Keyboard shortcuts</strong> for a new event, search and more.',
    ],
  },

  privacy: {
    eyebrow: 'Privacy',
    title: 'Your moments stay yours.',
    lede: 'Timity has no account and no server of its own. Your events live on your devices and in your private iCloud — nobody else can read them, including us.',
    pillars: [
      { title: 'No account', body: 'No sign-up, no email, no password. Open the app and start counting.' },
      { title: 'Your iCloud only', body: 'Sync runs through your private iCloud database, which only you can read. Or turn it off.' },
      { title: 'No ads, no tracking', body: 'No analytics, no advertising and no third-party code that collects data.' },
    ],
    link: 'Read the Privacy Policy',
  },

  support: {
    eyebrow: 'Free',
    title: 'Every feature. Free.',
    lede: 'Timity has no paywall and no ads. If you love it, you can support its development with a tip or a subscription — and pick an app icon to say thank you.',
    iconsLabel: 'Supporter app icons',
    themes: { classic: 'Classic', sunrise: 'Sunrise', lagoon: 'Lagoon', forest: 'Forest', rose: 'Rose', midnight: 'Midnight', ember: 'Ember' },
    note: 'Classic is free for everyone. The other icons come with a support subscription, each matched with its own tint.',
  },

  cta: {
    iconAlt: 'Timity app icon',
    title: 'Make every moment count.',
    lede: 'Timity is free on the App Store for iPhone, iPad and Apple Watch.',
    meta: 'Requires iOS 27 or later · Available in English, Deutsch, Español and Français',
  },

  footer: {
    label: 'Legal and contact',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use (Apple’s Standard EULA)',
    feedback: 'Send Feedback',
    github: 'Open source on GitHub',
    disclaimer:
      'Apple, the Apple logo, Apple Watch, iPad, iPhone, iCloud, Siri and App Store are trademarks of Apple Inc., registered in the U.S. and other countries.',
  },

  legal: {
    lastUpdated: 'Effective date',
    contents: 'Contents',
    otherLanguages: 'Also available in',
    privacyTitle: 'Privacy Policy',
    privacyDescription: 'How Timity handles your data: no account, no server of its own, no tracking. Events stay on your devices and in your private iCloud.',
  },
};
