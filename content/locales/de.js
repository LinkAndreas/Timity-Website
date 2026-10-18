// German copy. Keys mirror en.js exactly (checked at build time). Uses "du", as the app does.

export default {
  meta: {
    title: 'Timity — Countdowns & Zeitrechner für iPhone, iPad, Mac & Apple Watch',
    alternateName: 'Timity: Countdown & Tage seit',
    description:
      'Zähle die Tage bis zu Geburtstagen, Reisen und Fristen — und sieh, wie lange es her ist. Vierzehn Rechner für alltägliche Fragen rund um die Zeit, Sonne und Mond überall, Widgets, Mac und Apple Watch. Kostenlos, ohne Konto.',
    ogTitle: 'Timity — Jeder Moment zählt',
    ogDescription: 'Countdowns, Tage seit und Rechner für jede Frage rund um die Zeit — auf iPhone, iPad, Mac und Apple Watch.',
    ogImageAlt: 'Das Timity-App-Symbol — ein Countdown-Ring auf Orange — mit dem Schriftzug: Timity, Jeder Moment zählt.',
  },

  common: {
    skip: 'Zum Inhalt springen',
    backToTop: 'Timity, nach oben',
    sections: 'Bereiche',
    download: 'Laden',
    appStoreBadge: 'Laden im App Store',
    language: 'Sprache',
    chooseLanguage: 'Sprache wählen',
    home: 'Startseite',
    themeToDark: 'Zur dunklen Darstellung wechseln',
    themeToLight: 'Zur hellen Darstellung wechseln',
  },

  nav: {
    events: 'Countdowns',
    calculators: 'Rechner',
    sun: 'Sonne & Mond',
    everywhere: 'Widgets &amp; Watch',
    privacy: 'Datenschutz',
  },

  hero: {
    eyebrow: 'Timity für iPhone, iPad, Mac &amp; Apple Watch',
    title: 'Jeder Moment.<br /><span class="hero__title-glow">Gezählt.</span>',
    lede: 'Zähle die Tage bis zu dem, was vor dir liegt — Geburtstage, Reisen, Prüfungen — und sieh, wie lange es her ist, seit etwas passiert ist. Dazu ein Rechner für jede Frage rund um die Zeit und Sonne und Mond, wo immer du bist.',
    secondary: 'Countdown erstellen',
    meta: 'Kostenlos · Ohne Konto · Ohne Werbung',
    phoneAlt: 'Timity auf dem iPhone: ein Live-Countdown zur Reise nach Lissabon, noch 12 Tage, aufgeteilt in Wochen, Tage, Stunden, Minuten und Sekunden; 84 % der Wartezeit sind vorbei.',
    liveLabel: 'Neujahr in',
    liveDays: { one: 'Tag', other: 'Tage' },
    cards: {
      birthday: { title: 'Mamas Geburtstag', unit: 'Tage noch' },
      smokeFree: { title: 'Rauchfrei', unit: 'Tage her' },
    },
  },

  units: {
    week: { one: 'Woche', other: 'Wochen' },
    day: { one: 'Tag', other: 'Tage' },
    hour: { one: 'Stunde', other: 'Stunden' },
    minute: { one: 'Minute', other: 'Minuten' },
    second: { one: 'Sekunde', other: 'Sekunden' },
  },

  glance: {
    label: 'Timity auf einen Blick',
    calculators: 'Rechner, jeder beantwortet eine Frage',
    languages: 'Sprachen: English, Deutsch, Español, Français',
    devices: 'Geräte, synchron: iPhone, iPad, Mac, Apple Watch',
    accounts: 'Konten, Werbung oder Tracker',
  },

  events: {
    eyebrow: 'Countdowns',
    title: 'Was zählt,<br class="br-lg" /> immer im Blick.',
    lede: 'Geburtstage, Reisen, Prüfungen, Jahrestage — Timity zählt die Tage bis dahin oder seitdem. Tageweise oder live auf die Sekunde.',
    ticks: [
      '<strong>Runter- oder hochzählen</strong> — bis zu einem Datum oder seit einem, etwa dem Tag, an dem du mit dem Rauchen aufgehört hast.',
      '<strong>Wiederholungen von täglich bis jährlich</strong>, sogar im chinesischen, hebräischen und islamischen Kalender — Mondgeburtstage und Feste fallen auf den richtigen Tag.',
      '<strong>Mach jedes zu deinem</strong> — mit Farbe und Symbol, Foto, Notizen, Checkliste, Fortschrittsbalken, Erinnerungen und Listen. Hefte die wichtigsten an.',
      '<strong>Jedes Detail des Datums</strong> — Wochentag und Kalenderwoche, und bei Geburtstagen und Jahrestagen die genaue Zeit seit dem allerersten, von Jahren bis zu Sekunden.',
    ],
    alt: 'Die Ereignisliste in Timity: angeheftete Karten für die Reise nach Lissabon und Mamas Geburtstag, darunter bevorstehende und vergangene Ereignisse mit ihren Tagen.',
  },

  tryit: {
    eyebrow: 'Ausprobieren',
    title: 'Dein Countdown,<br class="br-lg" /> direkt hier.',
    lede: 'Wähle ein Datum und sieh der Zeit beim Ticken zu — so, wie Timity sie zeigt, nur kleiner. In der App lebt er auf deinem Home-Bildschirm, deinem Sperrbildschirm und an deinem Handgelenk.',
    nameLabel: 'Ereignis',
    namePlaceholder: 'Mein Ereignis',
    dateLabel: 'Datum',
    presetsLabel: 'Ideen',
    presets: { newYear: 'Neujahr', christmas: 'Weihnachten', summer: 'Sommer', weekend: 'Wochenende' },
    /** The day of December the Christmas preset counts to, as it is celebrated in the language. */
    christmasDay: 24,
    colorLabel: 'Farbe',
    colors: { lagoon: 'Lagune', sunrise: 'Sonnenaufgang', blossom: 'Blüte', aurora: 'Polarlicht', ember: 'Glut', nightfall: 'Abenddämmerung' },
    toGo: { one: 'Tag noch', other: 'Tage noch' },
    ago: { one: 'Tag her', other: 'Tage her' },
    today: 'Heute ist der Tag!',
    alsoLabel: 'Das sind auch',
    workdays: { one: '{n} Arbeitstag (Montag bis Freitag)', other: '{n} Arbeitstage (Montag bis Freitag)' },
    weekends: { one: '{n} Wochenende', other: '{n} Wochenenden' },
    heartbeats: 'rund {n} Herzschläge',
    fineprint: 'Feiertage zählen hier als Arbeitstage. In Timity nicht — passend zu deiner Region.',
  },

  calculators: {
    eyebrow: 'Rechner',
    title: 'Ein Rechner für jede<br class="br-lg" /> Frage rund um die Zeit.',
    lede: 'Keine Formeln, keine Einstellungen zum Lernen. Jeder Rechner beantwortet eine Frage — wähle deine und sieh die Antwort, während du tippst.',
    groups: [
      {
        title: 'Daten &amp; Fristen',
        items: [
          ['Zeitspanne', 'Wie viel Zeit liegt zwischen zwei Daten?'],
          ['Datum finden', 'Welches Datum ist in 90 Tagen?'],
          ['Arbeitstage', 'Wie viele Arbeitstage bis zur Frist?'],
          ['Brückentage', 'Welche freien Tage bringen die längste Pause?'],
          ['Kalenderwoche', 'Welche Kalenderwoche ist gerade?'],
          ['Kalenderumrechner', 'Welches Datum ist es im hebräischen oder islamischen Kalender?'],
        ],
      },
      {
        title: 'Stunden &amp; Zeitzonen',
        items: [
          ['Zeiten addieren', 'Was ergeben meine Zeiten zusammen?'],
          ['Arbeitszeit', 'Wie lange habe ich gearbeitet, und was habe ich verdient?'],
          ['Zeitzonen', 'Wie spät ist es bei Freunden im Ausland?'],
          ['Flugankunft', 'Wann lande ich, in Ortszeit?'],
          ['Schlafenszeit', 'Wann sollte ich heute schlafen gehen?'],
        ],
      },
      {
        title: 'Du &amp; deine Familie',
        items: [
          ['Genaues Alter', 'Wie alt bin ich, auf den Tag genau?'],
          ['Meilensteine', 'Wann bin ich 10.000 Tage alt?'],
          ['Leben in Wochen', 'Wie viele Wochen habe ich schon gelebt?'],
        ],
      },
    ],
    listAlt: 'Rechnen in Timity: Rechner, gruppiert in Daten &amp; Fristen sowie Stunden &amp; Zeitzonen, jeder mit der Frage, die er beantwortet.',
    alt: 'Zeitspanne in Timity: vom 13.10.2026 bis zum 13.11.2026 sind es 31 Tage — oder 4 Wochen und 3 Tage, oder 745 Stunden.',
  },

  sun: {
    eyebrow: 'Sonne &amp; Mond',
    title: 'Erwisch die Goldene Stunde.',
    lede: 'Sonnenaufgang, Sonnenuntergang, Goldene und Blaue Stunde und Dämmerung — und der Mond — für deinen Ort oder jede Stadt, die du wählst, jeweils in ihrer Zeitzone. Für den Fotospaziergang, die Runde vor der Arbeit, den Abend auf dem Balkon.',
    ticks: [
      '<strong>Der Lauf der Sonne über den Tag</strong>, mit ihrer Höhe gerade jetzt und wie viel Tageslicht du gewinnst oder verlierst.',
      '<strong>Auch der Mond</strong> — die heutige Phase, die Phasen eines Monats, Mondaufgang und -untergang und die Vollmonde des Jahres.',
      '<strong>Jede Stadt der Welt</strong>, in ihrer eigenen Zeitzone — plane den Sonnenuntergang deiner nächsten Reise schon von zu Hause.',
      '<strong>Auf dem Home-Bildschirm</strong> als Widget und auf deiner Apple Watch.',
    ],
    alt: 'Der Tab Sonne in Timity für Lissabon: der Lauf der Sonne über den Tag, Sonnenaufgang 7:42, Sonnenuntergang 19:02, 11 Std. 20 Min. Tageslicht, Goldene und Blaue Stunde.',
  },

  everywhere: {
    eyebrow: 'Überall',
    title: 'Wie lange noch?<br class="br-lg" /> Ohne die App zu öffnen.',
    lede: 'Timity zeigt deine Countdowns überall, wo du hinschaust — und hält sie über deine eigene iCloud auf allen Geräten synchron.',
    cards: [
      { title: 'Widgets', body: 'Dein nächstes Ereignis, ein angeheftetes oder eine ganze Liste auf dem Home-Bildschirm und auf dem Mac-Schreibtisch — klein, mittel und groß.' },
      { title: 'Sperrbildschirm &amp; Zifferblätter', body: 'Ein Blick aufs Handgelenk oder den Sperrbildschirm zeigt die Tage, mit einem Ring, der sich füllt, je näher der Tag rückt.' },
      { title: 'Live-Aktivitäten', body: 'Die letzten Stunden zählen live auf dem Sperrbildschirm und in der Dynamic Island herunter.' },
      { title: 'Apple Watch App', body: 'Deine Ereignisse am Handgelenk. Neue hinzufügen und alte löschen, direkt dort.' },
      { title: 'Siri &amp; Kurzbefehle', body: 'Frag, wie lange es noch bis zu einem Ereignis dauert, füge eines per Sprache hinzu oder bau es in deine Kurzbefehle ein.' },
      { title: 'Kontrollzentrum &amp; Spotlight', body: 'Füge ein Ereignis aus dem Kontrollzentrum hinzu und finde jedes über die Suche auf deinem iPhone.' },
    ],
    widgetDays: 'Tage',
    widgetTitle: 'Reise nach Lissabon',
    widgetDate: 'So., 25. Okt.',
    liveTitle: 'Konzert',
    liveIn: 'beginnt in',
  },

  details: {
    eyebrow: 'Durchdachte Details',
    title: 'Schnell ausgefüllt.<br class="br-lg" /> Schön anzusehen.',
    cards: [
      { title: 'Einfach eintippen', body: 'Tippe „Mamas Geburtstag am 3. März“, und Timity füllt Titel, Datum, Wiederholung, Farbe und Symbol aus.' },
      { title: 'Alles auf einmal importieren', body: 'Geburtstage und Jahrestage aus Kontakte, Termine aus Kalender und die Feiertage vieler Länder.' },
      { title: 'Fertige Ereignisse', body: 'Silvester, Zahltag, Wochenende, Sommer oder der nächste Feiertag — sie halten sich selbst aktuell.' },
      { title: 'Erinnerungen nach Wunsch', body: 'Lass dich Tage vorher, am Tag selbst oder im Moment erinnern — und bei Meilensteinen wie 1.000 Tagen.' },
      { title: 'Countdowns teilen', body: 'Schick Freunden eine schöne Karte von jedem Ereignis — oder das Ereignis selbst zum Hinzufügen.' },
      { title: 'Dein Jahresrückblick', body: 'Schau zurück auf die Momente des Jahres — worauf du hingefiebert hast und wie lange du durchgehalten hast.' },
    ],
  },

  ipad: {
    eyebrow: 'iPad &amp; Mac',
    title: 'Platz für jeden Moment.',
    lede: 'Auf iPad und Mac bringt dich eine Seitenleiste überallhin — zu deinen Ereignissen, jedem Rechner, Sonne und Mond —, mit Liste und Countdown nebeneinander.',
    alt: 'Timity auf dem iPad: eine Seitenleiste mit Ereignisse, Rechnen, Sonne und Einstellungen, die Ereignisliste und der Live-Countdown zur Reise nach Lissabon mit Checkliste.',
    points: [
      '<strong>Drei Spalten</strong> — Seitenleiste, Liste und Countdown zugleich.',
      '<strong>Jeder Rechner</strong> nur einen Tipp entfernt in der Seitenleiste.',
      '<strong>Tastaturkurzbefehle</strong> für neues Ereignis, Suche und mehr.',
      '<strong>Eine echte Mac-App</strong> — deine nächsten Countdowns in der Menüleiste, ein Ereignis-Menü, Ereignisse in eigenen Fenstern und Widerrufen.',
    ],
  },

  privacy: {
    eyebrow: 'Datenschutz',
    title: 'Deine Momente bleiben deine.',
    lede: 'Timity hat kein Konto und keinen eigenen Server. Deine Ereignisse liegen auf deinen Geräten und in deiner privaten iCloud — niemand sonst kann sie lesen, auch wir nicht.',
    pillars: [
      { title: 'Kein Konto', body: 'Keine Anmeldung, keine E-Mail, kein Passwort. App öffnen und loszählen.' },
      { title: 'Nur deine iCloud', body: 'Die Synchronisierung läuft über deine private iCloud-Datenbank, die nur du lesen kannst. Oder schalte sie ab.' },
      { title: 'Keine Werbung, kein Tracking', body: 'Keine Analyse, keine Werbung und kein Code Dritter, der Daten sammelt.' },
    ],
    link: 'Datenschutzerklärung lesen',
  },

  support: {
    eyebrow: 'Kostenlos',
    title: 'Jede Funktion. Kostenlos.',
    lede: 'Timity hat keine Bezahlschranke und keine Werbung. Wenn du die App magst, kannst du ihre Entwicklung mit einem Trinkgeld oder einem Abo unterstützen — und dir als Dankeschön ein App-Symbol aussuchen.',
    iconsLabel: 'Supporter-App-Symbole',
    themes: { classic: 'Klassisch', sunrise: 'Sonnenaufgang', lagoon: 'Lagune', forest: 'Wald', rose: 'Rosé', midnight: 'Mitternacht', ember: 'Glut' },
    note: 'Klassisch ist für alle kostenlos. Die anderen Symbole gibt es mit einem Unterstützungs-Abo, jedes mit seiner eigenen Akzentfarbe.',
  },

  cta: {
    iconAlt: 'Timity-App-Symbol',
    title: 'Lass jeden Moment zählen.',
    lede: 'Timity ist kostenlos im App Store für iPhone, iPad, Mac und Apple Watch.',
    meta: 'Erfordert iOS 27 oder macOS 27 oder neuer · Auf English, Deutsch, Español und Français',
  },

  footer: {
    label: 'Rechtliches und Kontakt',
    privacy: 'Datenschutzerklärung',
    terms: 'Nutzungsbedingungen (Standard-EULA von Apple)',
    feedback: 'Feedback senden',
    github: 'Open Source auf GitHub',
    disclaimer:
      'Apple, das Apple Logo, Apple Watch, iPad, iPhone, Mac, macOS, iCloud, Siri und App Store sind Marken der Apple Inc., die in den USA und weiteren Ländern eingetragen sind.',
  },

  legal: {
    lastUpdated: 'Gültig ab',
    contents: 'Inhalt',
    otherLanguages: 'Auch verfügbar auf',
    privacyTitle: 'Datenschutzerklärung',
    privacyDescription: 'Wie Timity mit deinen Daten umgeht: kein Konto, kein eigener Server, kein Tracking. Ereignisse bleiben auf deinen Geräten und in deiner privaten iCloud.',
  },
};
