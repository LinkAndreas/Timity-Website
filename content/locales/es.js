// Spanish copy. Keys mirror en.js exactly (checked at build time). Uses "tú", as the app does.

export default {
  meta: {
    title: 'Timity — Cuentas atrás y calculadoras de tiempo para iPhone, iPad y Apple Watch',
    alternateName: 'Timity: cuenta atrás y días desde',
    description:
      'Cuenta los días hasta cumpleaños, viajes y plazos, y mira cuánto tiempo ha pasado desde los momentos que dejaste atrás. Catorce calculadoras para preguntas cotidianas sobre el tiempo, amanecer y atardecer en cualquier lugar, widgets y Apple Watch. Gratis, sin cuenta.',
    ogTitle: 'Timity — Cada momento cuenta',
    ogDescription: 'Cuentas atrás, días desde y calculadoras para cada pregunta sobre el tiempo, en iPhone, iPad y Apple Watch.',
    ogImageAlt: 'El icono de Timity —un anillo de cuenta atrás sobre naranja— con el texto: Timity, Cada momento cuenta.',
  },

  common: {
    skip: 'Ir al contenido',
    backToTop: 'Timity, volver arriba',
    sections: 'Secciones',
    download: 'Descargar',
    appStoreBadge: 'Descárgalo en el App Store',
    language: 'Idioma',
    chooseLanguage: 'Elegir idioma',
    home: 'Inicio',
    themeToDark: 'Cambiar al aspecto oscuro',
    themeToLight: 'Cambiar al aspecto claro',
  },

  nav: {
    events: 'Cuentas atrás',
    calculators: 'Calculadoras',
    sun: 'Sol',
    everywhere: 'Widgets y Watch',
    privacy: 'Privacidad',
  },

  hero: {
    eyebrow: 'Timity para iPhone, iPad y Apple Watch',
    title: 'Cada momento,<br /><span class="hero__title-glow">contado.</span>',
    lede: 'Cuenta los días hasta lo que está por llegar —cumpleaños, viajes, exámenes— y mira cuánto tiempo ha pasado desde lo que dejaste atrás. Además, una calculadora para cada pregunta sobre el tiempo, y el sol estés donde estés.',
    secondary: 'Crear una cuenta atrás',
    meta: 'Gratis · Sin cuenta · Sin anuncios',
    phoneAlt: 'Timity en el iPhone: una cuenta atrás en directo para un viaje a Lisboa, quedan 12 días, desglosados en semanas, días, horas, minutos y segundos; ha pasado el 84 % de la espera.',
    liveLabel: 'Año Nuevo en',
    liveDays: { one: 'día', other: 'días' },
    cards: {
      birthday: { title: 'Cumpleaños de mamá', unit: 'días restantes' },
      smokeFree: { title: 'Sin fumar', unit: 'días atrás' },
    },
  },

  units: {
    week: { one: 'Semana', other: 'Semanas' },
    day: { one: 'Día', other: 'Días' },
    hour: { one: 'Hora', other: 'Horas' },
    minute: { one: 'Minuto', other: 'Minutos' },
    second: { one: 'Segundo', other: 'Segundos' },
  },

  glance: {
    label: 'Timity de un vistazo',
    calculators: 'calculadoras, cada una responde a una pregunta',
    languages: 'idiomas: English, Deutsch, Español, Français',
    devices: 'dispositivos sincronizados: iPhone, iPad, Apple Watch',
    accounts: 'cuentas, anuncios o rastreadores',
  },

  events: {
    eyebrow: 'Cuentas atrás',
    title: 'Las fechas que importan,<br class="br-lg" /> siempre a la vista.',
    lede: 'Cumpleaños, viajes, exámenes, aniversarios: Timity cuenta los días que faltan para cada uno, o los que han pasado. Por días, o en directo hasta el segundo.',
    ticks: [
      '<strong>Cuenta atrás o hacia delante</strong>: hasta una fecha futura, o desde una pasada, como el día que dejaste de fumar.',
      '<strong>Repeticiones de diarias a anuales</strong>, incluso en los calendarios chino, hebreo e islámico, para que los cumpleaños lunares y las fiestas caigan en el día correcto.',
      '<strong>Hazlos tuyos</strong> con un color y un símbolo, una foto, notas, una lista de tareas, una barra de progreso, recordatorios y listas. Fija los más importantes.',
    ],
    alt: 'La lista de eventos de Timity: tarjetas fijadas para un viaje a Lisboa y el cumpleaños de mamá, y debajo los eventos próximos y pasados, cada uno con sus días.',
  },

  tryit: {
    eyebrow: 'Pruébalo',
    title: 'Tu cuenta atrás,<br class="br-lg" /> aquí mismo.',
    lede: 'Elige una fecha y mira cómo pasa el tiempo, tal como lo muestra Timity, solo que en pequeño. En la app vive en tu pantalla de inicio, tu pantalla bloqueada y tu muñeca.',
    nameLabel: 'Evento',
    namePlaceholder: 'Mi evento',
    dateLabel: 'Fecha',
    presetsLabel: 'Ideas',
    presets: { newYear: 'Año Nuevo', christmas: 'Navidad', summer: 'Verano', weekend: 'Fin de semana' },
    /** The day of December the Christmas preset counts to, as it is celebrated in the language. */
    christmasDay: 25,
    colorLabel: 'Color',
    colors: { lagoon: 'Laguna', sunrise: 'Amanecer', blossom: 'Flor', aurora: 'Aurora', ember: 'Brasa', nightfall: 'Anochecer' },
    toGo: { one: 'día restante', other: 'días restantes' },
    ago: { one: 'día atrás', other: 'días atrás' },
    today: '¡Hoy es el día!',
    alsoLabel: 'También son',
    workdays: { one: '{n} día laborable (de lunes a viernes)', other: '{n} días laborables (de lunes a viernes)' },
    weekends: { one: '{n} fin de semana', other: '{n} fines de semana' },
    heartbeats: 'unos {n} latidos',
    fineprint: 'Aquí los festivos cuentan como días laborables. En Timity no, según tu región.',
  },

  calculators: {
    eyebrow: 'Calculadoras',
    title: 'Una calculadora para cada<br class="br-lg" /> pregunta sobre el tiempo.',
    lede: 'Sin fórmulas ni ajustes que aprender. Cada calculadora responde a una pregunta: elige la tuya y obtén la respuesta mientras escribes.',
    groups: [
      {
        title: 'Fechas y plazos',
        items: [
          ['Contar días', '¿Cuántos días hay entre dos fechas?'],
          ['Buscar una fecha', '¿Qué fecha será dentro de 90 días?'],
          ['Días laborables', '¿Cuántos días laborables hasta un plazo?'],
          ['Puentes', '¿Qué días libres dan las pausas más largas?'],
          ['Número de semana', '¿En qué semana del año estamos?'],
        ],
      },
      {
        title: 'Horas y zonas horarias',
        items: [
          ['Sumar tiempos', '¿Cuánto suman mis tiempos?'],
          ['Horas de trabajo', '¿Cuánto he trabajado y cuánto he ganado?'],
          ['Zonas horarias', '¿Qué hora es para mis amigos en el extranjero?'],
          ['Llegada del vuelo', '¿A qué hora aterrizo, en hora local?'],
        ],
      },
      {
        title: 'Tú y tu familia',
        items: [
          ['Hora de dormir', '¿A qué hora debería acostarme esta noche?'],
          ['Edad exacta', '¿Qué edad tengo, al día exacto?'],
          ['Hitos', '¿Cuándo cumplo 10.000 días?'],
          ['La vida en semanas', '¿Cuántas semanas he vivido hasta ahora?'],
          ['Fecha prevista de parto', '¿Cuándo nacerá el bebé?'],
        ],
      },
    ],
    listAlt: 'Calcular en Timity: calculadoras agrupadas en Fechas y plazos y Horas y zonas horarias, cada una con la pregunta que responde.',
    alt: 'Contar días en Timity: del 13 oct 2026 al 13 nov 2026 hay 31 días, es decir, 4 semanas y 3 días, o 745 horas.',
  },

  sun: {
    eyebrow: 'Sol',
    title: 'Atrapa la hora dorada.',
    lede: 'Amanecer, atardecer, hora dorada, hora azul y crepúsculo, para donde estés o para cualquier ciudad que elijas, cada una en su zona horaria. Para el paseo fotográfico, la carrera antes del trabajo, la tarde en el balcón.',
    ticks: [
      '<strong>El recorrido del sol a lo largo del día</strong>, con su altura ahora mismo y cuánta luz ganas o pierdes.',
      '<strong>Cualquier ciudad del mundo</strong>, en su propia zona horaria: planifica el atardecer de tu próximo viaje desde casa.',
      '<strong>En tu pantalla de inicio</strong> como widget, y en tu Apple Watch.',
    ],
    alt: 'La pestaña Sol de Timity para Lisboa: el recorrido del sol durante el día, amanecer a las 7:42, atardecer a las 19:02, 11 h y 20 min de luz, hora dorada y hora azul.',
  },

  everywhere: {
    eyebrow: 'En todas partes',
    title: '¿Cuánto falta?<br class="br-lg" /> Sin abrir la app.',
    lede: 'Timity muestra tus cuentas atrás allá donde mires y las mantiene sincronizadas en tus dispositivos a través de tu propio iCloud.',
    cards: [
      { title: 'Widgets', body: 'Tu próximo evento, uno fijado o una lista entera en la pantalla de inicio, en tamaño pequeño, mediano y grande.' },
      { title: 'Pantalla bloqueada y esferas', body: 'Un vistazo a tu muñeca o a tu pantalla bloqueada te muestra los días que faltan, con un anillo que se llena a medida que se acerca el día.' },
      { title: 'Actividades en vivo', body: 'Las últimas horas se cuentan en directo en la pantalla bloqueada y en la Dynamic Island.' },
      { title: 'App para Apple Watch', body: 'Tus eventos en la muñeca. Añade nuevos y elimina los antiguos desde ahí mismo.' },
      { title: 'Siri y Atajos', body: 'Pregunta cuánto falta para un evento, añade uno con la voz o inclúyelo en tus propios atajos.' },
      { title: 'Centro de control y Spotlight', body: 'Añade un evento desde el centro de control y encuentra cualquiera buscando en tu iPhone.' },
    ],
    widgetDays: 'días',
    widgetTitle: 'Viaje a Lisboa',
    widgetDate: 'dom, 25 oct',
    liveTitle: 'Concierto',
    liveIn: 'empieza en',
  },

  details: {
    eyebrow: 'Detalles cuidados',
    title: 'Rápida de rellenar.<br class="br-lg" /> Bonita de ver.',
    cards: [
      { title: 'Solo escríbelo', body: 'Escribe «Cumpleaños de mamá el 3 de marzo» y Timity rellena el título, la fecha, la repetición, el color y el símbolo.' },
      { title: 'Importa de una vez', body: 'Cumpleaños y aniversarios de Contactos, eventos de Calendario y los festivos de muchos países.' },
      { title: 'Eventos listos', body: 'Nochevieja, el día de cobro, el fin de semana, el verano o el próximo festivo: se mantienen al día solos.' },
      { title: 'Recordatorios a tu manera', body: 'Recibe un aviso días antes, el mismo día o en el momento exacto, y en hitos como los 1.000 días.' },
      { title: 'Comparte una cuenta atrás', body: 'Envía a tus amigos una tarjeta preciosa de cualquier evento, o el propio evento para que lo añadan.' },
      { title: 'Tu resumen del año', body: 'Repasa los momentos del año: lo que esperabas con ganas y cuánto tiempo has aguantado.' },
    ],
  },

  ipad: {
    eyebrow: 'iPad',
    title: 'Espacio para cada momento.',
    lede: 'En el iPad, una barra lateral te lleva a todas partes —tus eventos, cada calculadora y el sol— con la lista y la cuenta atrás una al lado de la otra.',
    alt: 'Timity en el iPad: una barra lateral con Eventos, Calcular, Sol y Ajustes, la lista de eventos y la cuenta atrás en directo del viaje a Lisboa con su lista de tareas.',
    points: [
      '<strong>Tres columnas</strong>: barra lateral, lista y cuenta atrás a la vez.',
      '<strong>Cada calculadora</strong> a un toque en la barra lateral.',
      '<strong>Atajos de teclado</strong> para un evento nuevo, buscar y más.',
    ],
  },

  privacy: {
    eyebrow: 'Privacidad',
    title: 'Tus momentos son tuyos.',
    lede: 'Timity no tiene cuenta ni servidor propio. Tus eventos viven en tus dispositivos y en tu iCloud privado: nadie más puede leerlos, ni siquiera nosotros.',
    pillars: [
      { title: 'Sin cuenta', body: 'Sin registro, sin correo, sin contraseña. Abre la app y empieza a contar.' },
      { title: 'Solo tu iCloud', body: 'La sincronización pasa por tu base de datos privada de iCloud, que solo tú puedes leer. O desactívala.' },
      { title: 'Sin anuncios ni seguimiento', body: 'Sin análisis, sin publicidad y sin código de terceros que recopile datos.' },
    ],
    link: 'Leer la política de privacidad',
  },

  support: {
    eyebrow: 'Gratis',
    title: 'Todas las funciones. Gratis.',
    lede: 'Timity no tiene muro de pago ni anuncios. Si te encanta, puedes apoyar su desarrollo con una propina o una suscripción, y elegir un icono como agradecimiento.',
    iconsLabel: 'Iconos de apoyo',
    themes: { classic: 'Clásico', sunrise: 'Amanecer', lagoon: 'Laguna', forest: 'Bosque', rose: 'Rosa', midnight: 'Medianoche', ember: 'Brasa' },
    note: 'Clásico es gratis para todos. Los demás iconos llegan con una suscripción de apoyo, cada uno con su propio color de acento.',
  },

  cta: {
    iconAlt: 'Icono de Timity',
    title: 'Haz que cada momento cuente.',
    lede: 'Timity es gratis en el App Store para iPhone, iPad y Apple Watch.',
    meta: 'Requiere iOS 27 o posterior · Disponible en English, Deutsch, Español y Français',
  },

  footer: {
    label: 'Información legal y contacto',
    privacy: 'Política de privacidad',
    terms: 'Condiciones de uso (EULA estándar de Apple)',
    feedback: 'Enviar comentarios',
    github: 'Código abierto en GitHub',
    disclaimer:
      'Apple, el logotipo de Apple, Apple Watch, iPad, iPhone, iCloud, Siri y App Store son marcas comerciales de Apple Inc., registradas en EE. UU. y en otros países.',
  },

  legal: {
    lastUpdated: 'Fecha de entrada en vigor',
    contents: 'Contenido',
    otherLanguages: 'También disponible en',
    privacyTitle: 'Política de privacidad',
    privacyDescription: 'Cómo trata Timity tus datos: sin cuenta, sin servidor propio, sin seguimiento. Los eventos permanecen en tus dispositivos y en tu iCloud privado.',
  },
};
