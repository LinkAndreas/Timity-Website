// French copy. Keys mirror en.js exactly (checked at build time). Uses "vous", as the app does.

export default {
  meta: {
    title: 'Timity — Comptes à rebours et calculateurs de temps pour iPhone, iPad et Apple Watch',
    alternateName: 'Timity : compte à rebours et jours écoulés',
    description:
      'Comptez les jours jusqu’aux anniversaires, voyages et échéances, et voyez depuis combien de temps vos grands moments sont passés. Quatorze calculateurs pour les questions de tous les jours sur le temps, lever et coucher du soleil partout, widgets et Apple Watch. Gratuit, sans compte.',
    ogTitle: 'Timity — Chaque instant compte',
    ogDescription: 'Comptes à rebours, jours écoulés et calculateurs pour chaque question sur le temps — sur iPhone, iPad et Apple Watch.',
    ogImageAlt: 'L’icône de Timity — un anneau de compte à rebours sur fond orange — avec le texte : Timity, Chaque instant compte.',
  },

  common: {
    skip: 'Aller au contenu',
    backToTop: 'Timity, retour en haut',
    sections: 'Sections',
    download: 'Télécharger',
    appStoreBadge: 'Télécharger dans l’App Store',
    language: 'Langue',
    chooseLanguage: 'Choisir la langue',
    home: 'Accueil',
    themeToDark: 'Passer à l’apparence sombre',
    themeToLight: 'Passer à l’apparence claire',
  },

  nav: {
    events: 'Comptes à rebours',
    calculators: 'Calculateurs',
    sun: 'Soleil',
    everywhere: 'Widgets et Watch',
    privacy: 'Confidentialité',
  },

  hero: {
    eyebrow: 'Timity pour iPhone, iPad et Apple Watch',
    title: 'Chaque instant,<br /><span class="hero__title-glow">compté.</span>',
    lede: 'Comptez les jours jusqu’à ce qui vous attend — anniversaires, voyages, examens — et voyez depuis combien de temps vos grands moments sont passés. Avec un calculateur pour chaque question sur le temps, et le soleil où que vous soyez.',
    secondary: 'Créer un compte à rebours',
    meta: 'Gratuit · Sans compte · Sans publicité',
    phoneAlt: 'Timity sur iPhone : un compte à rebours en direct jusqu’à un voyage à Lisbonne, 12 jours restants, détaillés en semaines, jours, heures, minutes et secondes ; 84 % de l’attente est passé.',
    liveLabel: 'Nouvel An dans',
    liveDays: { one: 'jour', other: 'jours' },
    cards: {
      birthday: { title: 'Anniversaire de maman', unit: 'jours restants' },
      smokeFree: { title: 'Sans tabac', unit: 'jours écoulés' },
    },
  },

  units: {
    week: { one: 'Semaine', other: 'Semaines' },
    day: { one: 'Jour', other: 'Jours' },
    hour: { one: 'Heure', other: 'Heures' },
    minute: { one: 'Minute', other: 'Minutes' },
    second: { one: 'Seconde', other: 'Secondes' },
  },

  glance: {
    label: 'Timity en un coup d’œil',
    calculators: 'calculateurs, chacun répond à une question',
    languages: 'langues : English, Deutsch, Español, Français',
    devices: 'appareils synchronisés : iPhone, iPad, Apple Watch',
    accounts: 'compte, publicité ou traqueur',
  },

  events: {
    eyebrow: 'Comptes à rebours',
    title: 'Les dates qui comptent,<br class="br-lg" /> toujours en vue.',
    lede: 'Anniversaires, voyages, examens, fêtes — Timity compte les jours jusqu’à chacun, ou depuis qu’il a eu lieu. Au jour près, ou en direct à la seconde.',
    ticks: [
      '<strong>Compte à rebours ou jours écoulés</strong> — jusqu’à une date à venir, ou depuis une date passée, comme le jour où vous avez arrêté de fumer.',
      '<strong>Répétitions de quotidiennes à annuelles</strong>, même dans les calendriers chinois, hébraïque et musulman, pour que les anniversaires lunaires et les fêtes tombent le bon jour.',
      '<strong>Personnalisez chacun</strong> avec une couleur et un symbole, une photo, des notes, une liste de contrôle, une barre de progression, des rappels et des listes. Épinglez les plus importants.',
    ],
    alt: 'La liste des événements dans Timity : des cartes épinglées pour un voyage à Lisbonne et l’anniversaire de maman, puis les événements à venir et passés, chacun avec ses jours.',
  },

  tryit: {
    eyebrow: 'Essayez',
    title: 'Votre compte à rebours,<br class="br-lg" /> ici même.',
    lede: 'Choisissez une date et regardez le temps défiler — comme Timity l’affiche, en plus petit. Dans l’app, il vit sur votre écran d’accueil, votre écran verrouillé et votre poignet.',
    nameLabel: 'Événement',
    namePlaceholder: 'Mon événement',
    dateLabel: 'Date',
    presetsLabel: 'Idées',
    presets: { newYear: 'Nouvel An', christmas: 'Noël', summer: 'Été', weekend: 'Week-end' },
    /** The day of December the Christmas preset counts to, as it is celebrated in the language. */
    christmasDay: 25,
    colorLabel: 'Couleur',
    colors: { lagoon: 'Lagon', sunrise: 'Aube', blossom: 'Floraison', aurora: 'Aurore', ember: 'Braise', nightfall: 'Crépuscule' },
    toGo: { one: 'jour restant', other: 'jours restants' },
    ago: { one: 'jour écoulé', other: 'jours écoulés' },
    today: 'C’est le grand jour !',
    alsoLabel: 'Cela fait aussi',
    workdays: { one: '{n} jour ouvré (du lundi au vendredi)', other: '{n} jours ouvrés (du lundi au vendredi)' },
    weekends: { one: '{n} week-end', other: '{n} week-ends' },
    heartbeats: 'environ {n} battements de cœur',
    fineprint: 'Ici, les jours fériés comptent comme jours ouvrés. Pas dans Timity, qui suit votre région.',
  },

  calculators: {
    eyebrow: 'Calculateurs',
    title: 'Un calculateur pour chaque<br class="br-lg" /> question sur le temps.',
    lede: 'Pas de formules, pas de réglages à apprendre. Chaque calculateur répond à une question — choisissez la vôtre et obtenez la réponse pendant que vous tapez.',
    groups: [
      {
        title: 'Dates et échéances',
        items: [
          ['Compter les jours', 'Combien de jours entre deux dates ?'],
          ['Trouver une date', 'Quelle date dans 90 jours ?'],
          ['Jours ouvrés', 'Combien de jours ouvrés avant une échéance ?'],
          ['Ponts', 'Quels congés donnent les plus longues pauses ?'],
          ['Numéro de semaine', 'Quelle semaine de l’année sommes-nous ?'],
        ],
      },
      {
        title: 'Heures et fuseaux horaires',
        items: [
          ['Additionner des durées', 'Quel est le total de mes durées ?'],
          ['Heures de travail', 'Combien de temps ai-je travaillé, et combien ai-je gagné ?'],
          ['Fuseaux horaires', 'Quelle heure est-il chez mes amis à l’étranger ?'],
          ['Arrivée du vol', 'À quelle heure j’atterris, en heure locale ?'],
        ],
      },
      {
        title: 'Vous et votre famille',
        items: [
          ['Heure du coucher', 'À quelle heure me coucher ce soir ?'],
          ['Âge exact', 'Quel âge ai-je, au jour près ?'],
          ['Étapes', 'Quand aurai-je 10 000 jours ?'],
          ['La vie en semaines', 'Combien de semaines ai-je vécu jusqu’ici ?'],
          ['Date du terme', 'Quand le bébé doit-il naître ?'],
        ],
      },
    ],
    listAlt: 'Calculer dans Timity : des calculateurs regroupés en Dates et échéances et Heures et fuseaux horaires, chacun avec la question à laquelle il répond.',
    alt: 'Compter les jours dans Timity : du 13 oct. 2026 au 13 nov. 2026, il y a 31 jours — soit 4 semaines et 3 jours, ou 745 heures.',
  },

  sun: {
    eyebrow: 'Soleil',
    title: 'Ne manquez plus l’heure dorée.',
    lede: 'Lever et coucher du soleil, heure dorée, heure bleue et crépuscule — là où vous êtes ou dans la ville de votre choix, chacune dans son fuseau horaire. Pour la balade photo, le footing avant le travail, la soirée sur le balcon.',
    ticks: [
      '<strong>La course du soleil dans la journée</strong>, avec sa hauteur en ce moment et la lumière du jour gagnée ou perdue.',
      '<strong>Toutes les villes du monde</strong>, dans leur propre fuseau horaire — préparez le coucher de soleil de votre prochain voyage depuis chez vous.',
      '<strong>Sur votre écran d’accueil</strong> en widget, et sur votre Apple Watch.',
    ],
    alt: 'L’onglet Soleil de Timity pour Lisbonne : la course du soleil dans la journée, lever à 7:42, coucher à 19:02, 11 h 20 min de jour, heure dorée et heure bleue.',
  },

  everywhere: {
    eyebrow: 'Partout',
    title: 'Combien de temps encore ?<br class="br-lg" /> Sans ouvrir l’app.',
    lede: 'Timity affiche vos comptes à rebours partout où vous regardez — et les garde synchronisés sur vos appareils grâce à votre propre iCloud.',
    cards: [
      { title: 'Widgets', body: 'Votre prochain événement, un événement épinglé ou toute une liste sur l’écran d’accueil — en petit, moyen et grand format.' },
      { title: 'Écran verrouillé et cadrans', body: 'Un coup d’œil à votre poignet ou à votre écran verrouillé affiche les jours restants, avec un anneau qui se remplit à l’approche du jour J.' },
      { title: 'Activités en direct', body: 'Les dernières heures s’égrènent en direct sur l’écran verrouillé et dans la Dynamic Island.' },
      { title: 'App Apple Watch', body: 'Vos événements au poignet. Ajoutez-en de nouveaux et supprimez les anciens, directement là.' },
      { title: 'Siri et Raccourcis', body: 'Demandez combien de temps il reste avant un événement, ajoutez-en un à la voix, ou intégrez-le à vos raccourcis.' },
      { title: 'Centre de contrôle et Spotlight', body: 'Ajoutez un événement depuis le centre de contrôle, et retrouvez-les tous en cherchant sur votre iPhone.' },
    ],
    widgetDays: 'jours',
    widgetTitle: 'Voyage à Lisbonne',
    widgetDate: 'dim. 25 oct.',
    liveTitle: 'Concert',
    liveIn: 'commence dans',
  },

  details: {
    eyebrow: 'Des détails soignés',
    title: 'Vite rempli.<br class="br-lg" /> Agréable à regarder.',
    cards: [
      { title: 'Tapez-le, simplement', body: 'Tapez « Anniversaire de maman le 3 mars » et Timity remplit le titre, la date, la répétition, la couleur et le symbole.' },
      { title: 'Tout importer d’un coup', body: 'Anniversaires depuis Contacts, événements depuis Calendrier, et les jours fériés de nombreux pays.' },
      { title: 'Événements tout prêts', body: 'La Saint-Sylvestre, le jour de paie, le week-end, l’été ou le prochain jour férié — ils se mettent à jour tout seuls.' },
      { title: 'Des rappels à votre façon', body: 'Soyez prévenu quelques jours avant, le jour même ou à l’instant précis — et aux étapes comme les 1 000 jours.' },
      { title: 'Partager un compte à rebours', body: 'Envoyez à vos amis une jolie carte de n’importe quel événement, ou l’événement lui-même pour qu’ils l’ajoutent.' },
      { title: 'Votre bilan de l’année', body: 'Revivez les moments de l’année — ce que vous attendiez avec impatience, et depuis combien de temps vous tenez bon.' },
    ],
  },

  ipad: {
    eyebrow: 'iPad',
    title: 'De la place pour chaque instant.',
    lede: 'Sur iPad, une barre latérale vous emmène partout — vos événements, chaque calculateur et le soleil — avec la liste et le compte à rebours côte à côte.',
    alt: 'Timity sur iPad : une barre latérale avec Évènements, Calculer, Soleil et Réglages, la liste des événements et le compte à rebours en direct du voyage à Lisbonne avec sa liste de contrôle.',
    points: [
      '<strong>Trois colonnes</strong> — barre latérale, liste et compte à rebours en même temps.',
      '<strong>Chaque calculateur</strong> à portée de toucher dans la barre latérale.',
      '<strong>Raccourcis clavier</strong> pour un nouvel événement, la recherche et plus encore.',
    ],
  },

  privacy: {
    eyebrow: 'Confidentialité',
    title: 'Vos instants restent à vous.',
    lede: 'Timity n’a ni compte ni serveur à elle. Vos événements restent sur vos appareils et dans votre iCloud privé — personne d’autre ne peut les lire, pas même nous.',
    pillars: [
      { title: 'Pas de compte', body: 'Pas d’inscription, pas d’e-mail, pas de mot de passe. Ouvrez l’app et commencez à compter.' },
      { title: 'Votre iCloud, et c’est tout', body: 'La synchronisation passe par votre base de données iCloud privée, que vous seul pouvez lire. Ou désactivez-la.' },
      { title: 'Ni publicité ni suivi', body: 'Pas d’analyse, pas de publicité et aucun code tiers qui collecte des données.' },
    ],
    link: 'Lire la politique de confidentialité',
  },

  support: {
    eyebrow: 'Gratuit',
    title: 'Toutes les fonctions. Gratuites.',
    lede: 'Timity n’a ni paywall ni publicité. Si vous l’aimez, vous pouvez soutenir son développement par un pourboire ou un abonnement — et choisir une icône en remerciement.',
    iconsLabel: 'Icônes de soutien',
    themes: { classic: 'Classique', sunrise: 'Aube', lagoon: 'Lagon', forest: 'Forêt', rose: 'Rose', midnight: 'Minuit', ember: 'Braise' },
    note: 'Classique est gratuite pour tous. Les autres icônes accompagnent un abonnement de soutien, chacune avec sa propre couleur d’accent.',
  },

  cta: {
    iconAlt: 'Icône de Timity',
    title: 'Faites compter chaque instant.',
    lede: 'Timity est gratuite sur l’App Store pour iPhone, iPad et Apple Watch.',
    meta: 'Nécessite iOS 27 ou version ultérieure · Disponible en English, Deutsch, Español et Français',
  },

  footer: {
    label: 'Mentions légales et contact',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions d’utilisation (CLUF standard d’Apple)',
    feedback: 'Envoyer un commentaire',
    github: 'Open source sur GitHub',
    disclaimer:
      'Apple, le logo Apple, Apple Watch, iPad, iPhone, iCloud, Siri et App Store sont des marques d’Apple Inc., déposées aux États-Unis et dans d’autres pays.',
  },

  legal: {
    lastUpdated: 'Date d’entrée en vigueur',
    contents: 'Sommaire',
    otherLanguages: 'Également disponible en',
    privacyTitle: 'Politique de confidentialité',
    privacyDescription: 'Comment Timity traite vos données : pas de compte, pas de serveur à elle, pas de suivi. Les événements restent sur vos appareils et dans votre iCloud privé.',
  },
};
