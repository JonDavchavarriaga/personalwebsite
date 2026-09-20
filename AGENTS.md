# AGENTS.md — Personal Portfolio



## 1. Project Overview



This repository contains the professional personal portfolio of Jonatan Chavarriaga, Software Developer and Computer Engineer.



The primary purpose of the website is to:



* Present the professional profile.

* Showcase personal software projects.

* Provide access to the professional CV.

* Facilitate contact and employment opportunities.



Production domain:



`https://jonatanchavarriaga.codes`



The website is currently a static single-page portfolio.



---



## 2. Technology and Architecture



Current stack:



* HTML5

* Vanilla CSS

* JavaScript (ES6+)

* No package manager or build system is currently required.


The project follows a lightweight, buildless architecture.



### Project structure



* `index.html`



 * Main document.

 * Contains the semantic page structure, professional content, metadata and currently some inline JavaScript behavior.



* `css/styles.css`



 * Global styles.

 * Design tokens and CSS custom properties.

 * Layout.

 * Responsive behavior.

 * Dark/light theme styles.



* `js/main.js`



 * Main location for client-side JavaScript logic.

 * Currently may contain little or no code.

 * New interactive logic should preferably be implemented here rather than inline in HTML.



* `assets/`


 * Static resources including photographs, avatar, CV and favicon.



* `CNAME`



 * Custom production domain configuration.



* `README.md`



 * Repository documentation.



* `LICENSE`



 * Project license.



---



## 3. General Development Rules



### Preserve the existing architecture



Do not introduce frameworks, bundlers, package managers or unnecessary dependencies unless explicitly requested or technically justified.



Do not migrate the project to React, Vue, Next.js, Tailwind, Bootstrap, Vite or another framework simply because it may be convenient.



Prefer the simplest solution that satisfies the requirement.



### Preserve existing functionality



Before modifying a component or behavior:



1. Understand how it currently works.
2. Identify dependencies and interactions.
3. Make the smallest appropriate change.

4. Verify that existing functionality still works.



Do not rewrite working sections without a concrete reason.



### Keep changes focused



* Modify only files relevant to the task.

* Avoid unrelated refactoring.

* Do not remove existing functionality without explicit authorization.

* Preserve the existing visual identity unless a redesign is requested.



---



## 4. Internationalization



The website supports:



* Spanish (`es`)

* English (`en`)



The existing implementation uses `data-i18n` attributes and JavaScript translation data.



When adding or modifying user-facing text:



* Keep Spanish and English translations synchronized.

* Use the existing i18n mechanism.

* Do not leave visible text untranslated in one language.

* Preserve the existing language-switching behavior.

* Keep the document `lang` attribute synchronized with the selected language when modifying i18n behavior.



Do not replace the existing i18n system with another library unless explicitly requested.



---



## 5. Theme System



The website supports Dark Mode and Light Mode.



The existing design uses CSS custom properties for colors and theming.



When adding new styles:



* Prefer existing CSS variables.

* Avoid introducing arbitrary hardcoded colors when an existing design token can be reused.

* Ensure new components work correctly in both themes.

* Preserve the existing theme-switching behavior.



---



## 6. JavaScript



Prefer placing new client-side logic in:



`js/main.js`



Avoid adding new large inline `<script>` blocks to `index.html`.



Existing inline JavaScript should not be migrated automatically.



Move existing inline logic into `js/main.js` only when:



* explicitly requested;

* necessary for a feature;

* or included as part of a deliberate refactoring task.



Prefer native browser APIs over external JavaScript libraries for simple interactions.



---



## 7. Professional Information Integrity



The portfolio contains real professional information.



Never invent or fabricate:



* professional experience;

* education;

* certifications;

* skills;

* project capabilities;

* technologies used;

* project results;

* employment history;

* contact information;

* achievements.



Do not modify real professional information unless explicitly instructed by the user.



When information is uncertain, ask the user instead of guessing.



### Current professional projects



The portfolio currently presents:



1. **Fleet Logistics Platform**



  * React

  * TypeScript

  * Vite

  * Java

  * Spring Boot

  * JWT

  * PostgreSQL

  * Render

  * Netlify



2. **Biometric Attendance Platform (NEXUS)**



  * Python

  * FastAPI

  * MySQL

  * Celery

  * Redis

  * Docker



3. **CRM Core Service (Cloud-Native)**



  * Python 3.11

  * FastAPI

  * Terraform

  * Boto3

  * LocalStack Pro

  * Docker



Do not change project descriptions, technologies, demo URLs or repository URLs unless instructed or verified against the actual project.



---



## 8. Personal Assets



The `assets/` directory contains personal and professional resources.



Examples include:



* professional CV;

* personal photographs;

* avatar;

* favicon.



Do not delete, replace, rename or modify personal assets unless the task explicitly requires it.



When optimizing assets, preserve their intended visual appearance and verify that all references in the website remain valid.



---



## 9. Accessibility



New or modified UI should consider accessibility.



Maintain:



* semantic HTML;

* meaningful `alt` text for informative images;

* accessible keyboard navigation;

* visible focus states;

* appropriate ARIA attributes where necessary;

* accessible interactive controls;

* sufficient color contrast in both themes.



Do not add ARIA attributes when native HTML semantics already provide the required behavior.



---



## 10. SEO



When modifying page metadata or structure:



* Preserve a clear and meaningful `<title>`.

* Maintain an appropriate meta description.

* Preserve semantic heading hierarchy.

* Keep canonical/domain information consistent when present.

* Consider Open Graph metadata when relevant.

* Avoid keyword stuffing or artificial SEO content.



SEO changes must reflect truthful professional information.



---



## 11. Responsive Design



The website must remain usable across:



* desktop;

* tablet;

* mobile.



Preserve the existing responsive behavior and breakpoints unless a deliberate responsive redesign is requested.



Any new component must be tested at relevant viewport sizes.



---



## 12. Performance



The portfolio is intentionally lightweight.



Prefer:



* native browser capabilities;

* optimized images;

* minimal JavaScript;

* no unnecessary dependencies;

* efficient CSS;

* lazy loading for non-critical images when appropriate.



Do not optimize prematurely at the expense of maintainability or visual quality.



---



## 13. Verification



After meaningful changes:



1. Check for HTML/CSS/JavaScript errors.

2. Verify the affected functionality.

3. Verify responsive behavior when relevant.

4. Verify both language versions when i18n is affected.

5. Verify both themes when visual styles are affected.

6. Confirm that existing project links and assets still work.



For changes affecting multiple areas, provide a concise summary of what was changed and how it was verified.



---



## 14. Git and Repository Safety



* Do not create commits unless explicitly requested.

* Do not push changes unless explicitly requested.

* Do not reset, revert or discard user changes without confirmation.

* Do not modify unrelated files.

* Preserve the existing `.gitignore`.

* Keep changes focused and reviewable.



---



## 15. Decision-Making Principles



When several solutions are possible:



1. Prefer the solution that preserves the current architecture.

2. Prefer the simplest maintainable implementation.

3. Prefer existing project patterns over introducing new patterns.

4. Avoid unnecessary dependencies.

5. Verify assumptions before making significant changes.

6. Ask the user when a decision could materially affect the architecture, visual identity or professional information.



