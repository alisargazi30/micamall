/**
 * مثال‌های استفاده از SlidersManager
 * SlidersManager Usage Examples
 * 
 * این فایل نشان می‌دهد چگونه می‌توانید از SlidersManager
 * در سناریوهای مختلف استفاده کنید
 */

// =========================================
// 1️⃣ دسترسی به SlidersManager
// Access SlidersManager
// =========================================

// slidersManager یک نمونه از SlidersManager است که در app.js ایجاد می‌شود
// slidersManager is created in app.js

console.log('تعداد Sliders:', slidersManager.getCount());


// =========================================
// 2️⃣ دریافت اطلاعات Slider
// Get Slider Information
// =========================================

// یک Slider خاص را پیدا کنید
const nimanykishSlider = slidersManager.getSlider('nimanykish');
console.log('Nimanykish Slider:', nimanykishSlider);

// تمام Sliders را دریافت کنید
console.log('تمام Sliders:', slidersManager.sliders);


// =========================================
// 3️⃣ اضافه کردن Slider جدید (برنامه‌ای)
// Add New Slider Programmatically
// =========================================

const newSlider = {
  id: 'newyear-collection',
  path: './pages/newyear-collection/index.html',
  icon: 'fa-gift',
  titles: {
    fa: 'کالکشن سال نو',
    en: 'New Year Collection'
  },
  descriptions: {
    fa: 'کالکشن ویژه برای سال نو با تخفیف‌های فوری',
    en: 'Special New Year collection with instant discounts'
  },
  tags: ['seasonal', 'special-offer', 'limited-time'],
  buttons: {
    fa: 'شروع خرید',
    en: 'Start Shopping'
  }
};

// اضافه کردن
slidersManager.addSlider(newSlider);
console.log('تعداد جدید:', slidersManager.getCount());  // 5 (اگر 4 تا بودند)

// بروزرسانی صفحه
slidersManager.renderToElement('.folder-grid');


// =========================================
// 4️⃣ ویرایش Slider موجود
// Update Existing Slider
// =========================================

// عنوان نیمانی را تغییر دهید
slidersManager.updateSlider('nimanykish', {
  titles: {
    fa: 'جواهرات نیمانی - ویرایش شده',
    en: 'Nimany Kish Jewelry - Updated'
  }
});

// بروزرسانی صفحه
slidersManager.renderToElement('.folder-grid');


// =========================================
// 5️⃣ حذف کردن Slider
// Delete Slider
// =========================================

// یک Slider را حذف کنید
slidersManager.removeSlider('jbl');
console.log('تعداد جدید بعد حذف:', slidersManager.getCount());

// بروزرسانی صفحه
slidersManager.renderToElement('.folder-grid');


// =========================================
// 6️⃣ تولید HTML برای استفاده جای دیگر
// Generate HTML for Other Use
// =========================================

// تولید HTML برای تمام Sliders
const allHtml = slidersManager.generateSlidersHTML();
console.log('HTML تولید شده:', allHtml);

// تولید HTML برای یک Slider خاص
const sliderToRender = slidersManager.getSlider('kbeauty');
const sliderHtml = slidersManager.generateSliderCard(sliderToRender);
console.log('HTML K-Beauty:', sliderHtml);


// =========================================
// 7️⃣ فیلتر کردن Sliders
// Filter Sliders
// =========================================

// Sliders با tag خاص را پیدا کنید
function filterByTag(tagName) {
  return slidersManager.sliders.filter(slider =>
    slider.tags.includes(tagName)
  );
}

const premiumSliders = filterByTag('Showcase');
console.log('Premium Sliders:', premiumSliders);


// =========================================
// 8️⃣ جستجو در Sliders
// Search Sliders
// =========================================

function searchSliders(query) {
  const lowerQuery = query.toLowerCase();
  return slidersManager.sliders.filter(slider =>
    slider.titles.fa.includes(query) ||
    slider.titles.en.toLowerCase().includes(lowerQuery) ||
    slider.descriptions.fa.includes(query) ||
    slider.descriptions.en.toLowerCase().includes(lowerQuery)
  );
}

const results = searchSliders('jewelry');
console.log('نتایج جستجو:', results);


// =========================================
// 9️⃣ حلقه زدن روی Sliders
// Loop Through Sliders
// =========================================

slidersManager.sliders.forEach(slider => {
  console.log(`${slider.titles.fa} (${slider.id})`);
  console.log(`  مسیر: ${slider.path}`);
  console.log(`  تگ‌ها: ${slider.tags.join(', ')}`);
});


// =========================================
// 🔟 ذخیره‌کردن در LocalStorage
// Save to LocalStorage
// =========================================

// Sliders را در LocalStorage ذخیره کنید
function saveSliders() {
  localStorage.setItem('slidersData', JSON.stringify(slidersManager.sliders));
}

// بارگذاری از LocalStorage
function loadSliders() {
  const saved = localStorage.getItem('slidersData');
  if (saved) {
    const sliders = JSON.parse(saved);
    return new SlidersManager(sliders);
  }
}

// استفاده:
saveSliders();
const restored = loadSliders();
console.log('بازگردانده شده:', restored.getCount());


// =========================================
// 1️⃣1️⃣ رویدادهای سفارشی (Custom Events)
// =========================================

// وقتی Slider اضافه شود
class AdvancedSlidersManager extends SlidersManager {
  constructor(config) {
    super(config);
    this.listeners = {};
  }

  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  emit(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(callback => callback(data));
    }
  }

  addSlider(newSlider) {
    super.addSlider(newSlider);
    this.emit('sliderAdded', newSlider);
  }

  removeSlider(sliderId) {
    const removed = this.sliders.find(s => s.id === sliderId);
    super.removeSlider(sliderId);
    this.emit('sliderRemoved', removed);
  }
}

// استفاده:
const advancedManager = new AdvancedSlidersManager(SLIDERS_CONFIG);

advancedManager.on('sliderAdded', (slider) => {
  console.log(`Slider اضافه شد: ${slider.titles.fa}`);
});

advancedManager.on('sliderRemoved', (slider) => {
  console.log(`Slider حذف شد: ${slider.titles.fa}`);
});


// =========================================
// 1️⃣2️⃣ صادر کردن/درون‌ریزی (Export/Import)
// =========================================

// صادر کردن Sliders به JSON
function exportSliders() {
  const json = JSON.stringify(slidersManager.sliders, null, 2);
  console.log(json);
  // می‌توانید این را کپی کرده و در فایل دیگری ذخیره کنید
}

// درون‌ریزی از JSON
function importSliders(jsonString) {
  try {
    const data = JSON.parse(jsonString);
    return new SlidersManager(data);
  } catch (error) {
    console.error('خطا در parse کردن JSON:', error);
  }
}

// استفاده:
exportSliders();
// کپی output و paste کنید:
// const imported = importSliders('[...]');


// =========================================
// 💡 نکات مهم
// =========================================

/*
✅ نکات:
- slidersManager یک شیء global در app.js است
- تمام تغییرات در حافظه (Memory) ذخیره می‌شوند
- صفحه را ریفرش کنید تا تغییرات ذخیره شوند
- برای ذخیره دائمی، از Database استفاده کنید
- SlidersManager می‌تواند گسترش داده شود
*/
