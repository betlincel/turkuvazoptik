const products = [
  { id: 1, name: 'Elegance Cat-Eye', nameTr: 'Zarif Kedi Gözü', brand: 'Chanel', category: 'women', price: '12.500 ₺', badge: 'new', image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=600&fit=crop', images: ['https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1509695507497-9030d7f0f015?w=800&h=800&fit=crop'], desc: 'Timeless cat-eye silhouette crafted from premium acetate with gold-tone accents.', descTr: 'Altın tonlu detaylarla premium asetattan üretilmiş zamansız kedi gözü silüeti.', features: ['Premium Acetate Frame', 'UV400 Protection', 'Anti-reflective Lenses', 'Includes Luxury Case'], featuresTr: ['Premium Asetat Çerçeve', 'UV400 Koruma', 'Yansıma Önleyici Camlar', 'Lüks Kılıf Dahil'], brandInfo: 'Chanel eyewear embodies Parisian elegance with iconic designs since 1999.', brandInfoTr: 'Chanel gözlük, 1999\'dan beri ikonik tasarımlarla Paris zarafetini yansıtır.' },
  { id: 2, name: 'Classic Aviator', nameTr: 'Klasik Aviator', brand: 'Ray-Ban', category: 'sunglasses', price: '4.200 ₺', badge: 'bestseller', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=600&fit=crop', images: ['https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1572635196233-14b250f65317?w=800&h=800&fit=crop'], desc: 'Iconic aviator design with polarized lenses and lightweight metal frame.', descTr: 'Polarize camlı ve hafif metal çerçeveli ikonik aviator tasarım.', features: ['Polarized Lenses', 'Lightweight Metal', 'Adjustable Nose Pads', '2-Year Warranty'], featuresTr: ['Polarize Camlar', 'Hafif Metal', 'Ayarlanabilir Burun Pedleri', '2 Yıl Garanti'], brandInfo: 'Ray-Ban has been defining eyewear culture since 1937.', brandInfoTr: 'Ray-Ban, 1937\'den beri gözlük kültürünü tanımlıyor.' },
  { id: 3, name: 'Urban Square', nameTr: 'Şehir Kare', brand: 'Prada', category: 'men', price: '9.800 ₺', badge: 'new', image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=600&fit=crop', images: ['https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1473496163034-7ca85d021e0f?w=800&h=800&fit=crop'], desc: 'Bold square frames with distinctive Prada logo detailing.', descTr: 'Ayırt edici Prada logo detaylı cesur kare çerçeveler.', features: ['Italian Craftsmanship', 'Titanium Hinges', 'Scratch Resistant', 'Premium Packaging'], featuresTr: ['İtalyan İşçiliği', 'Titanyum Menteşeler', 'Çizilmeye Dayanıklı', 'Premium Paketleme'], brandInfo: 'Prada eyewear merges avant-garde design with Italian luxury.', brandInfoTr: 'Prada gözlük, avangart tasarımı İtalyan lüksüyle birleştirir.' },
  { id: 4, name: 'Playful Round', nameTr: 'Eğlenceli Yuvarlak', brand: 'Ray-Ban Junior', category: 'children', price: '2.100 ₺', badge: '', image: 'https://images.unsplash.com/photo-1509695507497-9030d7f0f015?w=600&h=600&fit=crop', images: ['https://images.unsplash.com/photo-1509695507497-9030d7f0f015?w=800&h=800&fit=crop'], desc: 'Durable and flexible frames designed for active children.', descTr: 'Aktif çocuklar için tasarlanmış dayanıklı ve esnek çerçeveler.', features: ['Flexible TR90 Material', 'Impact Resistant', 'Adjustable Temples', 'Fun Color Options'], featuresTr: ['Esnek TR90 Malzeme', 'Darbe Dayanımlı', 'Ayarlanabilir Saplar', 'Eğlenceli Renk Seçenekleri'], brandInfo: 'Ray-Ban Junior offers style and protection for young wearers.', brandInfoTr: 'Ray-Ban Junior, genç kullanıcılar için stil ve koruma sunar.' },
  { id: 5, name: 'Sophisticated Oval', nameTr: 'Sofistike Oval', brand: 'Gucci', category: 'women', price: '11.200 ₺', badge: 'bestseller', image: 'https://images.unsplash.com/photo-1622519407650-3df9883f76e5?w=600&h=600&fit=crop', images: ['https://images.unsplash.com/photo-1622519407650-3df9883f76e5?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&h=800&fit=crop'], desc: 'Elegant oval frames featuring the signature Gucci web detail.', descTr: 'İmza Gucci web detayına sahip zarif oval çerçeveler.', features: ['Handcrafted in Italy', 'Gold-plated Details', 'Gradient Lenses', 'Authenticity Certificate'], featuresTr: ['İtalya\'da El Yapımı', 'Altın Kaplama Detaylar', 'Degrade Camlar', 'Orijinallik Sertifikası'], brandInfo: 'Gucci eyewear represents bold Italian luxury and craftsmanship.', brandInfoTr: 'Gucci gözlük, cesur İtalyan lüksünü ve işçiliğini temsil eder.' },
  { id: 6, name: 'Executive Rectangle', nameTr: 'Yönetici Dikdörtgen', brand: 'Tom Ford', category: 'men', price: '10.500 ₺', badge: '', image: 'https://images.unsplash.com/photo-1473496163034-7ca85d021e0f?w=600&h=600&fit=crop', images: ['https://images.unsplash.com/photo-1473496163034-7ca85d021e0f?w=800&h=800&fit=crop'], desc: 'Sharp rectangular frames for the modern professional.', descTr: 'Modern profesyonel için keskin dikdörtgen çerçeveler.', features: ['Japanese Acetate', 'T-bar Design', 'Blue Light Filter Option', 'Signature T Logo'], featuresTr: ['Japon Asetat', 'T-bar Tasarım', 'Mavi Işık Filtre Seçeneği', 'İmza T Logosu'], brandInfo: 'Tom Ford eyewear defines modern masculine elegance.', brandInfoTr: 'Tom Ford gözlük, modern erkek zarafetini tanımlar.' },
  { id: 7, name: 'Retro Round Optical', nameTr: 'Retro Yuvarlak Optik', brand: 'Oliver Peoples', category: 'optical', price: '6.800 ₺', badge: 'new', image: 'https://images.unsplash.com/photo-1591076482161-42cead1a7b9c?w=600&h=600&fit=crop', images: ['https://images.unsplash.com/photo-1591076482161-42cead1a7b9c?w=800&h=800&fit=crop'], desc: 'Vintage-inspired round optical frames with premium lenses.', descTr: 'Premium camlı vintage ilhamlı yuvarlak optik çerçeveler.', features: ['Custom Optical Lenses', 'Vintage Pin Hinges', 'Hand-polished Acetate', 'Prescription Ready'], featuresTr: ['Özel Optik Camlar', 'Vintage Pim Menteşeler', 'El Cilalı Asetat', 'Reçeteye Hazır'], brandInfo: 'Oliver Peoples crafts understated luxury eyewear since 1987.', brandInfoTr: 'Oliver Peoples, 1987\'den beri sade lüks gözlük üretiyor.' },
  { id: 8, name: 'Sport Shield', nameTr: 'Spor Kalkan', brand: 'Oakley', category: 'sunglasses', price: '5.500 ₺', badge: 'bestseller', image: 'https://images.unsplash.com/photo-1572635196233-14b250f65317?w=600&h=600&fit=crop', images: ['https://images.unsplash.com/photo-1572635196233-14b250f65317?w=800&h=800&fit=crop'], desc: 'High-performance shield sunglasses with Prizm lens technology.', descTr: 'Prizm lens teknolojili yüksek performanslı kalkan güneş gözlüğü.', features: ['Prizm Lens Technology', 'O Matter Frame', 'Unobtainium Grips', '100% UV Protection'], featuresTr: ['Prizm Lens Teknolojisi', 'O Matter Çerçeve', 'Unobtainium Kavrama', '%100 UV Koruma'], brandInfo: 'Oakley leads in sports performance eyewear innovation.', brandInfoTr: 'Oakley, spor performans gözlüğü inovasyonunda öncüdür.' },
  { id: 9, name: 'Daily Comfort Lenses', nameTr: 'Günlük Konfor Lensleri', brand: 'Acuvue', category: 'lenses', price: '850 ₺', badge: '', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=600&fit=crop', images: ['https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=800&fit=crop'], desc: 'Premium daily disposable contact lenses for all-day comfort.', descTr: 'Tüm gün konfor için premium günlük kullanımlık kontakt lensler.', features: ['30-Day Supply', 'UV Blocking', 'Moisture Lock Technology', 'Free Fitting Service'], featuresTr: ['30 Günlük Paket', 'UV Engelleme', 'Nem Kilidi Teknolojisi', 'Ücretsiz Uygulama'], brandInfo: 'Acuvue is the world\'s leading contact lens brand.', brandInfoTr: 'Acuvue, dünyanın önde gelen kontakt lens markasıdır.' },
  { id: 10, name: 'Minimalist Wire', nameTr: 'Minimalist Tel', brand: 'Silhouette', category: 'optical', price: '8.200 ₺', badge: 'new', image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=600&fit=crop', images: ['https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&h=800&fit=crop'], desc: 'Ultra-lightweight rimless design for effortless elegance.', descTr: 'Zahmetsiz zarafet için ultra hafif çerçevesiz tasarım.', features: ['Titanium Construction', 'Rimless Design', '2g Weight', 'Patented Hinge System'], featuresTr: ['Titanyum Yapı', 'Çerçevesiz Tasarım', '2g Ağırlık', 'Patentli Menteşe Sistemi'], brandInfo: 'Silhouette creates the lightest eyewear in the world.', brandInfoTr: 'Silhouette, dünyanın en hafif gözlüklerini üretir.' },
  { id: 11, name: 'Bold Butterfly', nameTr: 'Cesur Kelebek', brand: 'Dior', category: 'women', price: '10.800 ₺', badge: '', image: 'https://images.unsplash.com/photo-1622519407650-3df9883f76e5?w=600&h=600&fit=crop', images: ['https://images.unsplash.com/photo-1622519407650-3df9883f76e5?w=800&h=800&fit=crop'], desc: 'Statement butterfly frames with crystal embellishments.', descTr: 'Kristal süslemeli göz alıcı kelebek çerçeveler.', features: ['Crystal Details', 'Oversized Fit', 'Gradient Lenses', 'Limited Edition'], featuresTr: ['Kristal Detaylar', 'Oversize Kalıp', 'Degrade Camlar', 'Sınırlı Üretim'], brandInfo: 'Dior eyewear captures haute couture elegance.', brandInfoTr: 'Dior gözlük, haute couture zarafetini yakalar.' },
  { id: 12, name: 'Monthly Aqua Lenses', nameTr: 'Aylık Aqua Lensler', brand: 'Air Optix', category: 'lenses', price: '1.200 ₺', badge: 'bestseller', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=600&fit=crop', images: ['https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=800&fit=crop'], desc: 'Breathable monthly lenses with aqua moisture technology.', descTr: 'Aqua nem teknolojili nefes alabilen aylık lensler.', features: ['6-Month Supply', 'High Oxygen Permeability', 'Aqua Moisture', 'Toric Available'], featuresTr: ['6 Aylık Paket', 'Yüksek Oksijen Geçirgenliği', 'Aqua Nem', 'Torik Mevcut'], brandInfo: 'Air Optix provides superior comfort for extended wear.', brandInfoTr: 'Air Optix, uzun süreli kullanım için üstün konfor sağlar.' }
];

function getLang() {
  return localStorage.getItem('turkuvaz-lang') || 'tr';
}

function renderProductCard(product) {
  const lang = getLang();
  const name = lang === 'tr' ? product.nameTr : product.name;
  const viewText = lang === 'tr' ? 'İncele' : 'View';
  let badgeHTML = '';
  if (product.badge === 'new') {
    badgeHTML = `<span class="product-card-badge">${lang === 'tr' ? 'Yeni' : 'New'}</span>`;
  } else if (product.badge === 'bestseller') {
    badgeHTML = `<span class="product-card-badge">${lang === 'tr' ? 'Çok Satan' : 'Bestseller'}</span>`;
  }

  return `
    <div class="col-md-6 col-lg-4 col-xl-3 mb-4 product-item" data-category="${product.category}">
      <div class="product-card fade-in">
        <div class="product-card-image">
          <img src="${product.image}" alt="${name}" loading="lazy">
          ${badgeHTML}
        </div>
        <div class="product-card-body">
          <h4>${name}</h4>
          <span class="product-brand">${product.brand}</span>
          <a href="product-detail.html?id=${product.id}" class="btn-luxury"><span>${viewText}</span></a>
        </div>
      </div>
    </div>
  `;
}

function renderProducts(filter = 'all') {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? products
    : products.filter(p => p.category === filter);

  grid.innerHTML = filtered.map(renderProductCard).join('');

  if (typeof initScrollAnimations === 'function') {
    document.querySelectorAll('#productsGrid .fade-in').forEach(el => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      }, { threshold: 0.1 });
      observer.observe(el);
    });
  }
}

function initProductFilters() {
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderProducts(tab.dataset.filter);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('productsGrid')) return;

  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');
  if (category) {
    const tab = document.querySelector(`.filter-tab[data-filter="${category}"]`);
    if (tab) {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderProducts(category);
    } else {
      renderProducts();
    }
  } else {
    renderProducts();
  }
  initProductFilters();
});
