// DelgaMedic — Content data
// All content is editable here. Designed to be CMS-friendly.

window.DM_DATA = {
  clinic: {
    name: "DelgaMedic",
    tagline: "Endocrinología Clínica & Nutrición",
    phone: "+591 700 00 000",
    whatsapp: "+591 700 00 000",
    whatsappUrl: "https://wa.me/59170000000",
    email: "contacto@delgamedic.com",
    address: "Zona Equipetrol, Santa Cruz de la Sierra, Bolivia",
    hours: {
      week: "Lun – Vie · 08:30 – 18:30",
      sat:  "Sábados · 09:00 – 13:00",
    },
    social: [
      { label: "Instagram", url: "#" },
      { label: "Facebook", url: "#" },
      { label: "LinkedIn", url: "#" },
    ],
  },

  hero: {
    eyebrow: "Endocrinología clínica · Nutrición",
    title: "Recupera tu salud y\nalcanza tu <em>peso ideal</em>",
    sub: "Tratamientos personalizados basados en evidencia científica para mejorar tu metabolismo y lograr resultados sostenibles, con el acompañamiento médico que tu cuerpo necesita.",
    stats: [
      { v: "12+", l: "años de experiencia clínica" },
      { v: "2,400+", l: "pacientes acompañados" },
      { v: "94%", l: "adherencia al tratamiento" },
    ],
    badge: "Atención médica personalizada en Santa Cruz",
  },

  specialists: [
    {
      id: "dra-heredia",
      name: "Dra. Leslie Heredia",
      role: "Medicina Interna · Nutrología",
      sub: "Especialista en Adelgazamiento y Alta Performance",
      credentials: "Universidad Católica Boliviana · Medicina Interna, Hospital Japonés (SCZ) · Posgrado en Nutrología, IPEMED São Paulo",
      bio: "Su práctica se enfoca en nutrición clínica, optimización metabólica y estrategias de adelgazamiento personalizadas orientadas al bienestar integral.",
      photo: "assets/dra-heredia.png",
      mono: "LH",
    },
    {
      id: "dr-peinado",
      name: "Dr. Paulo Enrique Peinado",
      role: "Endocrinología & Metabología",
      sub: "Especialista en Obesidad y Síndrome Metabólico",
      credentials: "Universidad Católica Boliviana · Endocrinología y Metabología, Universidad de São Paulo (USP) — Hospital das Clínicas",
      bio: "Su enfoque está orientado al diagnóstico y tratamiento de enfermedades metabólicas, obesidad y alteraciones hormonales que impactan directamente en la calidad de vida de sus pacientes.",
      photo: "assets/dr-peinado.png",
      mono: "PP",
    },
  ],

  treatments: [
    {
      id: "control-obesidad",
      slug: "control-obesidad-sobrepeso",
      name: "Control de Obesidad y Sobrepeso",
      category: "Programas integrales",
      eyebrow: "Programa médico integral",
      short: "Tratamiento médico personalizado para una pérdida de peso saludable, segura y sostenible.",
      duration: "Programa de 12 a 24 semanas",
      img: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=1400&q=80",
      benefits: [
        "Pérdida de peso saludable y progresiva",
        "Mejora de la composición corporal",
        "Reducción de riesgos metabólicos",
        "Reeducación de hábitos sostenibles",
      ],
      who: ["Personas con sobrepeso u obesidad", "Pacientes con resistencia a la insulina", "Quienes han recuperado peso tras dietas previas"],
      faqs: [
        { q: "¿Cuánto tiempo dura el programa?", a: "Cada programa se diseña a la medida del paciente. Por lo general, recomendamos un acompañamiento clínico de 12 a 24 semanas para asegurar resultados sostenibles y consolidar nuevos hábitos." },
        { q: "¿Se utiliza medicación?", a: "Solo cuando es clínicamente apropiado y siempre bajo supervisión médica continua. La base del tratamiento es nutricional, metabólica y de hábitos." },
        { q: "¿Qué incluye la consulta inicial?", a: "Una evaluación médica integral, antropometría avanzada, revisión de laboratorios recientes y un plan inicial personalizado." },
      ],
    },
    {
      id: "nutricion-clinica",
      slug: "nutricion-clinica-personalizada",
      name: "Nutrición Clínica Personalizada",
      category: "Programas integrales",
      eyebrow: "Plan nutricional a medida",
      short: "Plan nutricional adaptado a tus necesidades, objetivos y condición metabólica.",
      duration: "Seguimiento mensual",
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1400&q=80",
      benefits: [
        "Planes flexibles, no restrictivos",
        "Adaptados a tu estilo de vida",
        "Educación nutricional permanente",
        "Seguimiento clínico continuo",
      ],
      who: ["Personas que buscan mejorar su alimentación", "Pacientes con condiciones metabólicas", "Deportistas y profesionales activos"],
      faqs: [
        { q: "¿Tengo que dejar mis comidas favoritas?", a: "No. Trabajamos con tus preferencias y cultura alimentaria boliviana para construir un plan sostenible que puedas mantener toda la vida." },
        { q: "¿Cada cuánto reviso mi plan?", a: "Recomendamos un seguimiento mensual durante los primeros tres meses, y luego controles cada 6 a 8 semanas." },
      ],
    },
    {
      id: "control-metabolico",
      slug: "control-metabolico",
      name: "Control Metabólico",
      category: "Endocrinología",
      eyebrow: "Endocrinología avanzada",
      short: "Evaluación y seguimiento de alteraciones metabólicas para optimizar tu salud.",
      duration: "Evaluación + seguimiento",
      img: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=1400&q=80",
      benefits: [
        "Diagnóstico endocrino preciso",
        "Manejo de tiroides, glucosa y lípidos",
        "Prevención de complicaciones",
        "Monitoreo personalizado",
      ],
      who: ["Resistencia a la insulina o prediabetes", "Trastornos tiroideos", "Síndrome metabólico"],
      faqs: [
        { q: "¿Qué laboratorios necesito traer?", a: "Si tienes laboratorios recientes (últimos 6 meses), tráelos. Si no, solicitaremos los necesarios tras tu evaluación inicial." },
      ],
    },
    {
      id: "educacion-alimentaria",
      slug: "educacion-alimentaria",
      name: "Educación Alimentaria",
      category: "Hábitos y bienestar",
      eyebrow: "Hábitos para toda la vida",
      short: "Desarrollo de hábitos alimentarios sostenibles para mantener resultados a largo plazo.",
      duration: "Talleres + acompañamiento",
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1400&q=80",
      benefits: [
        "Lectura de etiquetas y compras inteligentes",
        "Planificación semanal de comidas",
        "Comer fuera de casa con criterio",
        "Educación familiar"
      ],
      who: ["Familias completas", "Pacientes en mantenimiento", "Personas que quieren comer mejor sin dietas"],
      faqs: [
        { q: "¿Es individual o grupal?", a: "Ofrecemos ambas modalidades. Las sesiones grupales fomentan el aprendizaje compartido; las individuales son ideales para situaciones específicas." },
      ],
    },
    {
      id: "reeducacion-nutricional",
      slug: "reeducacion-nutricional",
      name: "Reeducación Nutricional",
      category: "Hábitos y bienestar",
      eyebrow: "Cambia tu relación con la comida",
      short: "Para quienes han vivido años de dietas restrictivas. Reconstruimos una relación sana con la comida.",
      duration: "Programa de 16 semanas",
      img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=80",
      benefits: [
        "Sin restricciones extremas",
        "Manejo del hambre emocional",
        "Reintroducción de alimentos",
        "Resultados sostenibles"
      ],
      who: ["Historial de dietas yo-yo", "Relación complicada con la comida", "Personas en mantenimiento post-cirugía"],
      faqs: [
        { q: "¿Trabajan con psicólogos?", a: "Sí, cuando es necesario coordinamos con psicología clínica especializada en conducta alimentaria." },
      ],
    },
    {
      id: "pre-postoperatorio",
      slug: "pre-postoperatorio-bariatrico",
      name: "Pre y Post-operatorio Bariátrico",
      category: "Programas integrales",
      eyebrow: "Acompañamiento quirúrgico",
      short: "Preparación nutricional y seguimiento clínico para pacientes en cirugía bariátrica.",
      duration: "Protocolo médico extendido",
      img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1400&q=80",
      benefits: [
        "Preparación nutricional óptima",
        "Suplementación protocolizada",
        "Seguimiento postoperatorio",
        "Coordinación con tu cirujano"
      ],
      who: ["Candidatos a cirugía bariátrica", "Pacientes post-operados", "Seguimiento de largo plazo"],
      faqs: [
        { q: "¿Trabajan con todos los cirujanos?", a: "Sí, coordinamos con el equipo quirúrgico que el paciente elija o pueda recomendar." },
      ],
    },
  ],

  benefits: [
    { icon: "stethoscope", title: "Atención personalizada", text: "Cada plan se construye a partir de tu historia clínica, hábitos y objetivos." },
    { icon: "flask", title: "Basado en evidencia", text: "Protocolos respaldados por la literatura médica y guías internacionales." },
    { icon: "award", title: "Especialistas certificados", text: "Equipo médico con formación local e internacional de alto nivel." },
    { icon: "calendar", title: "Seguimiento continuo", text: "Acompañamiento clínico estructurado mientras dura tu programa." },
    { icon: "heart", title: "Enfoque integral", text: "Nutrición, metabolismo, hábitos, descanso y bienestar emocional." },
    { icon: "leaf", title: "Resultados sostenibles", text: "Sin dietas extremas. Cambios reales que se mantienen en el tiempo." },
  ],

  process: [
    { n: "01", title: "Evaluación médica integral", text: "Historia clínica completa, antropometría y revisión de laboratorios. Conocemos tu cuerpo y tu historia." },
    { n: "02", title: "Diagnóstico personalizado", text: "Integramos hallazgos clínicos y metabólicos para entender qué necesita tu cuerpo realmente." },
    { n: "03", title: "Plan nutricional y metabólico", text: "Un plan a medida, flexible y sostenible. Adaptado a tus tiempos, gustos y rutina." },
    { n: "04", title: "Seguimiento continuo", text: "Controles periódicos, ajustes y acompañamiento clínico mientras dura tu programa." },
    { n: "05", title: "Resultados sostenibles", text: "Consolidamos hábitos y te entregamos herramientas para mantener tus resultados de por vida." },
  ],

  testimonials: [
    {
      name: "María Fernanda V.",
      where: "Santa Cruz",
      rating: 5,
      quote: "Después de años de dietas que no funcionaban, en DelgaMedic encontré un enfoque que sí entiende cómo funciona mi cuerpo. Perdí 18 kilos en 9 meses y sigo sintiéndome igual de bien dos años después.",
    },
    {
      name: "Roberto S.",
      where: "Santa Cruz",
      rating: 5,
      quote: "Llegué con resistencia a la insulina y un diagnóstico de prediabetes. El acompañamiento del Dr. Peinado fue impecable, hoy mis indicadores están normales y mi energía es otra.",
    },
    {
      name: "Andrea L.",
      where: "Cochabamba",
      rating: 5,
      quote: "Lo que más valoro es que nunca me hicieron sentir juzgada. Trabajamos por etapas, sin prisa, y por primera vez los resultados se sostienen.",
    },
    {
      name: "Carlos M.",
      where: "Santa Cruz",
      rating: 5,
      quote: "El equipo es excepcional. Combinan rigor médico con un trato muy humano. Recomendaría DelgaMedic a cualquier persona que quiera tomarse en serio su salud.",
    },
  ],

  credentials: [
    "Sociedad Boliviana de Endocrinología",
    "ALAD · Asoc. Latinoamericana de Diabetes",
    "World Obesity Federation",
    "Colegio Médico de Bolivia",
    "Soc. Española de Endocrinología y Nutrición",
  ],

  blog: [
    {
      tag: "Metabolismo",
      title: "Resistencia a la insulina: la condición silenciosa detrás del peso",
      excerpt: "Por qué cada vez más adultos jóvenes la presentan y cómo detectarla a tiempo cambia el pronóstico.",
      read: "6 min de lectura",
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    },
    {
      tag: "Nutrición",
      title: "Por qué las dietas restrictivas casi siempre fallan",
      excerpt: "Lo que la ciencia dice sobre el peso recuperado y por qué la educación alimentaria es la única ruta sostenible.",
      read: "5 min de lectura",
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
    },
    {
      tag: "Hábitos",
      title: "El sueño como pilar metabólico: lo que pocos pacientes saben",
      excerpt: "Cómo dormir menos de 6 horas afecta directamente tu apetito, glucosa y composición corporal.",
      read: "4 min de lectura",
      img: "https://images.unsplash.com/photo-1541199249251-f713e6145474?auto=format&fit=crop&w=1200&q=80",
    },
  ],

  about: {
    historia: "DelgaMedic nació en Santa Cruz de la Sierra con una convicción simple: el tratamiento de la obesidad y las alteraciones metabólicas requiere medicina seria, no soluciones milagro. Desde nuestra primera consulta hemos acompañado a miles de pacientes con un enfoque clínico, humano y sostenido en el tiempo.",
    mision: "Ayudar a nuestros pacientes a recuperar su salud metabólica y peso ideal a través de medicina basada en evidencia, nutrición clínica y un acompañamiento humano excepcional.",
    vision: "Ser el referente en endocrinología clínica y nutrición metabólica en Bolivia, reconocidos por la calidad de nuestros resultados y el respeto absoluto a la dignidad de cada paciente.",
    valores: [
      { title: "Rigor científico", text: "Solo lo que la evidencia respalda. Sin atajos." },
      { title: "Respeto", text: "Cada paciente es escuchado y tratado con dignidad." },
      { title: "Compromiso", text: "Acompañamos hasta consolidar resultados." },
      { title: "Transparencia", text: "Claridad en diagnósticos, planes y expectativas." },
    ],
  },
};
