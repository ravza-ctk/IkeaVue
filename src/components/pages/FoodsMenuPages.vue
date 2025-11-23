<template>
  <div class="restaurant-page-container">
  

    <main class="main-content">
      
      <section class="intro-section">
        <h1 class="page-title">İsveç Restoranı</h1>
        <p class="intro-text">
          Alışverişinizi tok karnına rahatça yapın. IKEA Restoranında İsveç ve Türk mutfağının sağlıklı ve kaliteli lezzetlerinden oluşan düşük fiyatlı menüler sizi bekliyor. İsveç köftesinden, kahvaltı tabağına, simit, bal kaymak, fırında sütlaç ve baklava gibi lokal lezzetlere kadar damak zevkinize uygun yiyecekleri burada bulabilirsiniz.
        </p>
      </section>

      <section class="categories-grid">
        <div v-for="(cat, index) in categories" :key="index" class="category-item">
          <div class="cat-image-wrapper">
             <img :src="cat.image" :alt="cat.title" class="cat-image" />
          </div>
          <h3 class="cat-title">{{ cat.title }}</h3>
        </div>
      </section>

      <section class="products-section">
        <h2 class="section-title">Sıcak Tabaklar</h2>
        
        <div class="products-grid">
          <div v-for="(product, index) in products" :key="index" class="product-card">
            
            <div class="badges-container">
              <div v-if="product.badgeType === 'msc'" class="badge-msc">
                <svg viewBox="0 0 24 24" fill="white" width="24" height="24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                <span>MSC</span>
              </div>
              
              <div v-if="product.badgeType === 'local'" class="badge-box red">
                Lokal
              </div>

              <div v-if="product.badgeType === 'new'" class="badge-box orange">
                Yeni
              </div>
            </div>

            <div class="product-image-wrapper">
              <img :src="product.image" :alt="product.name" class="product-image" />
            </div>

            <div class="product-info">
              <h3 class="product-name">{{ product.name }}</h3>
              <div class="product-price">{{ product.price }}₺</div>
            </div>

          </div>
        </div>

      </section>

    </main>
  </div>
</template>

<script>
export default {
  name: 'RestaurantPage',
  data() {
    return {
      // Kategori Verileri
      categories: [
        { title: 'SICAK TABAKLAR', image: 'https://image-ikea.mncdn.com/ifb/isvec-dana-kofte-ekmek-sekizli-2.jpg' },
        { title: 'KAHVALTI MENÜSÜ', image: 'https://image-ikea.mncdn.com/ifb/kahvalti-tabagi-3.jpg' },
        { title: 'TATLILAR', image: 'https://image-ikea.mncdn.com/ikea-restoran/tatlilar-kategori.jpg' },
        { title: 'SOĞUK TABAKLAR', image: 'https://image-ikea.mncdn.com/ifb/akdeniz-salata-2.jpg' },
        { title: 'TAMAMLAYICI ÜRÜNLER', image: 'https://image-ikea.mncdn.com/ifb/garniturlu-pilav.jpg' },
        { title: 'SOĞUK İÇECEKLER', image: 'https://image-ikea.mncdn.com/ifb/restoran-sinirsiz-soguk-icecek.jpg' },
        { title: 'ÇOCUK MENÜLERİ', image: 'https://image-ikea.mncdn.com/ifb/cocuk-menusu-somon-tabagi-4.jpg' },
        { title: 'SICAK İÇECEKLER', image: 'https://image-ikea.mncdn.com/ifb/restoran-sinirsiz-sicak-icecek.jpg' },
      ],

      products: [
        { 
          name: 'KARİDES GÜVEÇ', 
          price: '240', 
          badgeType: 'msc', 
          image: 'https://image-ikea.mncdn.com/ifb/karides-guvec.jpg' 
        },
        { 
          name: "TAVUK KANAT 8'Lİ", 
          price: '260', 
          badgeType: null,
          image: 'https://image-ikea.mncdn.com/ifb/tavuk-kanat-besli-4.jpg' 
        },
        { 
          name: 'MANTARLI DANA ET SOTE', 
          price: '250', 
          badgeType: null,
          image: 'https://image-ikea.mncdn.com/ifb/mantarli-et-sote.jpg' 
        },
        { 
          name: "İSVEÇ DANA KÖFTE 12'Lİ", 
          price: '275', 
          badgeType: null,
          image: 'https://image-ikea.mncdn.com/ifb/isvec-dana-kofte-ekmek-on-ikili-2.jpg' 
        },
        { 
          name: 'DANA BİFTEK TABAĞI', 
          price: '360', 
          badgeType: 'local', // Kırmızı Kutu
          image: 'https://image-ikea.mncdn.com/ifb/dana-biftek-tabagi-2.jpg' 
        },
        { 
          name: 'IZGARA SOMON TABAĞI', 
          price: '350', 
          badgeType: 'msc', 
          image: 'https://image-ikea.mncdn.com/ifb/izgara-somon-2.jpg' 
        },
        { 
          name: 'FISH&CHIPS', 
          price: '290', 
          badgeType: 'new', // Turuncu "Yeni"
          image: 'https://image-ikea.mncdn.com/ifb/fish-and-chips.jpg' 
        },
      ]
    };
  }
};
</script>

<style scoped>

.restaurant-page-container {
  font-family: 'Noto Sans', Arial, sans-serif;
  color: #111;
  background-color: #fff;
  min-height: 100vh;
}
a { text-decoration: none; color: inherit; }
button { font-family: inherit; cursor: pointer; }


.site-header { position: sticky; top: 0; background: #fff; border-bottom: 1px solid #dfdfdf; z-index: 1000; padding: 15px 30px; }
.header-inner { max-width: 1400px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
.header-left { display: flex; gap: 15px; align-items: center; }
.ikea-logo { background: #0058a3; color: #ffdb00; font-weight: 900; font-size: 22px; padding: 0 10px; letter-spacing: -1px; }
.search-container { flex: 1; max-width: 600px; display: none; margin: 0 20px; } 
.search-wrapper { position: relative; }
.search-input { width: 100%; background: #f5f5f5; border: none; padding: 12px 12px 12px 45px; border-radius: 99px; font-size: 14px; }
.search-icon { position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: #555; }
.header-right { display: flex; gap: 15px; align-items: center; font-size: 13px; font-weight: 700; }
.icon-btn { background: none; border: none; position: relative; }
.badge { position: absolute; top: -5px; right: -5px; background: #0058a3; color: white; width: 18px; height: 18px; border-radius: 50%; font-size: 10px; display: flex; align-items: center; justify-content: center; }

.main-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 30px;
}

.intro-section { max-width: 1000px; margin-bottom: 60px; }
.page-title { font-size: 36px; font-weight: 700; margin-bottom: 20px; }
.intro-text { font-size: 14px; line-height: 1.6; color: #484848; }

.categories-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 40px;
  margin-bottom: 80px;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 60px;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
}

.cat-image-wrapper {
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  margin-bottom: 20px;
}

.cat-image {
  width: 100%;
  height: 100%;
  object-fit: contain; 
  transition: transform 0.3s;
}
.category-item:hover .cat-image { transform: scale(1.05); }

.cat-title {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: #111;
}

.products-section { margin-bottom: 60px; }
.section-title { font-size: 24px; font-weight: 700; margin-bottom: 40px; color: #111; }

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 60px 30px;
}

.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
}

.badges-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.badge-box {
  color: white;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 700;
}
.badge-box.red { background-color: #cc0008; } 
.badge-box.orange { background-color: #ef7c00; } 

.badge-msc {
  background-color: #0058a3; 
  width: 50px;
  height: 30px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
}
.badge-msc svg { width: 100%; height: 100%; }


.product-image-wrapper {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%; 
  overflow: hidden;
  margin-bottom: 20px;
}
.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-info { text-align: left; }
.product-name {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 5px;
}
.product-price {
  font-size: 24px;
  font-weight: 700;
  color: #111;
}

@media (max-width: 1024px) {
  .categories-grid, .products-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .categories-grid, .products-grid { grid-template-columns: 1fr; gap: 40px; }
  .search-container { display: block; width: 100%; margin: 10px 0; max-width: 100%; }
  .header-inner { flex-wrap: wrap; }
  .header-right { display: none; }
  .page-title { font-size: 28px; }
}
@media (min-width: 769px) { .search-container { display: block; } }
</style>