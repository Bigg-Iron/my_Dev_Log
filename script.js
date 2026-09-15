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
  const themeText = themeToggle.querySelector(".sr-only");

  const syncThemeControls = () => {
    const isLight = document.body.dataset.theme === "light";

    // Keep the icon, text, and switch state aligned with the theme control's current action.
    if (themeIcon) {
      themeIcon.textContent = isLight ? "🌙" : "☀️";
    }

    if (themeText) {
      themeText.textContent = isLight ? "Switch to dark mode" : "Switch to light mode";
    }

    themeToggle.setAttribute("aria-checked", String(isLight));
  };

  syncThemeControls();

  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "light" ? "dark" : "light";

    document.body.dataset.theme = nextTheme;
    saveTheme(nextTheme);
    syncThemeControls();
  });
}
