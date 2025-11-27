<template>
  <div class="ikea-product-page-overlay">
    
 

    <main class="main-content">
      <AppBreadcrumbs />

      <div class="product-top-section">
        <div class="left-column">
          <ProductGallery :images="images" />
          <div class="product-description">
            <p>BILLY kitaplık, çok yönlülüğü sayesinde evde birçok şekilde kullanılabilen sevilen bir ikondur.</p>
          </div>
          <div class="sku-container">
            <span class="sku-label">Ürün Kodu</span>
            <SkuBadge code="690.178.28" />
          </div>
          <hr class="divider">
          <AccordionItem title="BILLY Cam Kapaklı Kitaplık, Beyaz Ürün Bilgileri" />
          <AccordionItem title="Ebatlar ve Paket Ölçüleri" />
        </div>
        <BuySidebar />
      </div>

      <div class="product-bottom-section">
        <EditorialSection 
          image="https://image-ikea.mncdn.com/ozgur-icerik/urun-detay/billy-cam-kapakli-kitaplik-69017828.jpg"
          title="BILLY: Evinizde zamansız bir kitaplık klasiği"
          description="40 yılı aşkın süredir bir klasik olan BILLY kitaplık..."
        />
        <MaterialSection />
        <AccordionItem title="Tamamlayıcı Ürünler" class="no-border-top" />
      </div>
    </main>
  </div>
</template>

<script setup>
const emit = defineEmits(['close']);

const closePage = () => {
  console.log("Kırmızı X'e basıldı, kapatma sinyali gönderiliyor...");
  emit('close');
};

import AppBreadcrumbs from '../molecules/AppBreadcrumbsProduct.vue';
import SkuBadge from '../atoms/SkuBadge.vue';
import AccordionItem from '../molecules/AccordationItem.vue';
import ProductGallery from '../organisms/ProductGallery.vue';
import EditorialSection from '../organisms/EditorialSection.vue';
import MaterialSection from '../organisms/MaterialSection.vue';
import BuySidebar from '../organisms/BuySidebar.vue';

const images = [
  'https://image-ikea.mncdn.com/urunler/500_500/PE700390.jpg',
  'https://image-ikea.mncdn.com/urunler/500_500/PE917985.jpg',
  'https://image-ikea.mncdn.com/urunler/500_500/PE917976.jpg',
  'https://image-ikea.mncdn.com/urunler/500_500/PE711188.jpg'
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');

.ikea-product-page-overlay {
  position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
  z-index: 5000; overflow-y: auto;
  background-color: #fff; font-family: 'Noto Sans', Arial, sans-serif; color: #111;
}

.main-content { max-width: 1400px; margin: 0 auto; padding: 20px 40px 60px; }
.product-top-section { display: flex; gap: 60px; position: relative; margin-bottom: 80px; }
.left-column { flex: 2; }
.product-bottom-section { width: 100%; }
.product-description p { font-size: 14px; line-height: 1.6; color: #484848; margin-bottom: 15px; max-width: 800px; }
.sku-container { margin: 30px 0; }
.sku-label { display: block; font-size: 11px; font-weight: 700; margin-bottom: 5px; }
.divider { border: none; border-top: 1px solid #dfdfdf; margin: 30px 0; }
.no-border-top { border-top: none !important; }

@media (max-width: 900px) {
  .product-top-section { flex-direction: column; }
  .main-content { padding: 15px 20px; }
  .close-button-red { top: 15px; right: 15px; width: 40px; height: 40px; }
}
</style>