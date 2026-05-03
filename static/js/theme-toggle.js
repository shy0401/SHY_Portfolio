(function () {
  var root = document.documentElement;
  var button = document.querySelector("[data-theme-toggle]");
  if (!button) return;

  function setTheme(theme) {
    root.dataset.theme = theme;
    localStorage.setItem("shy-portfolio-theme", theme);
    button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  }

  button.addEventListener("click", function () {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });

  button.setAttribute("aria-pressed", root.dataset.theme === "dark" ? "true" : "false");
})();
