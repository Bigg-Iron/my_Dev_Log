const themeToggle = document.querySelector("#theme-toggle");
const savedTheme = localStorage.getItem("dev-log-theme");

// Restore the last theme choice so the site feels consistent across visits on GitHub Pages.
if (savedTheme === "light" || savedTheme === "dark") {
  document.body.dataset.theme = savedTheme;
}

if (themeToggle) {
  const themeIcon = themeToggle.querySelector("span");

  const syncThemeControls = () => {
    const isLight = document.body.dataset.theme === "light";
    const nextThemeLabel = isLight ? "Switch to dark theme" : "Switch to light theme";

    // Keep the icon and assistive text aligned with the current state of the toggle.
    if (themeIcon) {
      themeIcon.textContent = isLight ? "🌙" : "☀️";
    }

    themeToggle.setAttribute("aria-label", nextThemeLabel);
    themeToggle.setAttribute("aria-pressed", String(isLight));
  };

  syncThemeControls();

  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "light" ? "dark" : "light";

    document.body.dataset.theme = nextTheme;
    localStorage.setItem("dev-log-theme", nextTheme);
    syncThemeControls();
  });
}
