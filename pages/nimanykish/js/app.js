let current = 0;
const slides = document.querySelectorAll(".nimany-hero .slide");
const total = slides.length;
let interval;
let currentLang = "fa";

const dotsContainer = document.getElementById("dots");
for (let i = 0; i < total; i++) {
  const dot = document.createElement("div");
  dot.className = "dot" + (i === 0 ? " active" : "");
  dot.innerHTML = '<div class="dot-fill"></div>';
  dot.onclick = () => goTo(i);
  dotsContainer.appendChild(dot);
}
const dots = document.querySelectorAll(".nimany-hero .dot");

function updateSlides() {
  slides.forEach((s, i) => {
    s.classList.toggle("active", i === current);
  });
  dots.forEach((d, i) => {
    d.classList.toggle("active", i === current);
    if (i !== current) {
      d.querySelector(".dot-fill").style.animation = "none";
      d.querySelector(".dot-fill").offsetHeight;
      d.querySelector(".dot-fill").style.animation = "";
    }
  });
}

function nextSlide() {
  current = (current + 1) % total;
  updateSlides();
  resetTimer();
}
function prevSlide() {
  current = (current - 1 + total) % total;
  updateSlides();
  resetTimer();
}
function goTo(i) {
  current = i;
  updateSlides();
  resetTimer();
}

function resetTimer() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 6000);
}

function setLang(lang) {
  currentLang = lang;
  document
    .querySelector(".nimany-hero")
    .setAttribute("dir", lang === "fa" ? "rtl" : "ltr");
  document
    .querySelectorAll(".lang-btn")
    .forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
  document.querySelectorAll("[data-fa]").forEach((el) => {
    el.textContent = el.getAttribute("data-" + lang);
  });
}

interval = setInterval(nextSlide, 6000);
