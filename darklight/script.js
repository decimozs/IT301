document.getElementById("darkmode").addEventListener("click", toggle);

function toggle() {
  const body = document.body;
  const mode = document.getElementById("mode");
  const switchMode = document.getElementById("darkmode");

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    mode.textContent = "Light";
    switchMode.textContent = "switch to dark mode";
  } else {
    body.classList.add("dark-mode");
    mode.textContent = "Dark";
    switchMode.textContent = "switch to light mode";
  }
}
