// ===== BOKEH BACKGROUND =====
const canvas = document.getElementById("bokehCanvas");
const ctx = canvas.getContext("2d");
let bokehParticles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class BokehParticle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 80 + 20;
    this.speedX = (Math.random() - 0.5) * 0.2;
    this.speedY = (Math.random() - 0.5) * 0.2;
    this.opacity = Math.random() * 0.08 + 0.02;
    const colors = ["212, 175, 55", "232, 196, 196", "245, 230, 211"];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x > canvas.width + 100) this.x = -100;
    if (this.x < -100) this.x = canvas.width + 100;
    if (this.y > canvas.height + 100) this.y = -100;
    if (this.y < -100) this.y = canvas.height + 100;
  }
  draw() {
    const gradient = ctx.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      this.size,
    );
    gradient.addColorStop(0, `rgba(${this.color}, ${this.opacity})`);
    gradient.addColorStop(1, `rgba(${this.color}, 0)`);
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initBokeh() {
  bokehParticles = [];
  for (let i = 0; i < 25; i++) {
    bokehParticles.push(new BokehParticle());
  }
}
initBokeh();

function animateBokeh() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bokehParticles.forEach((p) => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateBokeh);
}
animateBokeh();

// ===== LANGUAGE SWITCHER =====
function setLang(lang) {
  document.body.setAttribute("lang", lang);
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  localStorage.setItem("grLang", lang);
  document.dir = lang === "en" ? "ltr" : "rtl";
}
const savedLang = localStorage.getItem("grLang") || "fa";
setLang(savedLang);

// ===== SLIDER LOGIC =====
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const progressBar = document.getElementById("progressBar");
const totalSlides = slides.length;
const slideDuration = 7000;
let slideInterval;

function updateSlider() {
  slides.forEach((slide, i) =>
    slide.classList.toggle("active", i === currentSlide),
  );
  dots.forEach((dot, i) => dot.classList.toggle("active", i === currentSlide));
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
