const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const languageToggle = document.getElementById("languageToggle");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const navLinks = document.querySelectorAll(".nav a");

// Cargar tema guardado
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  root.classList.add("light");
}

const translations = {
  es: {
    metaTitle: "Jonatan Chavarriaga | Ingeniero informático",
    metaDescription: "Portafolio profesional de Jonatan Chavarriaga, ingeniero de software en Colombia especializado en backend, cloud y DevOps.",
    navSkills: "Habilidades",
    navCv: "CV",
    navProjects: "Proyectos",
    navContact: "Contacto",
    availability: "Disponible para trabajar",
    eyebrow: "Este soy yo",
    role: "Desarrollador de Software",
    heroDescription: "Ingeniero de Colombia desarrollando APIs robustas, automatizando despliegues y diseñando soluciones cloud escalables para productos y empresas.",
    talk: "Hablemos",
    skillsTitle: "Mis habilidades principales",
    skillsSubtitle: "Lo que hago",
    skillBackend: "Backend: Java / Spring Boot / Python / FastAPI",
    skillCloud: "Cloud: AWS / Infraestructura como Código",
    skillDevops: "DevOps: Docker / Kubernetes / GitHub Actions",
    skillDatabases: "Bases de datos: PostgreSQL / MySQL",
    skillArchitecture: "Arquitectura: Microservicios / Hexagonal",
    skillObservability: "Observabilidad: Celery / Redis / WebSockets",
    cvTitle: "CV y trayectoria",
    cvDescription: "Un recorrido por mi formación, práctica en el sector financiero y proyectos que reflejan mi enfoque en la ingeniería de software.",
    downloadCv: "Descargar CV",
    projectsTitle: "Proyectos destacados",
    project1Title: "Fleet Logistics Platform",
    project1Desc: "Plataforma nativa en la nube para el seguimiento y la coordinación de entregas. Arquitectura hexagonal y telemetría en tiempo real.",
    project1Stack: "Stack: React, TypeScript, Vite, Java, Spring Boot, JWT, PostgreSQL, Render y Netlify.",
    project2Title: "Biometric Attendance Platform",
    project2Desc: "Sistema híbrido IoT con procesamiento asíncrono, WebSockets en vivo y tolerancia a fallos de red offline-first.",
    project2Stack: "Stack: Python, FastAPI, MySQL, Celery, Redis y Docker.",
    project3Title: "CRM Core Service (Cloud-Native)",
    project3Desc: "Microservicio backend con arquitectura hexagonal para gestión de coaches y clientes. Infraestructura declarativa en AWS (DynamoDB, SQS, S3) simulada con LocalStack Pro.",
    project3Stack: "Stack: Python 3.11, FastAPI, Terraform, Boto3, LocalStack Pro y Docker.",
    demo: "Demo",
    github: "GitHub",
    comingSoon: "Próximamente",
    contactTitle: "Contacto",
    contactDescription: "¿Hablamos de tu proyecto? Escríbeme y agendamos una reunión."
  },
  en: {
    metaTitle: "Jonatan Chavarriaga | Software Engineer",
    metaDescription: "Professional portfolio of Jonatan Chavarriaga, software engineer based in Colombia specializing in backend, cloud, and DevOps.",
    navSkills: "Skills",
    navCv: "Resume",
    navProjects: "Projects",
    navContact: "Contact",
    availability: "Available for work",
    eyebrow: "It's me",
    role: "Software Developer",
    heroDescription: "Colombian engineer developing robust APIs, automating deployments, and designing scalable cloud solutions for products and businesses.",
    talk: "Let's talk",
    skillsTitle: "My Top Skills",
    skillsSubtitle: "What I Do",
    skillBackend: "Backend: Java / Spring Boot / Python / FastAPI",
    skillCloud: "Cloud: AWS / Infrastructure as Code",
    skillDevops: "DevOps: Docker / Kubernetes / GitHub Actions",
    skillDatabases: "Databases: PostgreSQL / MySQL",
    skillArchitecture: "Architecture: Microservices / Hexagonal",
    skillObservability: "Observability: Celery / Redis / WebSockets",
    cvTitle: "Resume & Experience",
    cvDescription: "A look at my education, financial sector internship, and projects that showcase my focus on software engineering.",
    downloadCv: "Download Resume",
    projectsTitle: "Featured Projects",
    project1Title: "Fleet Logistics Platform",
    project1Desc: "Cloud-native platform for delivery tracking and coordination. Hexagonal architecture and real-time telemetry.",
    project1Stack: "Stack: React, TypeScript, Vite, Java, Spring Boot, JWT, PostgreSQL, Render, and Netlify.",
    project2Title: "Biometric Attendance Platform",
    project2Desc: "Hybrid IoT system featuring asynchronous processing, live WebSockets, and offline-first network fault tolerance.",
    project2Stack: "Stack: Python, FastAPI, MySQL, Celery, Redis, and Docker.",
    project3Title: "CRM Core Service (Cloud-Native)",
    project3Desc: "Backend microservice with hexagonal architecture for coaches and clients management. Declarative AWS infrastructure (DynamoDB, SQS, S3) simulated with LocalStack Pro.",
    project3Stack: "Stack: Python 3.11, FastAPI, Terraform, Boto3, LocalStack Pro, and Docker.",
    demo: "Demo",
    github: "GitHub",
    comingSoon: "Coming Soon",
    contactTitle: "Contact",
    contactDescription: "Let's talk about your project. Send me a message and schedule a meeting."
  }
};

let currentLanguage = localStorage.getItem("language") || "es";

function updateLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;

  if (translations[language].metaTitle) {
    document.title = translations[language].metaTitle;
  }
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && translations[language].metaDescription) {
    metaDesc.setAttribute("content", translations[language].metaDescription);
  }
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc && translations[language].metaDescription) {
    ogDesc.setAttribute("content", translations[language].metaDescription);
  }
  const twitterDesc = document.querySelector('meta[name="twitter:description"]');
  if (twitterDesc && translations[language].metaDescription) {
    twitterDesc.setAttribute("content", translations[language].metaDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translations[language][element.dataset.i18n];
  });
  languageToggle.textContent = language === "es" ? "EN" : "ES";
  languageToggle.setAttribute(
    "aria-label",
    language === "es" ? "Cambiar idioma a inglés" : "Switch language to Spanish"
  );
  localStorage.setItem("language", language);
}

// Alternar modo claro / oscuro
themeToggle.addEventListener("click", () => {
  root.classList.toggle("light");
  localStorage.setItem("theme", root.classList.contains("light") ? "light" : "dark");
});

// Alternar idioma
languageToggle.addEventListener("click", () => {
  updateLanguage(currentLanguage === "es" ? "en" : "es");
});

// Alternar menú hamburguesa en móvil
menuToggle.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Cerrar menú móvil al seleccionar un enlace
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 640 && mobileMenu.classList.contains("is-open")) {
      mobileMenu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    }
  });
});

// Inicialización de idioma
updateLanguage(currentLanguage);
