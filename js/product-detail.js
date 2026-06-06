document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));
  const lang = localStorage.getItem('turkuvaz-lang') || 'tr';

  const product = products.find(p => p.id === productId);
  if (!product) {
    window.location.href = 'products.html';
    return;
  }

  const name = lang === 'tr' ? product.nameTr : product.name;
  const desc = lang === 'tr' ? product.descTr : product.desc;
  const features = lang === 'tr' ? product.featuresTr : product.features;
  const brandInfo = lang === 'tr' ? product.brandInfoTr : product.brandInfo;

  document.title = `${name} — Turkuvaz Optik Lens`;
  document.getElementById('productName').textContent = name;
  document.getElementById('productBrand').textContent = product.brand;
  document.getElementById('productPrice').textContent = product.price;
  document.getElementById('productDesc').textContent = desc;
  document.getElementById('brandInfo').textContent = brandInfo;
  document.getElementById('breadcrumbProduct').textContent = name;

  const mainImage = document.getElementById('mainImage');
  mainImage.src = product.images[0];
  mainImage.alt = name;

  const thumbsContainer = document.getElementById('galleryThumbs');
  thumbsContainer.innerHTML = product.images.map((img, i) => `
    <div class="thumb ${i === 0 ? 'active' : ''}" data-index="${i}">
      <img src="${img}" alt="${name} ${i + 1}">
    </div>
  `).join('');

  thumbsContainer.querySelectorAll('.thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbsContainer.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      mainImage.src = product.images[thumb.dataset.index];
    });
  });

  const featuresList = document.getElementById('featuresList');
  featuresList.innerHTML = features.map(f => `
    <li><i class="bi bi-check-circle-fill"></i> ${f}</li>
  `).join('');

  const similar = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const similarGrid = document.getElementById('similarProducts');
  if (similarGrid) {
    similarGrid.innerHTML = similar.map(p => {
      const pName = lang === 'tr' ? p.nameTr : p.name;
      const viewText = lang === 'tr' ? 'İncele' : 'View';
      return `
        <div class="col-md-6 col-lg-3 mb-4">
          <div class="product-card">
            <div class="product-card-image">
              <img src="${p.image}" alt="${pName}" loading="lazy">
            </div>
            <div class="product-card-body">
              <h4>${pName}</h4>
              <span class="product-brand">${p.brand}</span>
              <a href="product-detail.html?id=${p.id}" class="btn-luxury"><span>${viewText}</span></a>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
});
