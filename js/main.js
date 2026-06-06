/* ============================================
   Turkuvaz Optik Lens — Main JavaScript
   ============================================ */

const translations = {
  tr: {
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımızda',
    'nav.products': 'Ürünler',
    'nav.brands': 'Markalar',
    'nav.services': 'Hizmetler',
    'nav.gallery': 'Galeri',
    'nav.contact': 'İletişim',
    'hero.subtitle': 'Premium Gözlük Deneyimi',
    'hero.title1': 'Zarafetin Yeni Tanımı',
    'hero.desc1': 'Dünyanın en seçkin gözlük markalarını keşfedin. Stilinizi yansıtan özel koleksiyonlar.',
    'hero.title2': 'Görüşünüz, Tarzınız',
    'hero.desc2': 'Uzman optisyenlerimizle kişiye özel çözümler. Her detayda mükemmellik.',
    'hero.title3': 'Lüks Koleksiyon',
    'hero.desc3': 'Chanel, Prada, Gucci ve daha fazlası. Turkuvaz Optik Lens\'te sizi bekliyor.',
    'hero.cta': 'Koleksiyonu Keşfet',
    'section.featured': 'Öne Çıkan Kategoriler',
    'section.featured.sub': 'Size özel seçilmiş koleksiyonlar',
    'section.women': 'Kadın Gözlükleri',
    'section.women.sub': 'Zarif ve modern tasarımlar',
    'section.men': 'Erkek Gözlükleri',
    'section.men.sub': 'Klasik ve çağdaş stiller',
    'section.children': 'Çocuk Gözlükleri',
    'section.children.sub': 'Renkli ve dayanıklı modeller',
    'section.sunglasses': 'Güneş Gözlükleri',
    'section.sunglasses.sub': 'UV korumalı premium modeller',
    'section.optical': 'Optik Gözlükler',
    'section.optical.sub': 'Görüşünüz için en iyi çözümler',
    'section.viewall': 'Tümünü Gör',
    'section.discover': 'Keşfet',
    'cta.title': 'Görüşünüz İçin Buradayız',
    'cta.desc': 'Uzman ekibimizle randevu alın, size en uygun gözlüğü birlikte bulalım.',
    'cta.btn': 'İletişime Geçin',
    'instagram.title': 'Bizi Instagram\'da Takip Edin',
    'instagram.sub': '@turkuvaz.optik',
    'instagram.follow': 'Takip Et',
    'footer.desc': 'Ankara\'nın premium optik mağazası. Dünyanın en seçkin gözlük markalarını sizlerle buluşturuyoruz.',
    'footer.links': 'Hızlı Bağlantılar',
    'footer.contact': 'İletişim',
    'footer.follow': 'Bizi Takip Edin',
    'footer.rights': 'Tüm hakları saklıdır.',
    'cat.women': 'Kadın',
    'cat.men': 'Erkek',
    'cat.children': 'Çocuk',
    'cat.sunglasses': 'Güneş Gözlüğü',
    'cat.optical': 'Optik Gözlük',
    'cat.lenses': 'Kontakt Lens',
    'product.view': 'İncele',
    'product.new': 'Yeni',
    'product.bestseller': 'Çok Satan',
    'about.title': 'Hakkımızda',
    'about.sub': 'Görüş dünyanızda güvenilir adresiniz',
    'about.heading': 'Turkuvaz Optik Lens Hikayesi',
    'about.p1': 'Turkuvaz Optik Lens, Ankara\'nın kalbinde premium gözlük deneyimini yeniden tanımlıyor. Yılların deneyimi ve tutkusuyla, dünyanın en prestijli gözlük markalarını müşterilerimizle buluşturuyoruz.',
    'about.p2': 'Her müşterimize kişiye özel hizmet sunmayı ilke edinen ekibimiz, en son teknoloji ile donatılmış mağazamızda göz sağlığınızı ve stilinizi bir arada değerlendiriyor.',
    'about.stat1': 'Yıllık Deneyim',
    'about.stat2': 'Premium Marka',
    'about.stat3': 'Mutlu Müşteri',
    'about.values': 'Değerlerimiz',
    'about.value1.title': 'Kalite',
    'about.value1.desc': 'Sadece orijinal ve sertifikalı ürünler sunuyoruz.',
    'about.value2.title': 'Uzmanlık',
    'about.value2.desc': 'Deneyimli optisyen kadromuzla profesyonel hizmet.',
    'about.value3.title': 'Güven',
    'about.value3.desc': 'Müşteri memnuniyeti bizim önceliğimizdir.',
    'about.value4.title': 'İnovasyon',
    'about.value4.desc': 'En son teknoloji ve trendleri takip ediyoruz.',
    'products.title': 'Ürünler',
    'products.sub': 'Premium gözlük koleksiyonumuz',
    'products.filter.all': 'Tümü',
    'detail.features': 'Özellikler',
    'detail.brand': 'Marka Bilgisi',
    'detail.similar': 'Benzer Ürünler',
    'detail.contact': 'Bilgi Al',
    'brands.title': 'Markalar',
    'brands.sub': 'Dünyanın en prestijli gözlük markaları',
    'brands.desc': 'Turkuvaz Optik Lens olarak, dünyanın en seçkin gözlük markalarının yetkili satıcısıyız. Her marka, benzersiz tasarım anlayışı ve üstün kalite standartlarıyla koleksiyonumuzda yer almaktadır.',
    'services.title': 'Hizmetlerimiz',
    'services.sub': 'Göz sağlığınız için kapsamlı çözümler',
    'services.exam.title': 'Göz Muayenesi',
    'services.exam.desc': 'Son teknoloji cihazlarla kapsamlı göz muayenesi. Uzman optisyenlerimiz tarafından detaylı görme analizi.',
    'services.consult.title': 'Optik Danışmanlık',
    'services.consult.desc': 'Yüz şeklinize ve yaşam tarzınıza uygun çerçeve seçimi için kişiye özel danışmanlık hizmeti.',
    'services.lens.title': 'Kontakt Lens Desteği',
    'services.lens.desc': 'Kontakt lens uygulaması, eğitimi ve takibi. Günlük, aylık ve özel lens çözümleri.',
    'services.adjust.title': 'Çerçeve Ayarı',
    'services.adjust.desc': 'Profesyonel çerçeve ayarlama ve tamir hizmeti. Mükemmel oturuş için hassas ayarlar.',
    'services.after.title': 'Satış Sonrası Destek',
    'services.after.desc': 'Garanti kapsamı, bakım ve onarım hizmetleri. Satın alma sonrası da yanınızdayız.',
    'gallery.title': 'Galeri',
    'gallery.sub': 'Mağazamızdan kareler',
    'contact.title': 'İletişim',
    'contact.sub': 'Bizimle iletişime geçin',
    'contact.address': 'Adres',
    'contact.phone': 'Telefon',
    'contact.email': 'E-posta',
    'contact.hours': 'Çalışma Saatleri',
    'contact.hours.val': 'Pzt - Cmt: 09:00 - 19:00',
    'contact.form.title': 'Bize Yazın',
    'contact.form.name': 'Adınız Soyadınız',
    'contact.form.email': 'E-posta Adresiniz',
    'contact.form.phone': 'Telefon Numaranız',
    'contact.form.subject': 'Konu',
    'contact.form.message': 'Mesajınız',
    'contact.form.send': 'Gönder',
    'contact.form.success': 'Mesajınız başarıyla gönderildi!',
    'contact.form.success.desc': 'En kısa sürede size dönüş yapacağız.',
    'contact.map': 'Konumumuz'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.products': 'Products',
    'nav.brands': 'Brands',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'hero.subtitle': 'Premium Eyewear Experience',
    'hero.title1': 'Redefining Elegance',
    'hero.desc1': 'Discover the world\'s finest eyewear brands. Exclusive collections that reflect your style.',
    'hero.title2': 'Your Vision, Your Style',
    'hero.desc2': 'Personalized solutions with our expert opticians. Excellence in every detail.',
    'hero.title3': 'Luxury Collection',
    'hero.desc3': 'Chanel, Prada, Gucci and more. Waiting for you at Turkuvaz Optik Lens.',
    'hero.cta': 'Explore Collection',
    'section.featured': 'Featured Categories',
    'section.featured.sub': 'Curated collections for you',
    'section.women': 'Women\'s Eyewear',
    'section.women.sub': 'Elegant and modern designs',
    'section.men': 'Men\'s Eyewear',
    'section.men.sub': 'Classic and contemporary styles',
    'section.children': 'Children\'s Eyewear',
    'section.children.sub': 'Colorful and durable models',
    'section.sunglasses': 'Sunglasses',
    'section.sunglasses.sub': 'UV-protected premium models',
    'section.optical': 'Optical Glasses',
    'section.optical.sub': 'The best solutions for your vision',
    'section.viewall': 'View All',
    'section.discover': 'Discover',
    'cta.title': 'We\'re Here For Your Vision',
    'cta.desc': 'Book an appointment with our expert team and find the perfect eyewear together.',
    'cta.btn': 'Get In Touch',
    'instagram.title': 'Follow Us On Instagram',
    'instagram.sub': '@turkuvaz.optik',
    'instagram.follow': 'Follow',
    'footer.desc': 'Ankara\'s premium optical store. Bringing you the world\'s finest eyewear brands.',
    'footer.links': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.follow': 'Follow Us',
    'footer.rights': 'All rights reserved.',
    'cat.women': 'Women',
    'cat.men': 'Men',
    'cat.children': 'Children',
    'cat.sunglasses': 'Sunglasses',
    'cat.optical': 'Optical Glasses',
    'cat.lenses': 'Contact Lenses',
    'product.view': 'View',
    'product.new': 'New',
    'product.bestseller': 'Bestseller',
    'about.title': 'About Us',
    'about.sub': 'Your trusted address in the world of vision',
    'about.heading': 'The Turkuvaz Optik Lens Story',
    'about.p1': 'Turkuvaz Optik Lens redefines the premium eyewear experience in the heart of Ankara. With years of experience and passion, we bring the world\'s most prestigious eyewear brands to our customers.',
    'about.p2': 'Our team, committed to providing personalized service to every customer, evaluates your eye health and style together in our store equipped with the latest technology.',
    'about.stat1': 'Years Experience',
    'about.stat2': 'Premium Brands',
    'about.stat3': 'Happy Customers',
    'about.values': 'Our Values',
    'about.value1.title': 'Quality',
    'about.value1.desc': 'We offer only original and certified products.',
    'about.value2.title': 'Expertise',
    'about.value2.desc': 'Professional service with our experienced opticians.',
    'about.value3.title': 'Trust',
    'about.value3.desc': 'Customer satisfaction is our priority.',
    'about.value4.title': 'Innovation',
    'about.value4.desc': 'We follow the latest technology and trends.',
    'products.title': 'Products',
    'products.sub': 'Our premium eyewear collection',
    'products.filter.all': 'All',
    'detail.features': 'Features',
    'detail.brand': 'Brand Information',
    'detail.similar': 'Similar Products',
    'detail.contact': 'Get Info',
    'brands.title': 'Brands',
    'brands.sub': 'The world\'s most prestigious eyewear brands',
    'brands.desc': 'As Turkuvaz Optik Lens, we are an authorized dealer of the world\'s finest eyewear brands. Each brand in our collection stands out with its unique design philosophy and superior quality standards.',
    'services.title': 'Our Services',
    'services.sub': 'Comprehensive solutions for your eye health',
    'services.exam.title': 'Eye Examination',
    'services.exam.desc': 'Comprehensive eye examination with state-of-the-art equipment. Detailed vision analysis by our expert opticians.',
    'services.consult.title': 'Optical Consultation',
    'services.consult.desc': 'Personalized consultation for frame selection suited to your face shape and lifestyle.',
    'services.lens.title': 'Contact Lens Support',
    'services.lens.desc': 'Contact lens fitting, training and follow-up. Daily, monthly and specialty lens solutions.',
    'services.adjust.title': 'Frame Adjustment',
    'services.adjust.desc': 'Professional frame adjustment and repair service. Precise adjustments for the perfect fit.',
    'services.after.title': 'After Sales Support',
    'services.after.desc': 'Warranty coverage, maintenance and repair services. We\'re with you after your purchase.',
    'gallery.title': 'Gallery',
    'gallery.sub': 'Moments from our store',
    'contact.title': 'Contact',
    'contact.sub': 'Get in touch with us',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Working Hours',
    'contact.hours.val': 'Mon - Sat: 09:00 - 19:00',
    'contact.form.title': 'Write To Us',
    'contact.form.name': 'Your Full Name',
    'contact.form.email': 'Your Email Address',
    'contact.form.phone': 'Your Phone Number',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Your Message',
    'contact.form.send': 'Send',
    'contact.form.success': 'Your message has been sent successfully!',
    'contact.form.success.desc': 'We will get back to you as soon as possible.',
    'contact.map': 'Our Location'
  }
};

let currentLang = localStorage.getItem('turkuvaz-lang') || 'tr';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('turkuvaz-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  if (typeof renderProducts === 'function') {
    const activeTab = document.querySelector('.filter-tab.active');
    renderProducts(activeTab ? activeTab.dataset.filter : 'all');
  }

  if (window.location.pathname.includes('product-detail') && typeof products !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);
    if (product) {
      document.getElementById('productName').textContent = lang === 'tr' ? product.nameTr : product.name;
      document.getElementById('productDesc').textContent = lang === 'tr' ? product.descTr : product.desc;
      document.getElementById('brandInfo').textContent = lang === 'tr' ? product.brandInfoTr : product.brandInfo;
      document.getElementById('breadcrumbProduct').textContent = lang === 'tr' ? product.nameTr : product.name;
      const features = lang === 'tr' ? product.featuresTr : product.features;
      document.getElementById('featuresList').innerHTML = features.map(f =>
        `<li><i class="bi bi-check-circle-fill"></i> ${f}</li>`
      ).join('');
    }
  }
}

function initLanguageSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
  setLanguage(currentLang);
}

function initNavbar() {
  const navbar = document.querySelector('.navbar-custom');
  if (!navbar) return;

  const isInnerPage = navbar.classList.contains('inner-page');

  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else if (!isInnerPage) {
      navbar.classList.remove('scrolled');
    }
  }

  if (isInnerPage) {
    navbar.classList.add('scrolled');
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;

  let current = 0;
  let interval;

  function goTo(index) {
    slides[current].classList.remove('active');
    if (dots[current]) dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAutoplay() {
    interval = setInterval(next, 6000);
  }

  function resetAutoplay() {
    clearInterval(interval);
    startAutoplay();
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); resetAutoplay(); });
  });

  const prevBtn = document.querySelector('.hero-prev');
  const nextBtn = document.querySelector('.hero-next');
  if (prevBtn) prevBtn.addEventListener('click', () => { prev(); resetAutoplay(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { next(); resetAutoplay(); });

  startAutoplay();
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => {
    observer.observe(el);
  });
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.style.display = 'none';
    const success = document.querySelector('.form-success');
    if (success) success.classList.add('show');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initNavbar();
  initHeroSlider();
  initScrollAnimations();
  initContactForm();
});
