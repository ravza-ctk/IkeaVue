<template>
  <div class="product-page-container">
    <div v-if="loading" class="loading-state">Yükleniyor...</div>
    <div v-else-if="!product" class="error-state">Ürün bulunamadı.</div>
    <template v-else>
      <nav class="breadcrumb">
        <ul>
          <li><NuxtLink to="/">Ana Sayfa</NuxtLink></li>
          <li><NuxtLink to="/products">Ürünler</NuxtLink></li>
          <li>{{ product.categoryId }}</li>
          <li class="active">{{ product.name }}</li>
        </ul>
      </nav>

      <main class="main-content">
        <div class="product-grid">
          
          <section class="left-column">
            <div class="image-grid">
              <!-- Using single image for now as multiple images aren't standard in our data yet, 
                   but structure supports iterating if we add an images array later -->
              <div class="image-container" v-if="product.image || (product.images && product.images.length)">
                 <template v-if="product.images && product.images.length">
                    <div v-for="(img, index) in product.images" :key="index" class="image-wrapper">
                        <img :src="img" :alt="product.name" class="product-image" />
                    </div>
                 </template>
                 <template v-else>
                    <img :src="product.image" :alt="product.name" class="product-image" />
                 </template>
              </div>
            </div>
            <div class="product-description-area">
               <p>{{ product.description }}</p>
               
               <div class="product-code-section" v-if="product.sku">
                  <h3>Ürün Kodu</h3>
                  <span class="code-badge">{{ product.sku }}</span>
               </div>
               
               <div class="product-information-section">
                  <h2 class="global-modal-btn product-information">
                      {{ product.name }} Ürün Bilgileri
                      <svg focusable="false" viewBox="0 0 24 24" class="range-revamp-svg-icon" aria-hidden="true">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="m20.0008 12.0001-8-8.001-1.4143 1.414L16.1727 11H4v2h12.1723l-5.5868 5.5866 1.4141 1.4142 8.0012-8.0007z"></path>
                      </svg>
                  </h2>
                  
                  <h2 class="global-modal-btn">
                      Ebatlar ve Paket Ölçüleri
                      <svg focusable="false" viewBox="0 0 24 24" class="range-revamp-svg-icon" aria-hidden="true">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="m20.0008 12.0001-8-8.001-1.4143 1.414L16.1727 11H4v2h12.1723l-5.5868 5.5866 1.4141 1.4142 8.0012-8.0007z"></path>
                      </svg>
                  </h2>
               </div>
            </div>
          </section>

          <aside class="details-section">
            <div class="sticky-wrapper">
              
              <div class="sidebar-header">
                <div class="title-group">
                  <h1 class="product-title">{{ product.name }}</h1>
                  <p class="product-sub">{{ product.categoryId }}</p>
                </div>
                
                <div class="price-container">
                  <span class="price">{{ product.price }}<span class="currency">₺</span></span>
                </div>
              </div>

              <div class="sku-section" v-if="product.sku">
                <span class="sku-badge">{{ product.sku }}</span>
              </div>

              <div class="installment-text">
                <p>{{ Math.floor(product.price / 3).toLocaleString() }}₺ x 3 ay'a varan vade farksız <a href="#">taksit seçenekleri</a></p>
                <p class="credit-info">Kredili alışveriş imkanı IKEA'da! <a href="#">Detaylı bilgi</a></p>
              </div>

              <div class="sidebar-list">
                
                <div class="list-item has-arrow" v-if="product.color">
                  <div class="list-header">
                    <span class="list-title">Renk</span>
                    <span class="list-value">{{ product.color }}</span>
                  </div>
                  <!-- Color thumbnails could be dynamic but static for layout demo -->
                  <div class="color-thumbnails">
                    <div class="color-box active">
                       <!-- Just showing the product image as a swatch for context -->
                       <img :src="product.image" :alt="product.color" />
                    </div>
                  </div>
                  <svg class="arrow-right" viewBox="0 0 24 24" width="24" height="24"><path d="M9 18l6-6-6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>

                <div class="list-item">
                  <span class="list-title">Ölçü</span>
                  <span class="list-value-block" v-if="product.dimensions">
                      <span v-if="product.dimensions.width">{{ product.dimensions.width }}</span>
                      <span v-if="product.dimensions.width && (product.dimensions.depth || product.dimensions.height)">x</span>
                      <span v-if="product.dimensions.depth">{{ product.dimensions.depth }}</span>
                      <span v-if="product.dimensions.depth && product.dimensions.height">x</span>
                      <span v-if="product.dimensions.height">{{ product.dimensions.height }}</span>
                      {{ product.dimensions.unit || 'cm' }}
                  </span>
                  <span class="list-value-block" v-else>Standart</span>
                </div>
                
                <a class="product-check-stock product-check-stock-js global-modal-btn" href="javascript:;">
                    <svg focusable="false" viewBox="0 0 24 24" class="range-revamp-svg-icon range-revamp-stockcheck__icon" aria-hidden="true">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22 20V4H2v16h20zM20 6H4v12h3v-8h10v8h3V6zm-9 6H9v6h2v-6zm2 6h2v-6h-2v6z"></path>
                    </svg>
                    <span>Mağaza stok durumunu kontrol et</span>
                </a>

              </div>

              <div class="action-buttons">
                <button class="add-btn" @click="addToCart">
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
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '~/stores/useProductStore';
import { useCartStore } from '~/stores/useCartStore';
import { useRoute } from 'vue-router';
import { onMounted, computed, ref } from 'vue';

const route = useRoute();
const productStore = useProductStore();
const cartStore = useCartStore();
const loading = ref(true);

const product = computed(() => {
    return productStore.products.find(p => p.id === route.params.id);
});

onMounted(async () => {
    if (productStore.products.length === 0) {
        await productStore.fetchProducts();
    }
    loading.value = false;
});

const addToCart = async () => {
    if (product.value) {
        try {
            await cartStore.addToCart(product.value);
            alert('Ürün sepete eklendi!');
        } catch (error: any) {
            console.error(error);
            if (error.code === 'permission-denied' || error.message.includes('Missing or insufficient permissions')) {
                alert('HATA: Veritabanı yazma izni yok. Lütfen Firebase Console -> Firestore Database -> Rules kısmından yazma iznini açın (allow read, write: if true; yapın).');
            } else {
                alert('Sepete eklenirken hata oluştu: ' + error.message);
            }
        }
    }
};
</script>

<style scoped>
.product-page-container {
  font-family: 'Noto Sans', 'Helvetica Neue', Arial, sans-serif;
  color: #111;
  background-color: #fff;
  min-height: 100vh;
  padding-top: 20px;
}
a { text-decoration: none; color: inherit; }
ul { list-style: none; padding: 0; margin: 0; }
button { font-family: inherit; cursor: pointer; }

.loading-state, .error-state {
    text-align: center;
    padding: 50px;
    font-size: 1.2rem;
}

.breadcrumb { padding: 0 30px 15px; font-size: 12px; color: #111; max-width: 1400px; margin: 0 auto; }
.breadcrumb ul { display: flex; gap: 5px; flex-wrap: wrap; }
.breadcrumb li::after { content: '/'; margin-left: 5px; color: #111; }
.breadcrumb li:last-child::after { content: ''; }

.breadcrumb li:not(.active) {
  text-decoration: underline;
  cursor: pointer;
}
.breadcrumb li:not(.active):hover {
  text-decoration: none;
}
.breadcrumb li.active { color: #666; }

.main-content { max-width: 1400px; margin: 0 auto; padding: 0 30px 80px 30px; }
.product-grid { display: grid; grid-template-columns: 1fr; gap: 60px; }

.left-column { display: flex; flex-direction: column; gap: 40px; }
.image-grid { display: grid; grid-template-columns: 1fr; gap: 15px; } 
@media (min-width: 768px) {
    .image-grid { grid-template-columns: 1fr 1fr; }
}
.image-container { background: #fff; aspect-ratio: 4/3; overflow: hidden; display: flex; align-items: center; justify-content: center;}
.product-image { width: 100%; height: 100%; object-fit: contain; mix-blend-mode: multiply; }

.product-description-area { max-width: 800px; font-size: 14px; line-height: 1.6; color: #111; display: flex; flex-direction: column; gap: 20px; margin-top: 40px; }

.product-information-section { display: flex; flex-direction: column; border-top: 1px solid #dfdfdf; margin-top: 20px;}
.global-modal-btn { 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  padding: 20px 0; 
  border-bottom: 1px solid #dfdfdf; 
  margin: 0; 
  font-size: 14px; 
  font-weight: 700; 
  color: #111; 
  cursor: pointer; 
}
.global-modal-btn:hover { text-decoration: underline; }
.range-revamp-svg-icon { width: 24px; height: 24px; fill: currentColor; }

.product-code-section { margin-top: 0; }
.product-code-section h3 { font-size: 12px; font-weight: 700; margin-bottom: 5px; color: #484848; text-transform: uppercase; }
.code-badge { background: #000; color: #fff; padding: 5px 10px; font-weight: 700; font-size: 12px; letter-spacing: 0.5px; }

.details-section { position: relative; }
.sticky-wrapper { position: relative; }

.product-title { font-size: 24px; font-weight: 800; text-transform: uppercase; margin: 0; line-height: 1.2;color: #111; }
.product-sub { font-size: 16px; color: #111; margin-top: 5px; margin-bottom: 25px; }
.price { font-size: 32px; font-weight: 800; display: flex; align-items: flex-start; color: #111;}
.currency { font-size: 16px; margin-left: 2px; margin-top: 4px; }

.sku-section { display: flex; align-items: center; gap: 8px; margin-bottom: 20px; }
.sku-badge { background: black; color: white; font-size: 11px; font-weight: 700; padding: 4px 10px; letter-spacing: 0.5px; }

.installment-text { font-size: 12px; color: #484848; line-height: 1.5; margin-bottom: 30px; }
.installment-text a { color: #0058a3; text-decoration: underline; font-weight: 600; }
.credit-info { margin-top: 5px; }

.sidebar-list { border-top: 1px solid #dfdfdf; }
.list-item { 
  padding: 20px 0; 
  border-bottom: 1px solid #dfdfdf; 
  position: relative;
}
.list-item.clickable { cursor: pointer; }
.list-item.clickable:hover .list-title { text-decoration: underline; }

.list-header { margin-bottom: 10px; font-size: 14px; }
.list-title { font-weight: 700; font-size: 14px; color: #111; }
.list-value { margin-left: 5px; font-weight: 400; color: #111; }
.list-value-block { display: block; margin-top: 5px; font-size: 14px; color: #484848; }

.color-thumbnails { display: flex; gap: 10px; }
.color-box { width: 60px; height: 40px; border: 1px solid #dfdfdf; padding: 2px; cursor: pointer; }
.color-box.active { border: 2px solid #111; }
.color-box img { width: 100%; height: 100%; object-fit: cover; }

.product-check-stock {
  justify-content: flex-start;
  gap: 10px;
  text-decoration: none;
}
.product-check-stock:hover { text-decoration: none; }
.product-check-stock span { font-weight: 700; font-size: 14px; text-decoration: underline; }
.product-check-stock:hover span { text-decoration: none; }

.range-revamp-stockcheck__icon { width: 24px; height: 24px; fill: currentColor; }

.arrow-right { position: absolute; right: 0; top: 20px; color: #111; width: 18px; }
.has-arrow .arrow-right { top: 35px; }

.action-buttons { display: flex; gap: 15px; margin-top: 30px; }
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

@media (min-width: 768px) {
  .product-grid { grid-template-columns: 2fr 1fr; }
  .sticky-wrapper { position: sticky; top: 20px; }
  .list-item .arrow-right { top: 22px; }
}
@media (max-width: 767px) {
  .action-buttons { position: fixed; bottom: 0; left: 0; width: 100%; padding: 15px; background: white; box-shadow: 0 -2px 10px rgba(0,0,0,0.1); z-index: 999; margin: 0; }
  .details-section { padding-bottom: 80px; }
}
</style>
