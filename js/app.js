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

// Navbar scroll effect

