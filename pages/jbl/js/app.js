// ===== LANGUAGE SWITCHER =====
function setLang(lang) {
  document.body.setAttribute("lang", lang);
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  localStorage.setItem("jblLang", lang);
  document.dir = lang === "en" ? "ltr" : "rtl";
}
const savedLang = localStorage.getItem("jblLang") || "fa";
setLang(savedLang);

// ===== SLIDER LOGIC =====
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const progressBar = document.getElementById("progressBar");
const totalSlides = slides.length;
const slideDuration = 6000;
let slideInterval;
let progressInterval;

function updateSlider() {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentSlide);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
  resetProgress();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlider();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlider();
  resetAutoPlay();
}

function resetProgress() {
  progressBar.style.transition = "none";
  progressBar.style.width = "0%";
  setTimeout(() => {
    progressBar.style.transition = `width ${slideDuration}ms linear`;
    progressBar.style.width = "100%";
  }, 50);
}

function resetAutoPlay() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, slideDuration);
}

// Touch support
let touchStartX = 0;
const slider = document.getElementById("heroSlider");
slider.addEventListener(
  "touchstart",
  (e) => (touchStartX = e.touches[0].clientX),
);
slider.addEventListener("touchend", (e) => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) {
    diff > 0 ? nextSlide() : prevSlide();
    resetAutoPlay();
  }
});

// Start autoplay
resetProgress();
slideInterval = setInterval(nextSlide, slideDuration);

// ===== NAVBAR SCROLL =====
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// ===== REVEAL ON SCROLL =====
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("active");
    });
  },
  { threshold: 0.1 },
);
reveals.forEach((el) => observer.observe(el));

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});
