/**
 * ==========================================
 * سیستم مدیریت Sliders داینامیکی
 * Dynamic Sliders Management System
 * ==========================================
 */

// اولویت: ابتدا Sliders را از config درج کن
const slidersManager = new SlidersManager();

function setLang(lang) {
  document.body.setAttribute("lang", lang);
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "en" ? "ltr" : "rtl");
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  localStorage.setItem("preferredLang", lang);
}

setLang(localStorage.getItem("preferredLang") || "fa");

// درج HTML های Sliders به صورت داینامیکی
document.addEventListener('DOMContentLoaded', function() {
  slidersManager.renderToElement('.folder-grid');

  const sliderCountElement = document.querySelector('.stats-grid .stat-card:first-child b');
  if (sliderCountElement) {
    sliderCountElement.textContent = String(slidersManager.getCount());
  }

  // بعد از درج HTML، Observers و Event Listeners را اعمال کن
  setupObservers();
  setupAnchorLinks();
  setupHeroSlider();
});

const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

/**
 * تابع تنظیم Observers برای انیمیشن‌های Reveal
 */
function setupObservers() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1 },
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

/**
 * تابع تنظیم Anchor Links برای Smooth Scroll
 */
function setupAnchorLinks() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) {
        return;
      }
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
}

/**
 * اسلایدر تصویری هیرو با عکس‌های میکامال - تعویض خودکار، کنترل نقطه‌ای و سوایپ لمسی
 * Hero image slider using Mica Mall photos - autoplay, dot controls, touch swipe support
 */
function setupHeroSlider() {
  const slides = Array.from(document.querySelectorAll("#heroSlides .hero-slide"));
  const dotsRoot = document.getElementById("heroDots");
  const heroSlider = document.getElementById("heroSlider");
  if (!slides.length || !dotsRoot) {
    return;
  }

  let current = 0;
  let autoplayId;
  let touchStartX = 0;

  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "dot" + (index === 0 ? " active" : "");
    dot.setAttribute("aria-label", `اسلاید ${index + 1}`);
    dot.addEventListener("click", () => {
      goTo(index);
      restartAutoplay();
    });
    dotsRoot.appendChild(dot);
  });

  const dots = Array.from(dotsRoot.children);

  function goTo(index) {
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");
    current = (index + slides.length) % slides.length;
    slides[current].classList.add("active");
    dots[current].classList.add("active");
  }

  function restartAutoplay() {
    clearInterval(autoplayId);
    autoplayId = setInterval(() => goTo(current + 1), 5000);
  }

  if (heroSlider) {
    heroSlider.addEventListener("touchstart", (event) => {
      touchStartX = event.changedTouches[0].screenX;
    });
    heroSlider.addEventListener("touchend", (event) => {
      const delta = event.changedTouches[0].screenX - touchStartX;
      if (Math.abs(delta) < 40) {
        return;
      }
      goTo(delta > 0 ? current - 1 : current + 1);
      restartAutoplay();
    });
  }

  restartAutoplay();
}

