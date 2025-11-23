<template>
  <div class="product-page-container">
    
    <header class="site-header">
      <div class="header-inner">
        <div class="logo-area">
          <div class="hamburger-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </div>
          <div class="ikea-logo">IKEA</div>
        </div>
        <div class="search-bar">
          <span class="search-icon">🔍</span>
          <input type="text" placeholder="Ne aramıştınız?" class="search-input" />
        </div>
        <div class="user-icons">
          <span>Mağaza Seçiniz</span>
          <span>Hej! Giriş</span>
          <span class="cart-icon">🛒 <span class="badge">1</span></span>
        </div>
      </div>
    </header>

    <div class="breadcrumb">
      <span>Ana Sayfa</span> / <span>Ürünler</span> / <span>Masalar</span> / <span>Mutfak Masaları</span> / <strong>HAUGA</strong>
    </div>

    <div class="content-wrapper">
      
      <div class="gallery-section">
        <div class="main-image-box">
          <img 
            src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1000" 
            alt="HAUGA Masa" 
            class="product-img"
          />
        </div>

        <div class="thumbnail-grid">
          <div class="thumb-box dashed">
            <span>Ölçü Görseli<br>118x74 cm</span>
          </div>
          <div class="thumb-box grey-bg"></div>
        </div>

        <div class="description-text">
          <p>{{ product.description }}</p>
          <p class="mt-20">Yemek takımları, peçeteler, mumlar ve sadece iki adım ötenizde ihtiyaç duyabileceğiniz her şeyle koordineli bir görünüm.</p>
        </div>
      </div>

      <div class="details-section">
        <div class="sticky-content">
          
          <div class="product-header">
            <div class="title-block">
              <h1 class="product-name">{{ product.name }}</h1>
              <p class="product-sub">{{ product.category }}, {{ product.color }}, {{ product.dimensions }}</p>
            </div>
            <div class="price-block">
              <span class="price-val">{{ product.price }}</span>
              <span class="currency">₺</span>
            </div>
          </div>

          <div class="product-code">
            {{ product.code }} <span class="info-i">i</span>
          </div>

          <div class="installment-area">
            <p>{{ product.installmentText }}</p>
            <a href="#">Kredili alışveriş imkanı IKEA'da! Detaylı bilgi</a>
          </div>

          <div class="color-selection">
            <div class="label-row">
              <strong>Renk:</strong> <span>{{ selectedColor }}</span>
            </div>
            <div class="colors-row">
              <div 
                v-for="color in colors" 
                :key="color.name"
                class="color-option"
                :class="{ 'active': selectedColor === color.name }"
                @click="selectedColor = color.name"
              >
                <div class="swatch" :style="{ backgroundColor: color.hex }"></div>
              </div>
            </div>
          </div>

          <button class="add-cart-btn" @click="handleAddToCart">
            Sepete Ekle
          </button>

          <div class="accordion-list">
            <div class="accordion-item">
              <div class="acc-header" @click="toggleSection('functions')">
                <strong>Diğer Fonksiyonlar</strong>
                <span class="arrow" :class="{ 'rotated': sections.functions }">❯</span>
              </div>
              <div class="acc-content" v-if="sections.functions">
                <p>Masa yüzeyi ahşap kaplamadır.</p>
              </div>
            </div>

            <div class="accordion-item">
              <div class="acc-header" @click="toggleSection('dimensions')">
                <strong>Ölçü</strong>
                <span class="arrow" :class="{ 'rotated': sections.dimensions }">❯</span>
              </div>
              <div class="acc-content" v-if="sections.dimensions">
                <div class="dim-row"><span>Uzunluk:</span> <span>118 cm</span></div>
                <div class="dim-row"><span>Genişlik:</span> <span>74 cm</span></div>
                <div class="dim-row"><span>Yükseklik:</span> <span>74 cm</span></div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'UrunDetay',
  data() {
    return {
      selectedColor: 'beyaz',
      product: {
        name: 'HAUGA',
        category: 'Mutfak masası',
        color: 'Beyaz',
        dimensions: '118x74 cm',
        price: '5.499',
        code: '005.767.09',
        installmentText: "1.833₺ x 3 ay'a varan vade farksız taksit seçenekleri",
        description: "Ahşap kaplama tablalı sağlam ahşap masa, güzellik ve günlük aşınmaya dayanma kabiliyetini artırmak için boyanmış ve cilalanmıştır."
      },
      colors: [
        { name: 'beyaz', hex: '#f5f5f5' },
        { name: 'gri', hex: '#808080' }
      ],
      sections: {
        functions: false,
        dimensions: true
      }
    };
  },
  methods: {
    handleAddToCart() {
      alert(this.product.name + " (" + this.selectedColor + ") sepete eklendi!");
    },
    toggleSection(key) {
      this.sections[key] = !this.sections[key];
    }
  }
};
</script>

<style scoped>
.product-page-container {
  font-family: 'Noto Sans', Arial, sans-serif;
  color: #111;
  background-color: white;
  min-height: 100vh;
}

a { text-decoration: none; color: inherit; }

.site-header {
  border-bottom: 1px solid #dfdfdf;
  padding: 15px 30px;
  position: sticky;
  top: 0;
  background: white;
  z-index: 100;
}
.header-inner {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo-area { display: flex; align-items: center; gap: 15px; }
.ikea-logo {
  background: #0058a3;
  color: #ffdb00;
  font-weight: 900;
  padding: 5px 15px;
  font-size: 20px;
  letter-spacing: -1px;
}
.search-bar {
  flex: 1;
  max-width: 500px;
  margin: 0 20px;
  position: relative;
  display: none; 
}
.search-input {
  width: 100%;
  background: #f5f5f5;
  border: none;
  padding: 12px 12px 12px 40px;
  border-radius: 99px;
  font-size: 14px;
}
.search-icon { position: absolute; left: 15px; top: 10px; font-size: 14px; opacity: 0.5; }
.user-icons { display: flex; gap: 15px; font-size: 13px; font-weight: bold; align-items: center; }
.cart-icon { position: relative; font-size: 18px; }
.badge { 
  position: absolute; top: -5px; right: -5px; 
  background: #0058a3; color: white; 
  font-size: 10px; width: 16px; height: 16px; 
  border-radius: 50%; display: flex; align-items: center; justify-content: center; 
}

.breadcrumb {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 30px;
  font-size: 12px;
  color: #666;
}

.content-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px 60px 30px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 60px;
}

.gallery-section {
  flex: 2;
}

.main-image-box {
  background: #f5f5f5;
  width: 100%;
  aspect-ratio: 4/3;
  margin-bottom: 15px;
  cursor: pointer;
}
.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: multiply; 
}

.thumbnail-grid {
  display: flex;
  gap: 15px;
}
.thumb-box {
  width: 50%;
  aspect-ratio: 1;
  background: #f5f5f5;
}
.dashed {
  border: 2px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 12px;
  color: #888;
}

.description-text {
  margin-top: 40px;
  font-size: 14px;
  line-height: 1.6;
  color: #484848;
  max-width: 80%;
}
.mt-20 { margin-top: 20px; }

.details-section {
  flex: 1; 
  max-width: 400px;
}

.sticky-content {
  position: sticky;
  top: 100px;
}

.product-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
}

.product-name {
  font-size: 24px;
  font-weight: 800;
  margin: 0;
  text-transform: uppercase;
}
.product-sub {
  font-size: 14px;
  color: #666;
  margin-top: 5px;
}

.price-block { text-align: right; }
.price-val { font-size: 32px; font-weight: 800; }
.currency { font-size: 16px; font-weight: 800; vertical-align: top; margin-left: 2px; }

.product-code {
  background: black;
  color: white;
  display: inline-flex;
  align-items: center;
  font-size: 11px;
  font-weight: bold;
  padding: 4px 8px;
  letter-spacing: 1px;
}
.info-i {
  border: 1px solid #666;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  margin-left: 5px;
  color: #ccc;
}

.installment-area {
  margin-top: 20px;
  font-size: 12px;
  color: #666;
  padding-bottom: 15px;
  border-bottom: 1px solid #e5e5e5;
}
.installment-area a { text-decoration: underline; color: #0058a3; }

.color-selection { margin: 20px 0; }
.label-row { font-size: 14px; margin-bottom: 10px; display: flex; justify-content: space-between;}
.label-row span { text-transform: capitalize; color: #666; }

.colors-row { display: flex; gap: 10px; }
.color-option {
  width: 50px;
  height: 35px;
  border: 1px solid #ccc;
  padding: 2px;
  cursor: pointer;
}
.color-option.active { border: 2px solid black; }
.swatch { width: 100%; height: 100%; }

.add-cart-btn {
  background-color: #0058a3; 
  color: white;
  border: none;
  width: 100%;
  padding: 18px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 999px; 
  cursor: pointer;
  transition: background 0.3s;
}
.add-cart-btn:hover { background-color: #004f93; }

.accordion-list { margin-top: 30px; border-top: 1px solid #e5e5e5; }
.accordion-item { border-bottom: 1px solid #e5e5e5; }

.acc-header {
  padding: 20px 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}
.arrow { font-size: 12px; transition: transform 0.3s; }
.arrow.rotated { transform: rotate(90deg); }

.acc-content { padding-bottom: 20px; font-size: 14px; color: #484848; }
.dim-row { display: flex; justify-content: space-between; padding: 2px 0; }

@media (max-width: 768px) {
  .content-wrapper { flex-direction: column; gap: 30px; }
  .gallery-section, .details-section { max-width: 100%; flex: auto; }
  .search-bar { display: block; width: 100%; margin: 10px 0; max-width: 100%; }
  .header-inner { flex-wrap: wrap; }
  .user-icons { display: none; }
}
</style>