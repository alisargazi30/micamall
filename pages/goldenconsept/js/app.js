let currentGC = 0;
const slidesGC = document.querySelectorAll(".gc-hero .slide");
const totalGC = slidesGC.length;
let intervalGC;
let currentLangGC = "fa";

const dotsContainerGC = document.getElementById("dotsGC");
for (let i = 0; i < totalGC; i++) {
  const dot = document.createElement("div");
  dot.className = "dot" + (i === 0 ? " active" : "");
  dot.innerHTML = '<div class="dot-fill"></div>';
  dot.onclick = () => goToGC(i);
  dotsContainerGC.appendChild(dot);
}
const dotsGC = document.querySelectorAll(".gc-hero .dot");

function updateSlidesGC() {
  slidesGC.forEach((s, i) => {
    s.classList.toggle("active", i === currentGC);
  });
  dotsGC.forEach((d, i) => {
    d.classList.toggle("active", i === currentGC);
    if (i !== currentGC) {
      d.querySelector(".dot-fill").style.animation = "none";
      d.querySelector(".dot-fill").offsetHeight;
      d.querySelector(".dot-fill").style.animation = "";
    }
  });
}

function nextSlideGC() {
  currentGC = (currentGC + 1) % totalGC;
  updateSlidesGC();
  resetTimerGC();
}
function prevSlideGC() {
  currentGC = (currentGC - 1 + totalGC) % totalGC;
  updateSlidesGC();
  resetTimerGC();
}
function goToGC(i) {
  currentGC = i;
  updateSlidesGC();
  resetTimerGC();
}

function resetTimerGC() {
  clearInterval(intervalGC);
  intervalGC = setInterval(nextSlideGC, 6000);
}

function setLangGC(lang) {
  currentLangGC = lang;
  document
    .querySelector(".gc-hero")
    .setAttribute("dir", lang === "fa" ? "rtl" : "ltr");
  document
    .querySelectorAll(".gc-hero .lang-btn")
    .forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
  document.querySelectorAll(".gc-hero [data-fa]").forEach((el) => {
    el.textContent = el.getAttribute("data-" + lang);
  });
}

// Gold dust particles
const dustContainer = document.getElementById("goldDust");
for (let i = 0; i < 20; i++) {
  const p = document.createElement("div");
  p.className = "particle";
  p.style.left = Math.random() * 100 + "%";
  p.style.animationDuration = 6 + Math.random() * 10 + "s";
  p.style.animationDelay = Math.random() * 6 + "s";
  p.style.width = 1 + Math.random() * 2 + "px";
  p.style.height = p.style.width;
  dustContainer.appendChild(p);
}

intervalGC = setInterval(nextSlideGC, 6000);
