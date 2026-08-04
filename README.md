# 🎯 Mica Mall Sliders Collection

[![Made with ❤️](https://img.shields.io/badge/Made%20with-❤️-red)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![HTML/CSS/JS](https://img.shields.io/badge/Stack-HTML/CSS/JS-blue)]()
[![Bilingual](https://img.shields.io/badge/Language-FA%20%2F%20EN-green)]()

مجموعه اسلایدرهای دوزبانه پیشرفته برای فروشگاه‌های آنلاین | Advanced Bilingual Slider Collection for Online Retail

---

## ✨ ویژگی‌های پروژه
## Project Features

- 🎨 **۴ اسلایدر منحصر** - نیمانی کیش، K-Beauty، Golden Concept، JBL
- 🌍 **دوزبانه** - پشتیبانی کامل فارسی و انگلیسی (RTL/LTR)
- ⚡ **بدون فریمورک** - صرفاً HTML/CSS/JavaScript خام
- 📱 **Responsive** - سازگار با تمام سایز‌های صفحه
- 🎯 **داینامیکی** - تمام Sliderها با JavaScript مدیریت می‌شوند
- 🔧 **آسان تغییر** - تغییرات فقط در فایل تنظیمات
- ♿ **قابل دسترسی** - استانداردهای WCAG رعایت شده

---

## 📁 ساختار پروژه
## Project Structure

```
micamall/
├── 📄 index.html              # صفحه اصلی / Main page
├── 📄 SETUP_GUIDE.md          # راهنمای راه‌اندازی / Setup guide
├── 📄 README.md               # این فایل / This file
│
├── 📁 css/
│   └── style.css              # استایل‌های کلی
│
├── 📁 js/
│   ├── sliders-config.js      # ⭐ تنظیمات Sliders (فقط این را تغییر دهید!)
│   ├── app.js                 # برنامه اصلی
│   └── examples.js            # مثال‌های استفاده
│
└── 📁 pages/
    ├── nimanykish/
    │   ├── index.html
    │   ├── css/style.css
    │   └── js/app.js
    ├── kbeauty/
    │   ├── index.html
    │   ├── css/style.css
    │   └── js/app.js
    ├── goldenconsept/
    │   ├── index.html
    │   ├── css/style.css
    │   └── js/app.js
    └── jbl/
        ├── index.html
        ├── css/style.css
        └── js/app.js
```

---

## 🚀 شروع سریع
## Quick Start

### 1. کلون کردن Repository

```bash
git clone https://github.com/alisargazi30/mica-mall-sliders.git
cd mica-mall-sliders
```

### 2. باز کردن در مرورگر

```bash
# Option 1: دابل‌کلیک بر روی index.html
# Double-click on index.html

# Option 2: استفاده از Live Server (VS Code)
# Use Live Server extension in VS Code
```

### 3. تغییرات اولین

تمام تغییرات را در این فایل انجام دهید:  
Make all changes in this file:

```
js/sliders-config.js
```

---

## 🎯 استفاده
## Usage

### تغییر یک Slider موجود
### Edit Existing Slider

باز کنید: `js/sliders-config.js`

```javascript
{
  id: 'nimanykish',
  titles: {
    fa: '🔴 عنوان جدید',      // ✏️ تغییر کنید
    en: '🔴 New Title'         // ✏️ تغییر کنید
  },
  descriptions: {
    fa: '🔴 توضیح جدید...',   // ✏️ تغییر کنید
    en: '🔴 New description...'// ✏️ تغییر کنید
  },
  // تغییرات خودکار نمایش داده می‌شوند!
}
```

### اضافه کردن Slider جدید
### Add New Slider

```javascript
const SLIDERS_CONFIG = [
  // ... Sliders موجود

  {
    id: 'new-slider-id',
    path: './pages/new-slider-id/index.html',
    icon: 'fa-star',
    titles: { fa: '...', en: '...' },
    descriptions: { fa: '...', en: '...' },
    tags: ['...', '...'],
    buttons: { fa: '...', en: '...' }
  }
];
```

---

## 📚 مستندات بیشتر
## More Documentation

برای اطلاعات بیشتر، [SETUP_GUIDE.md](SETUP_GUIDE.md) را مطالعه کنید.

For detailed information, read [SETUP_GUIDE.md](SETUP_GUIDE.md).

---

## 🎨 Sliders موجود
## Available Sliders

| نام | عنوان | آیکن | مسیر |
|------|--------|------|------|
| Nimany Kish | اسلایدر نیمانی کیش | 💎 | `pages/nimanykish/` |
| K Beauty | اسلایدر ک بیوتی | 🧘 | `pages/kbeauty/` |
| Golden Concept | اسلایدر گلدن کانسپت | 👑 | `pages/goldenconsept/` |
| JBL | اسلایدر JBL | 👑 | `pages/jbl/` |

---

## 🔧 سفارشی‌سازی
## Customization

### تغییر رنگ‌ها

باز کنید: `css/style.css`

```css
:root {
  --color-primary: #d4af37;    /* رنگ طلایی اصلی */
  --color-secondary: #1a1a1a;  /* رنگ ثانویه */
  --color-accent: #ff6b6b;     /* رنگ تاکیدی */
}
```

### تغییر فونت

```css
body {
  font-family: 'Vazirmatn', sans-serif;  /* فونت فارسی */
}
```

---

## 📝 نکات مهم
## Important Notes

✅ **تنها فایلی که باید تغییر دهید:**
```
js/sliders-config.js
```

❌ **از تغییر این فایل‌ها پرهیز کنید:**
- `index.html` - تمام محتوا خودکار تولید می‌شود
- `js/app.js` - کد اصلی برنامه است

---

## 🌐 پشتیبانی زبان
## Language Support

- ✅ **فارسی (RTL)** - پشتیبانی کامل
- ✅ **انگلیسی (LTR)** - پشتیبانی کامل
- 🔘 **زبان‌های دیگر** - راحت اضافه کردن

### اضافه کردن زبان جدید

```javascript
{
  id: 'nimanykish',
  titles: {
    fa: '...',
    en: '...',
    // de: '...',  // آلمانی
    // fr: '...'   // فرانسوی
  }
}
```

---

## 🔗 استفاده از SlidersManager

```javascript
// دریافت تعداد Sliders
slidersManager.getCount()

// دریافت یک Slider خاص
slidersManager.getSlider('nimanykish')

// اضافه کردن Slider جدید
slidersManager.addSlider({...})

// ویرایش Slider
slidersManager.updateSlider('id', {...})

// حذف Slider
slidersManager.removeSlider('id')

// بروزرسانی صفحه
slidersManager.renderToElement('.folder-grid')
```

بیشتر اطلاعات: [js/examples.js](js/examples.js)

---

## 📊 تصاویر
## Screenshots

*(توضیح: شما می‌توانید تصاویر را اضافه کنید)*

---

## 🤝 مشارکت
## Contributing

برای اضافه کردن ویژگی‌های جدید یا رفع باگ:

1. Fork کنید
2. Branch جدید بسازید (`git checkout -b feature/amazing-feature`)
3. Commit کنید (`git commit -m 'Add amazing feature'`)
4. Push کنید (`git push origin feature/amazing-feature`)
5. Pull Request بسازید

---

## 📄 لایسنس
## License

این پروژه تحت لایسنس MIT منتشر شده است.

This project is licensed under MIT License - see [LICENSE](LICENSE) file for details.

---

## 👨‍💻 توسعه‌دهنده
## Developer

**علیرضا سرگزی** | **Alireza Sargazi**

- 📞 **تماس تلفنی**: 0937-933-9170
- 📧 **ایمیل**: mr.alireza.sargazi1@gmail.com
- 🌐 **Instagram**: [@ali_sargazi30](https://instagram.com/ali_sargazi30)
- 🐙 **GitHub**: [@alisargazi30](https://github.com/alisargazi30)

---

## 📞 پشتیبانی
## Support

اگر سوالی دارید یا مشکلی پیدا کردید:

1. [Issues](../../issues) را چک کنید
2. سوال جدید بسازید
3. یا به ایمیل من ایمیل بزنید

---

## 🙏 تشکر
## Thanks

- Font Awesome برای آیکون‌های فوق‌العاده
- Vazirmatn برای فونت فارسی زیبا
- تمام دوستانی که feedback دادند

---

## 📈 Roadmap

- [ ] پشتیبانی از عناصر Interactive
- [ ] Dashboard مدیریت Sliders
- [ ] API برای بارگذاری داینامیکی
- [ ] PWA Support
- [ ] Performance Optimization

---

## 🎉 نسخه‌ها
## Versions

| نسخه | تاریخ | توضیح |
|------|--------|--------|
| 1.0.0 | 1405/05/13 | نسخه اول منتشر شده |
| 1.1.0 | TBA | سیستم داینامیکی Sliders |

---

**ساخته شده با ❤️ برای Mica Mall**

*Made with ❤️ for Mica Mall*

---

### ⭐ اگر این پروژه مفید بود، ستاره بدهید! If you found this useful, please give it a ⭐!
