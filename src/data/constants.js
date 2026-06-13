/* ============================================================
   🎨 DESIGN TOKENS
   ============================================================ */
export const COLORS = {
  bg: "#060915",
  bgCard: "#0b0f1e",
  bgCardHover: "#0f1428",
  border: "#141929",
  borderAccent: "#F59E0B",
  amber: "#F59E0B",
  amberDim: "#D97706",
  amberGlow: "#FCD34D",
  text: "#F0EDE8",
  textMuted: "#4B5563",
  textDim: "#8B8FA8",
  white: "#FFFFFF",
};

/* ============================================================
   📝 CONTENT — bilingual
   ============================================================ */

export const NAME = "Kevin William";

export const CONTENT = {
  fr: {
    role: "Développeur Full-Stack",
    roleWords: ["des apps React.", "des APIs Node.js.", "des scripts Python.", "des UIs qui captivent.", "des modèles d'IA.", "des systèmes distribués."],
    heroCta: "Voir mes projets",
    heroAvailable: "Disponible pour une alternance Master",
    bio: `Étudiant en L3 Informatique, je construis des applications web robustes avec React, Node.js et Python. Passionné par l'ingénierie logicielle et l'expérience utilisateur, je m'oriente vers un Master — et vise à créer des produits qui font une vraie différence.`,
    bioIntro: "Je construis ",
    aboutTitle: "À propos de moi",
    aboutItems: [
      ["Master Informatique", "En cours d'entrée"],
      ["Objectif", "Alternance / Stage"],
      ["Localisation", "France · Remote OK"],
    ],
    stats: [
      { num: "10+", label: "Projets perso" },
      { num: "3", label: "Langages maîtrisés" },
      { num: "2025", label: "Entrée en Master" },
      { num: "∞", label: "Curiosité" },
    ],
    projectsTitle: "Projets Sélectionnés",
    skillsTitle: "Compétences",
    skillsCategories: { Frontend: "Frontend", Backend: "Backend", Outils: "Outils" },
    contactTitle: "Prendre contact",
    footerText: "Conçu & codé par",
    navLinks: ["À propos", "Projets", "Compétences", "Contact"],
    terminalWelcome: (name) => `Bienvenue sur le terminal de ${name}.\nTape "help" pour voir les commandes disponibles.`,
    terminalCommands: {
      help: `Commandes disponibles :\n  → contact    Mes coordonnées\n  → about      Qui suis-je ?\n  → cv         Télécharger mon CV\n  → social     Réseaux sociaux\n  → clear      Effacer le terminal`,
      contact: `📧 Email    : kevinmowilliam@email.com\n📍 Location  : France (disponible en remote)\n💼 Dispo     : Stage / Alternance Master`,
      about: `👨‍💻 Kevin William\n🎓 Master Informatique\n🔧 Full-Stack & AI/ML Developer\n⚡ Passionné par les systèmes distribués et le deep learning`,
      cv: `📄 Téléchargement du CV en cours...\n→ Ouverture de /cv.pdf`,
      social: `🐙 GitHub   : https://github.com/LeGrandUndead\n💼 LinkedIn : https://www.linkedin.com/in/kevin-william-2a4391210/`,
    },
    terminalUnknown: (cmd) => `Unknown command: "${cmd}". Type "help".`,
    terminalPlaceholder: "Tape une commande...",
    quickCmds: ["help", "contact", "cv", "social"],
  },
  en: {
    role: "Full-Stack Developer",
    roleWords: ["React apps.", "Node.js APIs.", "Python scripts.", "captivating UIs.", "AI models.", "distributed systems."],
    heroCta: "View my projects",
    heroAvailable: "Available for a Master's work-study",
    bio: `Computer Science undergraduate building robust web apps with React, Node.js, and Python. Passionate about software engineering and user experience, I'm heading into a Master's degree — driven to create products that make a real difference.`,
    bioIntro: "I build ",
    aboutTitle: "About me",
    aboutItems: [
      ["Master's degree", "Incoming"],
      ["Looking for", "Work-study / Internship"],
      ["Location", "France · Remote OK"],
    ],
    stats: [
      { num: "10+", label: "Personal projects" },
      { num: "3", label: "Core languages" },
      { num: "2025", label: "Starting Master's" },
      { num: "∞", label: "Curiosity" },
    ],
    projectsTitle: "Selected Work",
    skillsTitle: "Skills",
    skillsCategories: { Frontend: "Frontend", Backend: "Backend", Outils: "Tools" },
    contactTitle: "Get in touch",
    footerText: "Designed & built by",
    navLinks: ["About", "Projects", "Skills", "Contact"],
    terminalWelcome: (name) => `Welcome to ${name}'s terminal.\nType "help" to see available commands.`,
    terminalCommands: {
      help: `Available commands:\n  → contact    My contact info\n  → about      Who am I?\n  → cv         Download my resume\n  → social     Social networks\n  → clear      Clear the terminal`,
      contact: `📧 Email    : kevinmowilliam@email.com\n📍 Location  : France (remote available)\n💼 Status    : Looking for Master's work-study`,
      about: `👨‍💻 Kevin William\n🎓 Master's in Computer Science\n🔧 Full-Stack & AI/ML Developer\n⚡ Passionate about distributed systems and deep learning`,
      cv: `📄 Downloading resume...\n→ Opening /cv.pdf`,
      social: `🐙 GitHub   : https://github.com/LeGrandUndead\n💼 LinkedIn : https://www.linkedin.com/in/kevin-william-2a4391210/`,
    },
    terminalUnknown: (cmd) => `Unknown command: "${cmd}". Type "help".`,
    terminalPlaceholder: "Type a command...",
    quickCmds: ["help", "contact", "cv", "social"],
  },
};

export const LINKS = {
  github: "https://github.com/LeGrandUndead",
  linkedin: "https://www.linkedin.com/in/kevin-william-2a4391210/",
  email: "kevinmowilliam@email.com",
  cv: "CV_KEVIN_WILLIAM_DAS.pdf",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Sales Forecast AI",
    description: {
      fr: "Pipeline deep learning de prévision de ventes avec un réseau LSTM empilé (2 couches, 128→64 units). Traite des données historiques 2019–2024 via fenêtres glissantes de 30 jours. Entraîné sur GPU (RTX 3060).",
      en: "Deep learning sales forecasting pipeline with a stacked LSTM network (2 layers, 128→64 units). Processes 2019–2024 historical data via 30-day sliding windows. GPU-trained on an RTX 3060.",
    },
    tags: ["Python", "TensorFlow", "LSTM", "Pandas"],
    github: "https://github.com/LeGrandUndead/sales-forecast-AI",
    live: null,
    size: "large",
  },
  {
    id: 2,
    title: "Pathfinding Agent",
    description: {
      fr: "Agent rationnel naviguant dans un environnement en grille. Compare A* et BFS avec visualisation terminal animée et benchmarking multi-scénarios.",
      en: "Rational agent navigating a grid environment. Compares A* and BFS with animated terminal visualization and multi-scenario benchmarking.",
    },
    tags: ["Python", "A*", "BFS", "AI"],
    github: "https://github.com/LeGrandUndead/pathfinding-agent",
    live: null,
    size: "medium",
  },
  {
    id: 3,
    title: "Homemade Adam",
    description: {
      fr: "Implémentation from scratch de l'optimiseur Adam et SGD pour entraîner un MLP sur MNIST. Comparaison des convergences avec visualisations des gradients.",
      en: "From-scratch implementation of the Adam and SGD optimizers to train an MLP on MNIST. Convergence comparison with gradient and weight visualizations.",
    },
    tags: ["Python", "PyTorch", "Deep Learning", "NumPy"],
    github: "https://github.com/LeGrandUndead/Homemade-Adam-Implementation",
    live: null,
    size: "medium",
  },
  {
    id: 4,
    title: "Distributed QCM",
    description: {
      fr: "Système de QCM distribué en Java via MQTT (Mosquitto). Architecture client/serveur multi-machines avec persistance JSON et protocole TDD.",
      en: "Distributed quiz system in Java over MQTT (Mosquitto). Multi-machine client/server architecture with JSON persistence and TDD protocol.",
    },
    tags: ["Java", "MQTT", "Gradle", "Distributed"],
    github: "https://github.com/LeGrandUndead/Distribued-systems",
    live: null,
    size: "medium",
  },
  {
    id: 5,
    title: "Uni Game Jam",
    description: {
      fr: "Jeu vidéo développé en équipe lors d'une Game Jam universitaire (module main501 à l'URCA). Conçu et livré sous contrainte de temps.",
      en: "Video game developed as a team during a university Game Jam (URCA module main501). Designed and shipped under tight time constraints.",
    },
    tags: ["Unity", "C#", "Game Design"],
    github: "https://github.com/LeGrandUndead/Uni_Game_Jam",
    live: null,
    size: "small",
  },
];

export const SKILLS = {
  Frontend: [
    { name: "React", level: 80 },
    { name: "TypeScript", level: 65 },
    { name: "Tailwind CSS", level: 75 },
    { name: "Framer Motion", level: 60 },
    { name: "HTML / CSS", level: 85 },
  ],
  Backend: [
    { name: "Node.js / Express", level: 75 },
    { name: "Python", level: 85 },
    { name: "Java", level: 75 },
    { name: "REST APIs", level: 78 },
    { name: "SQL / PostgreSQL", level: 65 },
  ],
  Outils: [
    { name: "Git & GitHub", level: 85 },
    { name: "TensorFlow / PyTorch", level: 70 },
    { name: "Linux / Bash", level: 72 },
    { name: "Unity / C#", level: 60 },
    { name: "Docker", level: 50 },
  ],
};

export const SKILLS_MARQUEE = [
  "React", "Node.js", "Python", "TypeScript", "TensorFlow", "PyTorch",
  "Java", "PostgreSQL", "Docker", "Git", "Linux", "REST APIs",
  "Framer Motion", "Tailwind", "MQTT", "Unity", "C#", "A*",
];
