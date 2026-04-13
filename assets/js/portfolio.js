document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("[data-main-nav]");
  const toggle = document.querySelector("[data-nav-toggle]");

  if (nav && toggle) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  document.querySelectorAll("[data-submenu-toggle]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const item = button.closest("li");
      if (!item) return;

      item.classList.toggle("open");
    });
  });
});
