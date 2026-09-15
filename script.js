const themeToggle = document.querySelector("#theme-toggle");
const readStoredTheme = () => {
  try {
    return localStorage.getItem("dev-log-theme");
  } catch (error) {
    return null;
  }
};

const saveTheme = (theme) => {
  try {
    localStorage.setItem("dev-log-theme", theme);
  } catch (error) {
    // Ignore storage failures so the toggle still works even when persistence is blocked.
  }
};

const savedTheme = readStoredTheme();

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
    saveTheme(nextTheme);
    syncThemeControls();
  });
}
