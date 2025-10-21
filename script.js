const buttons = document.querySelectorAll("button[data-next]");
const screens = document.querySelectorAll(".screen");
const countdownScreen = document.querySelector(".countdown-screen");
const birthdayScreen = document.querySelector(".birthday-screen");
const timerEl = document.getElementById("timer");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const next = button.getAttribute("data-next");
    screens.forEach((screen) => screen.classList.remove("active"));
    document.querySelector(`.screen-${next}`).classList.add("active");

    if (button.classList.contains("yes")) {
      startFloatingIcons();
      document.body.classList.add("pink-bg");
      const bgMusic = document.getElementById("bgMusic");
      if (bgMusic) bgMusic.play();
    }
  });
});

function startFloatingIcons() {
  const iconsContainer = document.querySelector(".floating-icons");
  if (iconsContainer.children.length > 0) return;

  const icons = ["🌸", "🍰", "🎈", "✨"];
  const iconCount = 30;

  for (let i = 0; i < iconCount; i++) {
    const icon = document.createElement("div");
    icon.classList.add("icon");
    icon.textContent = icons[Math.floor(Math.random() * icons.length)];
    icon.style.left = Math.random() * 100 + "vw";
    icon.style.fontSize = 20 + Math.random() * 20 + "px";
    icon.style.animationDuration = 5 + Math.random() * 7 + "s";
    icon.style.animationDelay = "-" + Math.random() * 8 + "s";
    iconsContainer.appendChild(icon);
  }
}

const target = new Date("2025-10-21T00:00:00");

const countdownInterval = setInterval(() => {
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    clearInterval(countdownInterval);
    countdownScreen.style.display = "none";
    birthdayScreen.style.display = "flex";
  } else {
    const hours = Math.floor(diff / 1000 / 60 / 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    timerEl.textContent =
      String(hours).padStart(2, "0") +
      ":" +
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0");
  }
}, 500);

