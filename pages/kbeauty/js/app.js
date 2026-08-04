let currentK = 0;
const slidesK = document.querySelectorAll(".kskin-hero .slide");
const totalK = slidesK.length;
let intervalK;
let currentLangK = "fa";

const dotsContainerK = document.getElementById("dotsK");
for (let i = 0; i < totalK; i++) {
  const dot = document.createElement("div");
  dot.className = "dot" + (i === 0 ? " active" : "");
  dot.innerHTML = '<div class="dot-fill"></div>';
  dot.onclick = () => goToK(i);
  dotsContainerK.appendChild(dot);
}
const dotsK = document.querySelectorAll(".kskin-hero .dot");

function updateSlidesK() {
  slidesK.forEach((s, i) => {
    s.classList.toggle("active", i === currentK);
  });
  dotsK.forEach((d, i) => {
    d.classList.toggle("active", i === currentK);
    if (i !== currentK) {
      d.querySelector(".dot-fill").style.animation = "none";
      d.querySelector(".dot-fill").offsetHeight;
      d.querySelector(".dot-fill").style.animation = "";
    }
  });
}

function nextSlideK() {
  currentK = (currentK + 1) % totalK;
  updateSlidesK();
  resetTimerK();
}
function prevSlideK() {
  currentK = (currentK - 1 + totalK) % totalK;
  updateSlidesK();
  resetTimerK();
}
function goToK(i) {
  currentK = i;
  updateSlidesK();
  resetTimerK();
}

function resetTimerK() {
  clearInterval(intervalK);
  intervalK = setInterval(nextSlideK, 5500);
}

function setLangK(lang) {
  currentLangK = lang;
  document
    .querySelector(".kskin-hero")
    .setAttribute("dir", lang === "fa" ? "rtl" : "ltr");
  document
    .querySelectorAll(".kskin-hero .lang-btn")
    .forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
  document.querySelectorAll(".kskin-hero [data-fa]").forEach((el) => {
    el.textContent = el.getAttribute("data-" + lang);
  });
}

// Floating bubbles
const bubblesContainer = document.getElementById("bubbles");
for (let i = 0; i < 8; i++) {
  const b = document.createElement("div");
  b.className = "bubble";
  const size = 10 + Math.random() * 30;
  b.style.width = size + "px";
  b.style.height = size + "px";
  b.style.left = Math.random() * 100 + "%";
  b.style.animationDuration = 8 + Math.random() * 12 + "s";
  b.style.animationDelay = Math.random() * 8 + "s";
  bubblesContainer.appendChild(b);
}

intervalK = setInterval(nextSlideK, 5500);
