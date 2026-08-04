# 📌 راهنمای سیستم Sliders داینامیکی
# Dynamic Sliders Management System Guide

## 🎯 چه تغیر شد؟
## What Changed?

برای اضافه کردن Slider جدید یا ویرایش Sliderهای موجود، دیگر **نیازی به تغییر HTML** نیست!  
تمام تغییرات در فایل `js/sliders-config.js` انجام می‌شوند.

Instead of modifying HTML, all changes are made in `js/sliders-config.js` file!

---

## 📁 ساختار فایل‌ها
## File Structure

```
micamall/
├── index.html                 # صفحه اصلی (Main page)
├── css/
│   └── style.css             # استایل‌های کلی
├── js/
│   ├── sliders-config.js     # ⭐ تنظیمات و داده‌های Sliders
│   └── app.js                # برنامه اصلی
└── pages/
    ├── nimanykish/
    ├── kbeauty/
    ├── goldenconsept/
    └── jbl/
```

---

## 🔧 چگونه تغییرات بدهیم؟
## How to Make Changes?

### 1️⃣ یک Slider موجود را ویرایش کنید
### Edit an Existing Slider

باز کنید: `js/sliders-config.js`

```javascript
const SLIDERS_CONFIG = [
  {
    id: 'nimanykish',              // 🔑 شناسه منحصر
    path: './pages/nimanykish/index.html',  // مسیر Slider
    icon: 'fa-gem',                 // آیکن (Font Awesome)
    titles: {
      fa: 'اسلایدر نیمانی کیش',     // عنوان فارسی
      en: 'Nimany Kish Slider'      // عنوان انگلیسی
    },
    descriptions: {
      fa: 'توضیح فارسی...',
      en: 'English description...'
    },
    tags: ['nimanykish', 'HTML/CSS/JS', 'RTL/LTR'],  // برچسب‌ها
    buttons: {
      fa: 'ورود به اسلایدر',
      en: 'Open Slider'
    }
  },
  // ... سایر Sliders
]
```

### مثال: عنوان Nimanykish را تغییر دهید:
```javascript
{
  id: 'nimanykish',
  titles: {
    fa: 'اسلایدر جدید نیمانی',    // ✏️ تغییر یافته
    en: 'New Nimany Kish Slider'  // ✏️ تغییر یافته
  },
  // ...
}
```

---

### 2️⃣ Slider جدید اضافه کنید
### Add a New Slider

```javascript
const SLIDERS_CONFIG = [
  // ... Sliders موجود
  
  {
    id: 'mynewslider',            // شناسه منحصر (فقط عدد و حرف و خط تیره)
    path: './pages/mynewslider/index.html',
    icon: 'fa-star',              // آیکن جدید (Font Awesome)
    titles: {
      fa: 'اسلایدر جدید من',
      en: 'My New Slider'
    },
    descriptions: {
      fa: 'این اسلایدر جدید است...',
      en: 'This is my new slider...'
    },
    tags: ['mynewslider', 'HTML/CSS/JS', 'Custom'],
    buttons: {
      fa: 'ورود به اسلایدر',
      en: 'Open Slider'
    }
  }
];
```

تمام تغییرات **خودکار** در صفحه نمایش داده می‌شوند!  
All changes appear automatically on the page!

---

### 3️⃣ یک Slider را حذف کنید
### Delete a Slider

فقط آن Object را از `SLIDERS_CONFIG` حذف کنید!

```javascript
// ❌ این Slider را حذف کنید - تمام اونجا را حذف کنید:
const SLIDERS_CONFIG = [
  {
    id: 'nimanykish',  // ❌ این و 10 خط بعدی را حذف کنید
    // ...
  },
  // باقی Sliders
];
```

---

## 🎨 آیکون‌های قابل استفاده
## Available Icons

تمام آیکون‌های Font Awesome v6 قابل استفاده هستند:

```
fa-gem          💎 جواهر
fa-spa          🧘 سپا / زیبایی
fa-crown        👑 تاج
fa-star         ⭐ ستاره
fa-heart        ❤️ قلب
fa-shopping-bag 🛍️ خرید
fa-cube         📦 پروژه
fa-bolt         ⚡ سریع
fa-music        🎵 موسیقی
fa-video        🎬 ویدیو
```

### [لیست کامل آیکون‌ها](https://fontawesome.com/icons)

---

## 🚀 استفاده در دیگر فایل‌ها
## Using SlidersManager in Other Files

```javascript
// دریافت تعداد Sliders
const count = slidersManager.getCount();  // مثال: 4

// دریافت یک Slider خاص
const slider = slidersManager.getSlider('nimanykish');

// اضافه کردن Slider جدید (برنامه‌ای)
slidersManager.addSlider({
  id: 'newsample',
  path: './pages/newsample/index.html',
  // ...
});

// بروزرسانی HTML
slidersManager.renderToElement('.folder-grid');

// حذف کردن Slider
slidersManager.removeSlider('nimanykish');
```

---

## ✅ تست کنید
## Test It

1. `js/sliders-config.js` را باز کنید
2. یک عنوان یا توضیح را تغییر دهید
3. صفحه را ریفرش کنید (F5)
4. تغییرات فوری نمایش داده می‌شوند! ✨

---

## 🔗 برای GitHub منتشر کردن
## Publishing to GitHub

این ساختار برای GitHub بسیار مناسب است:

```bash
git add .
git commit -m "Dynamic sliders system"
git push origin main
```

**مزایا برای GitHub:**
- ✅ دسترسی آسان به تغییرات
- ✅ بدون HTML Duplication
- ✅ ساده‌تر برای تغییرات
- ✅ کد تمیز‌تر
- ✅ کاهش اندازه Repository

---

## 📝 نکات مهم
## Important Notes

- **ID منحصر بودن**: هر Slider باید `id` منحصر داشته باشد
- **مسیر درست**: `path` باید به فایل HTML موجود اشاره کند
- **آیکون درست**: از Font Awesome v6 استفاده کنید
- **دوزبانگی**: همیشه `fa` و `en` را پر کنید

---

## 🎓 مثال کامل - Slider جدید اضافه کردن
## Complete Example - Adding a New Slider

```javascript
const SLIDERS_CONFIG = [
  // Sliders موجود...
  
  // ✨ Slider جدید
  {
    id: 'luxury-watches',
    path: './pages/luxury-watches/index.html',
    icon: 'fa-clock',
    titles: {
      fa: 'اسلایدر ساعت‌های لاکچری',
      en: 'Luxury Watches Slider'
    },
    descriptions: {
      fa: 'کالکشن ساعت‌های عالی با طراحی مدرن',
      en: 'Premium watch collection with modern design'
    },
    tags: ['luxury-watches', 'HTML/CSS/JS', 'Premium'],
    buttons: {
      fa: 'مشاهده کالکشن',
      en: 'View Collection'
    }
  }
];
```

بعد از ذخیره‌کردن، صفحه را ریفرش کنید و Slider جدید ظاهر می‌شود! 🎉

---

**نوشته شده برای پروژه Mica Mall | Written for Mica Mall Project**
