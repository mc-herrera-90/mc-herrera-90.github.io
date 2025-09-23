const toggle = document.getElementById("mode-toggle-theme");

// Detectar tema guardado o usar preferencia del sistema
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedMode = sessionStorage.getItem("mode");
const currentMode = savedMode || (prefersDark ? "dark" : "light");

// Asegurar que siempre haya data-mode en <html>
document.documentElement.setAttribute("data-mode", currentMode);

if (toggle) {
  toggle.addEventListener("click", function () {
    const current = document.documentElement.getAttribute("data-mode");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-mode", next);
    sessionStorage.setItem("mode", next);
  });
}
