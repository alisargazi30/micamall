/**
 * Sliders Configuration
 * تنظیمات تمام اسلایدرها در یک جا
 * شما می‌توانید اینجا تغییرات بدید و HTML خودکار بروزرسانی می‌شود
 */

const SLIDERS_CONFIG = [
  {
    id: 'nimanykish',
    path: './pages/nimanykish/index.html',
    icon: 'fa-gem',
    logo: 'https://kimi-web-img.moonshot.cn/img/www.nimany.com/c401a24cc6d9bcae2b11c66931d88ecfb659ae23.jpg',
    titles: {
      fa: 'اسلایدر نیمانی کیش',
      en: 'Nimany Kish Slider'
    },
    descriptions: {
      fa: 'اسلایدر برند جواهرات و اکسسوری با فضای لوکس و تایپوگرافی دوزبانه.',
      en: 'Luxury bilingual slider for jewelry and accessories presentation.'
    },
    tags: ['nimanykish', 'HTML/CSS/JS', 'RTL/LTR'],
    buttons: {
      fa: 'ورود به اسلایدر',
      en: 'Open Slider'
    }
  },
  {
    id: 'kbeauty',
    path: './pages/kbeauty/index.html',
    icon: 'fa-spa',
    logo: 'https://kimi-web-img.moonshot.cn/img/media.lanecrawford.com.cn/fb4641fb5d3f0c03b61ba059fd3e4463af458da5.png',
    titles: {
      fa: 'اسلایدر ک بیوتی',
      en: 'K Beauty Slider'
    },
    descriptions: {
      fa: 'اسلایدر محصولات مراقبت پوست با حس مدرن، رنگ‌های نرم و انیمیشن روان.',
      en: 'Modern skincare slider with soft visuals and smooth motion.'
    },
    tags: ['kbeauty', 'HTML/CSS/JS', 'Responsive'],
    buttons: {
      fa: 'ورود به اسلایدر',
      en: 'Open Slider'
    }
  },
  {
    id: 'goldenconsept',
    path: './pages/goldenconsept/index.html',
    icon: 'fa-crown',
    logo: 'https://kimi-web-img.moonshot.cn/img/cdn.shopify.com/b1d7374d4b6bb78de5d37d499f6e4221a27a68fd.png',
    titles: {
      fa: 'اسلایدر گلدن کانسپت',
      en: 'Golden Consept Slider'
    },
    descriptions: {
      fa: 'اسلایدر کالکشن لوکس با تاکید روی رنگ طلایی، کنتراست بالا و جزئیات محصول.',
      en: 'Luxury collection slider focused on golden tone and strong product contrast.'
    },
    tags: ['goldenconsept', 'HTML/CSS/JS', 'Showcase'],
    buttons: {
      fa: 'ورود به اسلایدر',
      en: 'Open Slider'
    }
  },
  {
    id: 'jbl',
    path: './pages/jbl/index.html',
    icon: 'fa-volume-high',
    logo: 'https://kimi-web-img.moonshot.cn/img/hnsgsfp.imgix.net/0542107fa967e18fda90985c3bc7c12b130d6e8e.jpg',
    titles: {
      fa: 'اسلایدر jbl',
      en: 'JBL Slider'
    },
    descriptions: {
      fa: 'اسلایدر کالکشن لوکس با تاکید روی رنگ قرمز، کنتراست بالا و جزئیات محصول.',
      en: 'Luxury collection slider focused on red tone and strong product contrast.'
    },
    tags: ['jbl', 'HTML/CSS/JS', 'Showcase'],
    buttons: {
      fa: 'ورود به اسلایدر',
      en: 'Open Slider'
    }
  },
  {
    id: 'kiko',
    path: './pages/kiko/index.html',
    icon: 'fa-wand-magic-sparkles',
    logo: 'https://kimi-web-img.moonshot.cn/img/wwd.com/529e05656b3978127d1f8a34f93a1264768e0b7f.jpg',
    titles: {
      fa: 'اسلایدر کیکو میلانو',
      en: 'KIKO Milano Slider'
    },
    descriptions: {
      fa: 'اسلایدر آرایشی کیکو با هویت صورتی-مشکی، تایپوگرافی جسور و موشن نرم.',
      en: 'KIKO cosmetics slider with pink-black identity, bold typography, and smooth motion.'
    },
    tags: ['kiko', 'HTML/CSS/JS', 'Beauty'],
    buttons: {
      fa: 'ورود به اسلایدر',
      en: 'Open Slider'
    }
  }
];

/**
 * Class برای مدیریت Sliders
 * SlidersManager
 */
class SlidersManager {
  constructor(config = SLIDERS_CONFIG) {
    this.sliders = config;
    this.currentLang = localStorage.getItem('lang') || 'fa';
  }

  /**
   * تولید HTML برای تمام Sliders
   */
  generateSlidersHTML() {
    return this.sliders
      .map(slider => this.generateSliderCard(slider))
      .join('');
  }

  /**
   * تولید HTML برای یک Slider
   */
  generateSliderCard(slider) {
    const logoHTML = slider.logo
      ? `<img src="${slider.logo}" alt="${slider.titles.en} logo" loading="lazy" />`
      : `<i class="fas ${slider.icon}"></i>`;

    return `
      <article class="folder-card reveal">
        <div class="folder-card-glow"></div>
        <div class="folder-media">
          <div class="folder-logo">${logoHTML}</div>
          <div class="folder-icon"><i class="fas ${slider.icon}"></i></div>
        </div>
        <h3>
          <span class="lang-fa">${slider.titles.fa}</span>
          <span class="lang-en">${slider.titles.en}</span>
        </h3>
        <p>
          <span class="lang-fa">${slider.descriptions.fa}</span>
          <span class="lang-en">${slider.descriptions.en}</span>
        </p>
        <div class="tech-tags">
          ${slider.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
        </div>
        <a class="card-link" href="${slider.path}">
          <span class="lang-fa">${slider.buttons.fa}</span>
          <span class="lang-en">${slider.buttons.en}</span>
        </a>
      </article>
    `;
  }

  /**
   * درج HTML در صفحه
   */
  renderToElement(elementSelector) {
    const element = document.querySelector(elementSelector);
    if (element) {
      element.innerHTML = this.generateSlidersHTML();
    }
  }

  /**
   * اضافه کردن Slider جدید
   */
  addSlider(newSlider) {
    this.sliders.push(newSlider);
    return this;
  }

  /**
   * حذف کردن Slider
   */
  removeSlider(sliderId) {
    this.sliders = this.sliders.filter(s => s.id !== sliderId);
    return this;
  }

  /**
   * ویرایش کردن Slider موجود
   */
  updateSlider(sliderId, updates) {
    const slider = this.sliders.find(s => s.id === sliderId);
    if (slider) {
      Object.assign(slider, updates);
    }
    return this;
  }

  /**
   * دریافت تعداد Sliders
   */
  getCount() {
    return this.sliders.length;
  }

  /**
   * دریافت Slider به وسیله ID
   */
  getSlider(sliderId) {
    return this.sliders.find(s => s.id === sliderId);
  }
}

// Export برای استفاده در فایل‌های دیگر
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SLIDERS_CONFIG, SlidersManager };
}
