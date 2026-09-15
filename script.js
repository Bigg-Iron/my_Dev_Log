const themeToggle = document.querySelector("#theme-toggle");
const savedTheme = localStorage.getItem("dev-log-theme");

// Restore the last theme choice so the site feels consistent across visits on GitHub Pages.
if (savedTheme === "light" || savedTheme === "dark") {
  document.body.dataset.theme = savedTheme;
}

const syncThemeIcon = () => {
  const isLight = document.body.dataset.theme === "light";

  // The icon gives a quick visual cue about the currently active color mode.
  themeToggle.querySelector("span").textContent = isLight ? "🌙" : "☀️";
};

syncThemeIcon();

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.dataset.theme === "light" ? "dark" : "light";

  document.body.dataset.theme = nextTheme;
  localStorage.setItem("dev-log-theme", nextTheme);
  syncThemeIcon();
});
