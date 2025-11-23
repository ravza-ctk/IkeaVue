<template>
  <div class="product-page-container">
      </div>

    <nav class="breadcrumb">
      <ul>
        <li>Ana Sayfa</li>
        <li>Ürünler</li>
        <li>Mobilyalar</li>
        <li>Masalar</li>
        <li>Mutfak Masaları</li>
        <li class="active">HAUGA beyaz 118x74 cm mutfak masası</li>
      </ul>
    </nav>

    <main class="main-content">
      <div class="product-grid">
        
        <section class="left-column">
          <div class="image-grid">
            <div class="image-container" v-for="(image, index) in product.images" :key="index">
              <img :src="image.url" :alt="product.name" class="product-image" />
            </div>
          </div>
          <div class="product-description-area">
             <p>Ahşap kaplama tablalı sağlam ahşap masa, güzellik ve günlük aşınmaya dayanma kabiliyetini artırmak için boyanmış ve cilalanmıştır.</p>
          </div>
        </section>

        <aside class="details-section">
          <div class="sticky-wrapper">
            
            <div class="sidebar-header">
              <h1 class="product-title">HAUGA</h1>
              <p class="product-sub">mutfak masası, beyaz, 118x74 cm, 4 kişilik</p>
              
              <div class="price-container">
                <span class="price">5.499₺</span>
              </div>
            </div>

            <div class="sku-section">
              <span class="sku-badge">005.767.09</span>
              <span class="info-icon-circle">i</span>
            </div>

            <div class="installment-text">
              <p>1.833₺ x 3 ay'a varan vade farksız <a href="#">taksit seçenekleri</a></p>
              <p class="credit-info">Kredili alışveriş imkanı IKEA'da! <a href="#">Detaylı bilgi</a></p>
            </div>

            <div class="sidebar-list">
              
              <div class="list-item has-arrow">
                <div class="list-header">
                  <span class="list-title">Renk</span>
                  <span class="list-value">beyaz</span>
                </div>
                <div class="color-thumbnails">
                  <div class="color-box active">
                    <img src="https://image-ikea.mncdn.com/urunler/190_190/PE951816.jpg" alt="Beyaz" />
                  </div>
                  <div class="color-box">
                    <img src="https://image-ikea.mncdn.com/urunler/190_190/PE951815.jpg" alt="Gri" />
                  </div>
                </div>
                <svg class="arrow-right" viewBox="0 0 24 24" width="24" height="24"><path d="M9 18l6-6-6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>

              <div class="list-item has-arrow clickable">
                <span class="list-title">Diğer Fonksiyonlar</span>
                <svg class="arrow-right" viewBox="0 0 24 24" width="24" height="24"><path d="M9 18l6-6-6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>

              <div class="list-item">
                <span class="list-title">Ölçü</span>
                <span class="list-value-block">118x74 cm</span>
              </div>

              <div class="list-item no-border">
                <span class="list-title">Kişi Sayısı</span>
                <span class="list-value-block">4 kişilik</span>
              </div>

            </div>

            <div class="action-buttons">
              <button class="add-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" style="margin-right:8px"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                Sepete Ekle
              </button>
              
              <button class="fav-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </button>
            </div>

          </div>
        </aside>

      </div>
    </main>
</template>

<script>
export default {
  name: 'ProductPage',
  data() {
    return {
      product: {
        name: 'HAUGA',
        images: [
          { url: 'https://image-ikea.mncdn.com/urunler/500_500/PE951816.jpg' }, 
          { url: 'https://image-ikea.mncdn.com/urunler/500_500/PE960173.jpg' }, 
          { url: 'https://image-ikea.mncdn.com/urunler/500_500/PE960178.jpg' }, 
          { url: 'https://image-ikea.mncdn.com/urunler/500_500/PE934615.jpg' }
        ]
      }
    };
  }
};
</script>

<style scoped>
/* === GENEL SAYFA AYARLARI === */
.product-page-container {
  font-family: 'Noto Sans', 'Helvetica Neue', Arial, sans-serif;
  color: #111;
  background-color: #fff;
  min-height: 100vh;
}
a { text-decoration: none; color: inherit; }
ul { list-style: none; padding: 0; margin: 0; }
button { font-family: inherit; cursor: pointer; }

/* === HEADER (Basit) === */
.site-header { position: sticky; top: 0; background: #fff; border-bottom: 1px solid #dfdfdf; z-index: 1000; padding: 15px 30px; }
.header-inner { max-width: 1400px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
.header-left { display: flex; gap: 15px; align-items: center; }
.ikea-logo { background: #0058a3; color: #ffdb00; font-weight: 900; font-size: 22px; padding: 0 10px; letter-spacing: -1px; }
.search-container { flex: 1; max-width: 600px; display: none; margin: 0 20px; } 
.search-wrapper { position: relative; }
.search-input { width: 100%; background: #f5f5f5; border: none; padding: 12px 12px 12px 45px; border-radius: 99px; }
.search-icon { position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: #555; }
.header-right { display: flex; gap: 15px; align-items: center; font-size: 13px; font-weight: 700; }
.icon-btn { background: none; border: none; position: relative; }
.badge { position: absolute; top: -5px; right: -5px; background: #0058a3; color: white; width: 18px; height: 18px; border-radius: 50%; font-size: 10px; display: flex; align-items: center; justify-content: center; }

/* === BREADCRUMB === */
.breadcrumb { padding: 15px 30px; font-size: 12px; color: #111; max-width: 1400px; margin: 0 auto; }
.breadcrumb ul { display: flex; gap: 5px; flex-wrap: wrap; }
.breadcrumb li::after { content: '/'; margin-left: 5px; color: #111; }
.breadcrumb li:last-child::after { content: ''; }
.breadcrumb li.active { color: #111;  }

/* === GRID LAYOUT === */
.main-content { max-width: 1400px; margin: 0 auto; padding: 0 30px 80px 30px; }
.product-grid { display: grid; grid-template-columns: 1fr; gap: 60px; }

/* === SOL KOLON === */
.left-column { display: flex; flex-direction: column; gap: 40px; }
.image-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
.image-container { background: #f5f5f5; aspect-ratio: 4/3; overflow: hidden; }
.product-image { width: 100%; height: 100%; object-fit: cover; mix-blend-mode: multiply; }
.product-description-area { max-width: 800px; font-size: 16px; line-height: 1.6; color: black; }

/* === SAĞ SIDEBAR (ÖZEL AYARLAR) === */
.details-section { position: relative; }
.sticky-wrapper { position: relative; }

/* Başlık */
.product-title { font-size: 20px; font-weight: 800; text-transform: uppercase; margin: 0; line-height: 1.2;color: #111; }
.product-sub { font-size: 14px; color: #484848; margin-top: 5px; margin-bottom: 15px; }
.price { font-size: 28px; font-weight: 800; display: block; margin-bottom: 15px; color: #111;}

/* SKU Badge */
.sku-section { display: flex; align-items: center; gap: 8px; margin-bottom: 20px; }
.sku-badge { background: black; color: white; font-size: 11px; font-weight: 700; padding: 4px 10px; letter-spacing: 0.5px; }
.info-icon-circle {
  width: 16px; height: 16px; border: 1px solid #999; border-radius: 50%;
  font-size: 10px; display: flex; align-items: center; justify-content: center; color: #666; font-family: serif; font-weight: bold;
}

/* Taksit Metni */
.installment-text { font-size: 12px; color: #484848; line-height: 1.5; margin-bottom: 30px; }
.installment-text a { color: #0058a3; text-decoration: underline; font-weight: 600; }
.credit-info { margin-top: 5px; }

/* Liste Yapısı */
.sidebar-list { border-top: 1px solid #dfdfdf; }
.list-item { 
  padding: 20px 0; 
  border-bottom: 1px solid #dfdfdf; 
  position: relative;
}
.list-item.clickable { cursor: pointer; }
.list-item.clickable:hover .list-title { text-decoration: underline; }
.no-border { border-bottom: none; }

.list-header { margin-bottom: 10px; font-size: 14px; }
.list-title { font-weight: 700; font-size: 14px; color: #111; }
.list-value { margin-left: 5px; font-weight: 400; color: #111; }
.list-value-block { display: block; margin-top: 5px; font-size: 14px; color: #484848; }

/* Renk Seçimi Thumbnails */
.color-thumbnails { display: flex; gap: 10px; }
.color-box { width: 60px; height: 40px; border: 1px solid #dfdfdf; padding: 2px; cursor: pointer; }
.color-box.active { border: 2px solid black; }
.color-box img { width: 100%; height: 100%; object-fit: cover; }

/* Ok işareti */
.arrow-right { position: absolute; right: 0; top: 20px; color: #111; width: 18px; }
.has-arrow .arrow-right { top: 35px; } /* Renk kutusunda biraz daha aşağıda */
.has-arrow.clickable .arrow-right { top: 20px; }

/* Alt Butonlar */
.action-buttons { display: flex; gap: 15px; margin-top: 10px; }
.add-btn {
  flex: 1;
  background-color: #0058a3;
  color: white;
  border: none;
  border-radius: 99px;
  height: 56px;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}
.add-btn:hover { background-color: #004f93; }

.fav-btn {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid #dfdfdf;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #111;
  transition: border-color 0.2s;
}
.fav-btn:hover { border-color: #111; }

/* Responsive */
@media (min-width: 768px) {
  .search-container { display: block; }
  .product-grid { grid-template-columns: 2fr 1fr; }
  .sticky-wrapper { position: sticky; top: 100px; }
  /* Masaüstünde ok işareti hizalamaları */
  .list-item .arrow-right { top: 22px; }
}
@media (max-width: 767px) {
  .image-grid { grid-template-columns: 1fr; }
  .action-buttons { position: fixed; bottom: 0; left: 0; width: 100%; padding: 15px; background: white; box-shadow: 0 -2px 10px rgba(0,0,0,0.1); z-index: 999; margin: 0; }
  .details-section { padding-bottom: 80px; }
}
</style>