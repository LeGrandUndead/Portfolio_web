/* ============================================================
   🌐 TRANSLATIONS — FR / EN
   ============================================================ */

export const translations = {
  fr: {
    nav: {
      links: ["À propos", "Projets", "Compétences", "Contact"],
    },
    hero: {
      badge: "Disponible pour une alternance Master",
      typewriterPrefix: "Je construis ",
      typewriterWords: [
        "des apps React.",
        "des APIs Node.js.",
        "des scripts Python.",
        "des UIs qui captivent.",
        "des IA.",
        "Des réseaux.",
      ],
      sub: "Étudiant en Master Informatique. Passionné par les interfaces réactives, les architectures propres et tout ce qui rend le code élégant.",
      cta: "Voir mes projets",
      scroll: "scroll",
    },
    about: {
      accent: "01. intro",
      title: "À propos de moi",
      bio: `Étudiant en L3 Informatique, je construis des applications web robustes avec React, Node.js et Python. Passionné par l'ingénierie logicielle et l'expérience utilisateur, je m'oriente vers un Master pour aller encore plus loin — et créer des produits qui font une vraie différence.`,
      facts: [
        ["🎓", "Master Informatique"],
        ["🚀", "Objectif : Alternance"],
        ["📍", "France · Remote OK"],
      ],
      stats: [
        { num: "10+", label: "Projets perso" },
        { num: "3", label: "Langages maîtrisés" },
        { num: "2025", label: "Entrée en Master" },
        { num: "∞", label: "Curiosité" },
      ],
    },
    projects: {
      accent: "02. work",
      title: "Mes Projets",
      items: [
        {
          description:
            "Pipeline deep learning de prévision de ventes avec un réseau LSTM empilé (2 couches, 128→64 units). Traite des données historiques 2019–2024 via fenêtres glissantes de 30 jours. Entraîné sur GPU (RTX 3060).",
        },
        {
          description:
            "Agent rationnel naviguant dans un environnement en grille. Compare A* et BFS avec visualisation terminal animée et benchmarking multi-scénarios.",
        },
        {
          description:
            "Implémentation from scratch de l'optimiseur Adam et SGD pour entraîner un MLP sur MNIST. Comparaison des convergences avec visualisations des gradients et des poids.",
        },
        {
          description:
            "Système de QCM distribué en Java via MQTT (Mosquitto). Architecture client/serveur multi-machines avec persistance des scores JSON et protocole TDD.",
        },
        {
          description:
            "Jeu vidéo développé en équipe lors d'une Game Jam universitaire (module main501 à l'URCA). Conçu et livré sous contrainte de temps.",
        },
      ],
    },
    skills: {
      accent: "03. skills",
      title: "Compétences",
      categories: { Frontend: "Frontend", Backend: "Backend", Outils: "Outils" },
    },
    contact: {
      accent: "04. contact",
      title: "Prendre contact",
      terminal: {
        welcome: (name) => `Bienvenue sur le terminal de ${name}.\nTape "help" pour voir les commandes disponibles.`,
        unknown: (cmd) => `Commande inconnue : "${cmd}". Tape "help".`,
        placeholder: "Tape une commande...",
      },
      commands: {
        help: `Commandes disponibles :\n  → contact    Mes coordonnées\n  → about      Qui suis-je ?\n  → cv         Télécharger mon CV\n  → social     Réseaux sociaux\n  → clear      Effacer le terminal`,
        contact: `📧 Email    : kevinmowilliam@email.com\n📍 Location  : France (disponible en remote)\n💼 Dispo     : Stage / Alternance Master`,
        about: `👨‍💻 Kevin William\n🎓 Master Informatique\n🔧 Full-Stack & AI/ML Developer\n⚡ Passionné par les systèmes distribués et le deep learning`,
        cv: `📄 Téléchargement du CV en cours...\n→ Ouverture de /cv.pdf`,
        social: `🐙 GitHub   : https://github.com/LeGrandUndead\n💼 LinkedIn : https://www.linkedin.com/in/kevin-william-2a4391210/`,
      },
    },
    footer: {
      builtBy: "Conçu & codé par",
    },
  },
  en: {
    nav: {
      links: ["About", "Projects", "Skills", "Contact"],
    },
    hero: {
      badge: "Available for a Master's work-study",
      typewriterPrefix: "I build ",
      typewriterWords: [
        "React apps.",
        "Node.js APIs.",
        "Python scripts.",
        "captivating UIs.",
        "AI systems.",
        "Networks.",
      ],
      sub: "Master's student in Computer Science. Passionate about reactive interfaces, clean architectures and everything that makes code elegant.",
      cta: "View my projects",
      scroll: "scroll",
    },
    about: {
      accent: "01. intro",
      title: "About me",
      bio: `Computer Science undergraduate building robust web applications with React, Node.js and Python. Driven by software engineering and user experience, I'm pursuing a Master's degree to go further — and create products that make a real difference.`,
      facts: [
        ["🎓", "Master's in Computer Science"],
        ["🚀", "Goal: Work-study program"],
        ["📍", "France · Remote OK"],
      ],
      stats: [
        { num: "10+", label: "Personal projects" },
        { num: "3", label: "Languages mastered" },
        { num: "2025", label: "Master's entry" },
        { num: "∞", label: "Curiosity" },
      ],
    },
    projects: {
      accent: "02. work",
      title: "My Projects",
      items: [
        {
          description:
            "Deep learning sales forecasting pipeline with a stacked LSTM network (2 layers, 128→64 units). Processes 2019–2024 historical data via 30-day sliding windows. Trained on GPU (RTX 3060).",
        },
        {
          description:
            "Rational agent navigating a grid environment. Compares A* and BFS with animated terminal visualization and multi-scenario benchmarking.",
        },
        {
          description:
            "From-scratch implementation of the Adam and SGD optimizers to train an MLP on MNIST. Convergence comparison with gradient and weight visualizations.",
        },
        {
          description:
            "Distributed MCQ system in Java via MQTT (Mosquitto). Multi-machine client/server architecture with JSON score persistence and TDD protocol.",
        },
        {
          description:
            "Video game developed as a team during a university Game Jam (module main501 at URCA). Designed and delivered under time pressure.",
        },
      ],
    },
    skills: {
      accent: "03. skills",
      title: "Skills",
      categories: { Frontend: "Frontend", Backend: "Backend", Outils: "Tools" },
    },
    contact: {
      accent: "04. contact",
      title: "Get in touch",
      terminal: {
        welcome: (name) => `Welcome to ${name}'s terminal.\nType "help" to see available commands.`,
        unknown: (cmd) => `Unknown command: "${cmd}". Type "help".`,
        placeholder: "Type a command...",
      },
      commands: {
        help: `Available commands:\n  → contact    My contact info\n  → about      Who am I?\n  → cv         Download my CV\n  → social     Social links\n  → clear      Clear the terminal`,
        contact: `📧 Email    : kevinmowilliam@email.com\n📍 Location  : France (remote available)\n💼 Status    : Open to internship / Master's work-study`,
        about: `👨‍💻 Kevin William\n🎓 Master's in Computer Science\n🔧 Full-Stack & AI/ML Developer\n⚡ Passionate about distributed systems and deep learning`,
        cv: `📄 Downloading CV...\n→ Opening /cv.pdf`,
        social: `🐙 GitHub   : https://github.com/LeGrandUndead\n💼 LinkedIn : https://www.linkedin.com/in/kevin-william-2a4391210/`,
      },
    },
    footer: {
      builtBy: "Designed & coded by",
    },
  },
};
