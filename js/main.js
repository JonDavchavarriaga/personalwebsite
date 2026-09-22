const root = document.documentElement;
const themeSwitch = document.getElementById("themeSwitch");
const languageToggle = document.getElementById("languageToggle");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const navLinks = document.querySelectorAll(".nav a");

// Cargar tema guardado
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  root.classList.add("light");
  if (themeSwitch) {
    themeSwitch.checked = false;
    themeSwitch.setAttribute("aria-checked", "false");
  }
} else {
  root.classList.remove("light");
  if (themeSwitch) {
    themeSwitch.checked = true;
    themeSwitch.setAttribute("aria-checked", "true");
  }
}

// Switch interactivo de tema
if (themeSwitch) {
  themeSwitch.addEventListener("change", (e) => {
    const isDark = e.target.checked;
    if (isDark) {
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
      themeSwitch.setAttribute("aria-checked", "true");
    } else {
      root.classList.add("light");
      localStorage.setItem("theme", "light");
      themeSwitch.setAttribute("aria-checked", "false");
    }
  });
}

const translations = {
  es: {
    metaTitle: "Jonatan Chavarriaga | Ingeniero informático",
    metaDescription: "Portafolio profesional de Jonatan Chavarriaga, ingeniero de software en Colombia especializado en backend, cloud y DevOps.",
    themeLabel: "Modo oscuro",
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
    projectsSubtitle: "Soluciones de software y arquitectura cloud",
    prevProject: "Proyecto anterior",
    nextProject: "Siguiente proyecto",
    project1Badge: "Fullstack & Cloud",
    project1Title: "Fleet Logistics Platform",
    project1Desc: "Plataforma nativa en la nube para el seguimiento y la coordinación de entregas. Arquitectura hexagonal y telemetría en tiempo real.",
    project1Stack: "Stack: React, TypeScript, Vite, Java, Spring Boot, JWT, PostgreSQL, Render y Netlify.",
    project2Badge: "IoT & Backend",
    project2Title: "Biometric Attendance Platform",
    project2Desc: "Sistema híbrido IoT con procesamiento asíncrono, WebSockets en vivo y tolerancia a fallos de red offline-first.",
    project2Stack: "Stack: Python, FastAPI, MySQL, Celery, Redis y Docker.",
    project3Badge: "Cloud Architecture",
    project3Title: "CRM Core Service (Cloud-Native)",
    project3Desc: "Microservicio backend con arquitectura hexagonal para gestión de coaches y clientes. Infraestructura declarativa en AWS (DynamoDB, SQS, S3) simulada con LocalStack Pro.",
    project3Stack: "Stack: Python 3.11, FastAPI, Terraform, Boto3, LocalStack Pro y Docker.",
    demo: "Demo",
    github: "GitHub",
    comingSoon: "Próximamente",
    contactTitle: "Contacto",
    contactDescription: "¿Hablamos de tu proyecto? Escríbeme y agendamos una reunión.",
    contactEmailLabel: "Email directo",
    contactEmailAction: "Escribir ↗",
    contactLinkedinAction: "Conectar ↗",
    contactGithubAction: "Explorar ↗",
    footerRights: "Todos los derechos reservados."
  },
  en: {
    metaTitle: "Jonatan Chavarriaga | Software Engineer",
    metaDescription: "Professional portfolio of Jonatan Chavarriaga, software engineer based in Colombia specializing in backend, cloud, and DevOps.",
    themeLabel: "Dark mode",
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
    projectsSubtitle: "Software solutions and cloud architecture",
    prevProject: "Previous project",
    nextProject: "Next project",
    project1Badge: "Fullstack & Cloud",
    project1Title: "Fleet Logistics Platform",
    project1Desc: "Cloud-native platform for delivery tracking and coordination. Hexagonal architecture and real-time telemetry.",
    project1Stack: "Stack: React, TypeScript, Vite, Java, Spring Boot, JWT, PostgreSQL, Render, and Netlify.",
    project2Badge: "IoT & Backend",
    project2Title: "Biometric Attendance Platform",
    project2Desc: "Hybrid IoT system featuring asynchronous processing, live WebSockets, and offline-first network fault tolerance.",
    project2Stack: "Stack: Python, FastAPI, MySQL, Celery, Redis, and Docker.",
    project3Badge: "Cloud Architecture",
    project3Title: "CRM Core Service (Cloud-Native)",
    project3Desc: "Backend microservice with hexagonal architecture for coaches and clients management. Declarative AWS infrastructure (DynamoDB, SQS, S3) simulated with LocalStack Pro.",
    project3Stack: "Stack: Python 3.11, FastAPI, Terraform, Boto3, LocalStack Pro, and Docker.",
    demo: "Demo",
    github: "GitHub",
    comingSoon: "Coming Soon",
    contactTitle: "Contact",
    contactDescription: "Let's talk about your project. Send me a message and schedule a meeting.",
    contactEmailLabel: "Direct email",
    contactEmailAction: "Write ↗",
    contactLinkedinAction: "Connect ↗",
    contactGithubAction: "Explore ↗",
    footerRights: "All rights reserved."
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
    const key = element.dataset.i18n;
    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;
    if (translations[language][key]) {
      element.setAttribute("aria-label", translations[language][key]);
    }
  });

  languageToggle.textContent = language === "es" ? "EN" : "ES";
  languageToggle.setAttribute(
    "aria-label",
    language === "es" ? "Cambiar idioma a inglés" : "Switch language to Spanish"
  );
  localStorage.setItem("language", language);

  if (typeof updateSlideLabels === "function") {
    updateSlideLabels();
  }
}

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

/* ==========================================================================
   Carousel de Proyectos
   ========================================================================== */
const projectsTrack = document.getElementById("projectsTrack");
const carouselPrev = document.getElementById("carouselPrev");
const carouselNext = document.getElementById("carouselNext");
const carouselDots = document.getElementById("carouselDots");

let updateSlideLabels = () => {};

function initCarousel() {
  if (!projectsTrack || !carouselDots) return;

  const slides = Array.from(projectsTrack.querySelectorAll(".carousel-slide"));
  if (slides.length === 0) return;

  carouselDots.innerHTML = "";

  updateSlideLabels = () => {
    const total = slides.length;
    slides.forEach((slide, index) => {
      const pos = index + 1;
      const label = currentLanguage === "es" ? `${pos} de ${total}` : `${pos} of ${total}`;
      slide.setAttribute("aria-label", label);
    });
  };

  // Crear dots de paginación automáticamente
  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = "carousel-dot";
    dot.type = "button";
    dot.setAttribute("role", "tab");
    dot.setAttribute(
      "aria-label",
      currentLanguage === "es" ? `Ir al proyecto ${index + 1}` : `Go to project ${index + 1}`
    );
    dot.setAttribute("aria-current", index === 0 ? "true" : "false");
    if (index === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      const slide = slides[index];
      if (slide) {
        projectsTrack.scrollTo({
          left: slide.offsetLeft - projectsTrack.offsetLeft,
          behavior: "smooth"
        });
      }
    });

    carouselDots.appendChild(dot);
  });

  const dots = Array.from(carouselDots.querySelectorAll(".carousel-dot"));

  function getActiveIndex() {
    const scrollLeft = projectsTrack.scrollLeft;
    let closestIndex = 0;
    let minDistance = Infinity;

    slides.forEach((slide, idx) => {
      const slideLeft = slide.offsetLeft - projectsTrack.offsetLeft;
      const distance = Math.abs(scrollLeft - slideLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    return closestIndex;
  }

  function updateActiveState() {
    const activeIndex = getActiveIndex();
    dots.forEach((dot, idx) => {
      const isActive = idx === activeIndex;
      dot.setAttribute("aria-current", isActive ? "true" : "false");
      dot.classList.toggle("active", isActive);
    });

    if (carouselPrev) {
      carouselPrev.disabled = activeIndex === 0;
    }
    if (carouselNext) {
      carouselNext.disabled = activeIndex === slides.length - 1;
    }
  }

  if (carouselPrev) {
    carouselPrev.addEventListener("click", () => {
      const activeIndex = getActiveIndex();
      if (activeIndex > 0) {
        const targetSlide = slides[activeIndex - 1];
        projectsTrack.scrollTo({
          left: targetSlide.offsetLeft - projectsTrack.offsetLeft,
          behavior: "smooth"
        });
      }
    });
  }

  if (carouselNext) {
    carouselNext.addEventListener("click", () => {
      const activeIndex = getActiveIndex();
      if (activeIndex < slides.length - 1) {
        const targetSlide = slides[activeIndex + 1];
        projectsTrack.scrollTo({
          left: targetSlide.offsetLeft - projectsTrack.offsetLeft,
          behavior: "smooth"
        });
      }
    });
  }

  // Navegación con flechas del teclado
  projectsTrack.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      carouselPrev?.click();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      carouselNext?.click();
    }
  });

  let isTicking = false;
  projectsTrack.addEventListener("scroll", () => {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        updateActiveState();
        isTicking = false;
      });
      isTicking = true;
    }
  });

  updateSlideLabels();
  updateActiveState();
}

/* ==========================================================================
   Micro-animaciones de Entrada (Scroll Reveal)
   ========================================================================== */
function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal-on-scroll");
  if (!elements.length) return;

  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
  );

  elements.forEach((el) => observer.observe(el));
}

// Inicialización
updateLanguage(currentLanguage);
initCarousel();
initScrollReveal();
