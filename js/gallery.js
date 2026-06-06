const galleryImages = [
  'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=800&fit=crop',
  'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1509695507497-9030d7f0f015?w=600&h=900&fit=crop',
  'https://images.unsplash.com/photo-1622519407650-3df9883f76e5?w=600&h=500&fit=crop',
  'https://images.unsplash.com/photo-1473496163034-7ca85d021e0f?w=600&h=700&fit=crop',
  'https://images.unsplash.com/photo-1591076482161-42cead1a7b9c?w=600&h=450&fit=crop',
  'https://images.unsplash.com/photo-1572635196233-14b250f65317?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=750&fit=crop',
  'https://images.unsplash.com/photo-1556306535-38febf6782e7?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=650&fit=crop',
  'https://images.unsplash.com/photo-1494867462310-b59d4a4af2ef?w=600&h=550&fit=crop'
];

let currentLightboxIndex = 0;

function renderGallery() {
  const gallery = document.getElementById('masonryGallery');
  if (!gallery) return;

  gallery.innerHTML = galleryImages.map((img, i) => `
    <div class="masonry-item fade-in" data-index="${i}">
      <img src="${img}" alt="Turkuvaz Optik Lens Gallery ${i + 1}" loading="lazy">
      <div class="gallery-overlay"><i class="bi bi-zoom-in"></i></div>
    </div>
  `).join('');

  gallery.querySelectorAll('.masonry-item').forEach(item => {
    item.addEventListener('click', () => openLightbox(parseInt(item.dataset.index)));
  });
}

function openLightbox(index) {
  currentLightboxIndex = index;
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  lightboxImg.src = galleryImages[index];
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

function navigateLightbox(direction) {
  currentLightboxIndex = (currentLightboxIndex + direction + galleryImages.length) % galleryImages.length;
  document.getElementById('lightboxImg').src = galleryImages[currentLightboxIndex];
}

document.addEventListener('DOMContentLoaded', () => {
  renderGallery();

  document.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
  document.querySelector('.lightbox-prev')?.addEventListener('click', () => navigateLightbox(-1));
  document.querySelector('.lightbox-next')?.addEventListener('click', () => navigateLightbox(1));

  document.getElementById('lightbox')?.addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox?.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
});
