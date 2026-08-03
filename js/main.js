const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");

if (header) {
  const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

if (nav && navToggle) {
  const closeNav = () => {
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.querySelector(".visually-hidden").textContent = "Abrir menú de navegación";
    nav.classList.remove("is-open");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navToggle.querySelector(".visually-hidden").textContent = isOpen ? "Abrir menú de navegación" : "Cerrar menú de navegación";
    nav.classList.toggle("is-open", !isOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      closeNav();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
      closeNav();
      navToggle.focus();
    }
  });
}

const revealItems = document.querySelectorAll(".reveal");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !reducedMotion && "animate" in Element.prototype) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.animate([
          { opacity: 0, transform: "translateY(1.25rem)" },
          { opacity: 1, transform: "translateY(0)" },
        ], {
          duration: 650,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          fill: "both",
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => revealObserver.observe(item));
}

const projectFilters = document.querySelectorAll("[data-project-filter]");
const projectCards = document.querySelectorAll("[data-project-category]");

projectFilters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const category = filter.dataset.projectFilter;
    projectFilters.forEach((item) => item.setAttribute("aria-pressed", String(item === filter)));
    projectCards.forEach((card) => card.classList.toggle("is-hidden", category !== "all" && card.dataset.projectCategory !== category));
  });
});

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnjeekke";
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  const status = contactForm.querySelector("[data-form-status]");
  const submitButton = contactForm.querySelector("[data-form-submit]");
  const honeypot = contactForm.querySelector("[name='website']");
  const setStatus = (message, type) => {
    status.hidden = false;
    status.className = `form-status is-${type}`;
    status.textContent = message;
  };

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    contactForm.classList.add("form--validated");

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      setStatus("Revise los campos obligatorios antes de enviar la consulta.", "error");
      return;
    }

    const endpoint = FORMSPREE_ENDPOINT;

    if (honeypot.value) return;

    submitButton.disabled = true;
    submitButton.setAttribute("aria-busy", "true");
    setStatus("Enviando consulta...", "success");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(contactForm),
      });

      if (!response.ok) throw new Error("Formspree request failed");

      contactForm.reset();
      contactForm.classList.remove("form--validated");
      setStatus("Gracias. Su consulta fue enviada correctamente.", "success");
    } catch {
      setStatus("No fue posible enviar la consulta. Sus datos se conservan para que pueda intentarlo nuevamente.", "error");
    } finally {
      submitButton.disabled = false;
      submitButton.removeAttribute("aria-busy");
    }
  });
}
