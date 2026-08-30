/**
 * ==========================================================================
 * AYESHA IQBAL — PORTFOLIO APPLICATION LOGIC
 * Dynamic SVG Icon Mapping, Component Rendering, ScrollSpy & Interactions
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  renderSkills();
  renderProjects();
  initScrollAnimations();
  initSmoothScroll();
});

/* --------------------------------------------------------------------------
   1. OFFICIAL BRAND & SKILL SVG ICONS MAP
   -------------------------------------------------------------------------- */
const SKILL_ICONS = {
  html5: `<svg viewBox="0 0 24 24" fill="#E34F26" width="38" height="38"><path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm17.09 4.413H5.41l.36 4.05h9.72l-.39 4.29-3.13.85-3.13-.85-.2-2.22H4.72l.4 4.54 6.85 1.89 6.85-1.89.94-10.66H9.46l-.34-4.05h9.47l-.0-1.95z"/></svg>`,
  css3: `<svg viewBox="0 0 24 24" fill="#1572B6" width="38" height="38"><path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm17.09 4.413H5.41l.36 4.05h9.72l-.39 4.29-3.13.85-3.13-.85-.2-2.22H4.72l.4 4.54 6.85 1.89 6.85-1.89.94-10.66H9.46l-.34-4.05h9.47l-.0-1.95z"/></svg>`,
  javascript: `<svg viewBox="0 0 24 24" fill="#F7DF1E" width="38" height="38"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 3h18v18H3V3zm12.5 13.5c-.8.8-1.9 1.1-3 1.1-2.1 0-3.3-1.1-3.3-3.1h2.2c0 .9.5 1.4 1.2 1.4.6 0 1.1-.3 1.1-.9 0-.6-.4-.9-1.4-1.3l-.7-.3c-1.6-.7-2.4-1.6-2.4-3.1 0-1.8 1.4-3 3.3-3 1.8 0 2.9.9 3.2 2.5h-2.1c-.2-.7-.6-1-1.1-1-.5 0-.9.3-.9.8 0 .5.3.8 1.2 1.2l.6.3c1.9.8 2.6 1.7 2.6 3.1 0 1.9-1.2 2.9-3.3 2.9zm-7.6-.2H5.6v-1.8h2.3v-4.7H5.6V8.1h4.6v7.3H7.9v-.1z"/></svg>`,
  nodejs: `<svg viewBox="0 0 24 24" fill="#339933" width="38" height="38"><path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm8 13.5l-8 4.4-8-4.4V8.5l8-4.4 8 4.4v7z"/><path d="M12 6.5L6 9.8v4.4l6 3.3 6-3.3V9.8l-6-3.3z"/></svg>`,
  express: `<svg viewBox="0 0 24 24" fill="#FFFFFF" width="38" height="38"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-4.5H9v-2h4v6.5zm3-8.5h-8V6h8v2z"/></svg>`,
  mongodb: `<svg viewBox="0 0 24 24" fill="#47A248" width="38" height="38"><path d="M12 2C12 2 5 8 5 14.5C5 18.5 8.2 22 12 22C15.8 22 19 18.5 19 14.5C19 8 12 2 12 2ZM12 20C9.2 20 7 17.5 7 14.5C7 10.2 10.8 5.7 12 4.3C13.2 5.7 17 10.2 17 14.5C17 17.5 14.8 20 12 20Z"/><rect x="11" y="7" width="2" height="12" fill="#47A248"/></svg>`,
  ssms: `<svg viewBox="0 0 24 24" fill="#CC292B" width="38" height="38"><path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.34 6 2s-2.13 2-6 2-6-1.34-6-2 2.13-2 6-2zm0 5c3.87 0 6 1.34 6 2s-2.13 2-6 2-6-1.34-6-2 2.13-2 6-2zm0 5c3.87 0 6 1.34 6 2s-2.13 2-6 2-6-1.34-6-2 2.13-2 6-2z"/></svg>`,
  cpp: `<svg viewBox="0 0 24 24" fill="#00599C" width="38" height="38"><path d="M22.37 13.99h-2.11v2.11h-1.39v-2.11h-2.11v-1.39h2.11v-2.11h1.39v2.11h2.11v1.39zm-6.28 0h-2.11v2.11h-1.39v-2.11h-2.11v-1.39h2.11v-2.11h1.39v2.11h2.11v1.39zM10.15 6.55c-3.1 0-5.61 2.51-5.61 5.61s2.51 5.61 5.61 5.61c2.14 0 4.01-1.2 4.96-2.96l-1.85-1.07c-.55 1.03-1.68 1.73-2.98 1.73-1.83 0-3.31-1.48-3.31-3.31s1.48-3.31 3.31-3.31c1.3 0 2.43.7 2.98 1.73l1.85-1.07c-.95-1.76-2.82-2.96-4.96-2.96z"/></svg>`,
  oop: `<svg viewBox="0 0 24 24" fill="#14B8A6" width="38" height="38"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
  git: `<svg viewBox="0 0 24 24" fill="#F05032" width="38" height="38"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.44.516.515.66 1.256.435 1.905l2.656 2.656c.65-.226 1.39-.08 1.905.435.72.719.72 1.885 0 2.604-.719.719-1.885.719-2.604 0-.53-.53-.667-1.286-.418-1.942l-2.49-2.49v6.007c.18.08.35.198.5.348.719.719.719 1.885 0 2.604-.719.719-1.885.719-2.604 0-.719-.719-.719-1.885 0-2.604.17-.17.36-.29.56-.37V9.752c-.2-.08-.39-.2-.56-.37-.53-.53-.667-1.286-.418-1.942L7.33 4.805 1.455 10.68c-.604.604-.604 1.582 0 2.188l10.48 10.478c.603.604 1.581.604 2.186 0l10.424-10.424c.604-.604.604-1.582 0-2.188z"/></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="#F8FAFC" width="38" height="38"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
  dsa: `<svg viewBox="0 0 24 24" fill="#F59E0B" width="38" height="38"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><line x1="8.5" y1="7.5" x2="15.5" y2="7.5" stroke="#F59E0B" stroke-width="2"/><line x1="7.5" y1="8.5" x2="10.5" y2="15.5" stroke="#F59E0B" stroke-width="2"/><line x1="16.5" y1="8.5" x2="13.5" y2="15.5" stroke="#F59E0B" stroke-width="2"/></svg>`
};

/* Project Visual Cards Icon Map */
const PROJECT_VISUAL_ICONS = {
  library: `<svg class="project-visual-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  hostel: `<svg class="project-visual-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  bank: `<svg class="project-visual-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  restaurant: `<svg class="project-visual-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
  hospital: `<svg class="project-visual-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  product: `<svg class="project-visual-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  movie: `<svg class="project-visual-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>`
};

/* --------------------------------------------------------------------------
   2. NAVBAR & MOBILE DRAWER LOGIC
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.querySelector(".navbar");
  const mobileToggle = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");
  const links = document.querySelectorAll(".nav-link");

  // Sticky shadow effect on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile Menu Toggle
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const icon = mobileToggle.querySelector("span");
      if (icon) {
        icon.textContent = navLinks.classList.contains("open") ? "✕" : "☰";
      }
    });

    // Close menu on link click
    links.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        const icon = mobileToggle.querySelector("span");
        if (icon) icon.textContent = "☰";
      });
    });
  }

  // ScrollSpy Active Link Tracking
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");
      const link = document.querySelector(`.nav-links a[href*=${sectionId}]`);

      if (link) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. RENDER SKILLS GRID
   -------------------------------------------------------------------------- */
function renderSkills() {
  const container = document.getElementById("skillsGrid");
  if (!container || !PORTFOLIO_DATA || !PORTFOLIO_DATA.skills) return;

  container.innerHTML = PORTFOLIO_DATA.skills
    .map(skill => {
      const iconSvg = SKILL_ICONS[skill.iconType] || SKILL_ICONS.oop;
      return `
        <div class="skill-card">
          <div class="skill-icon-wrapper">
            ${iconSvg}
          </div>
          <span>${skill.name}</span>
        </div>
      `;
    })
    .join("");
}

/* --------------------------------------------------------------------------
   4. RENDER PROJECTS GRID
   -------------------------------------------------------------------------- */
function renderProjects() {
  const container = document.getElementById("projectsGrid");
  if (!container || !PORTFOLIO_DATA || !PORTFOLIO_DATA.projects) return;

  container.innerHTML = PORTFOLIO_DATA.projects
    .map(project => {
      const visualIcon = PROJECT_VISUAL_ICONS[project.imageType] || PROJECT_VISUAL_ICONS.library;
      
      const techBadges = project.technologies
        .map((tech, idx) => {
          let colorClass = "";
          if (tech.includes("C++") || tech.includes("HTML") || tech.includes("JavaScript")) {
            colorClass = "teal";
          } else if (tech.includes("OOP") || tech.includes("Software")) {
            colorClass = "amber";
          }
          return `<span class="tech-badge ${colorClass}">${tech}</span>`;
        })
        .join("");

      const liveBtn = project.live
        ? `<a href="${project.live}" target="_blank" rel="noopener noreferrer" class="btn-live">
            Live Version
           </a>`
        : "";

      return `
        <div class="project-card">
          <div class="project-body">
            <div class="project-header-row">
              <h3 class="project-title">${project.name}</h3>
              <div class="project-icon-badge">${visualIcon}</div>
            </div>
            <p class="project-desc">${project.description}</p>
            
            <div class="project-tech-stack">
              ${techBadges}
            </div>

            <div class="project-how-built">
              <p><strong>Architecture:</strong> ${project.howIBuiltIt}</p>
            </div>

            <div class="project-actions">
              ${liveBtn}
              <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn-github" title="View on GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

/* --------------------------------------------------------------------------
   5. INTERSECTION OBSERVER ANIMATIONS
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const sections = document.querySelectorAll(".section");
  sections.forEach(sec => sec.classList.add("fade-in-section"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  sections.forEach(sec => observer.observe(sec));
}

/* --------------------------------------------------------------------------
   6. SMOOTH SCROLLING FOR BUTTONS
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
}
