<template>
  <div class="product-page">
    <BaseBreadcrumb :items="breadcrumbItems" />

    <div class="product-top-section">
      <div class="left-column">
        <!-- Dynamic Images from Store if available, else fallback -->
        <ProductGallery :images="product?.images || defaultImages" />
        
        <div class="product-description">
          <BaseText variant="paragraph">{{ product?.description }}</BaseText>
        </div>
        
        <div class="sku-container">
          <BaseText variant="label" class="sku-label">Ürün Kodu</BaseText>
          <BaseBadge type="sku" :showInfo="false">{{ product?.id }}</BaseBadge>
        </div>
        
        <hr class="divider">
        <AccordionItem :title="`${product?.name || 'Ürün'} Bilgileri`" />
        <AccordionItem title="Ebatlar ve Paket Ölçüleri" />
      </div>
      
      <!-- Buy Sidebar needs to interact with Cart Store -->
      <BuySidebar :product="product" />
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
  </div>
</template>

<script setup lang="ts">
// Nuxt auto imports
import { useProductStore } from '~/stores/useProductStore';
import { onMounted, computed, ref } from 'vue';

definePageMeta({
  layout: 'default'
});

const productStore = useProductStore();
const product = computed(() => productStore.products[0]); // Demo: Get first product

const breadcrumbItems = [
  { text: 'Ana Sayfa', href: '/' },
  { text: 'Ürünler', href: '#' },
  { text: 'Kitaplıklar', href: '#' },
  { text: 'Detay' }
];

const defaultImages = [
  'https://image-ikea.mncdn.com/urunler/500_500/PE700390.jpg',
  'https://image-ikea.mncdn.com/urunler/500_500/PE917985.jpg',
];

onMounted(() => {
  if (productStore.products.length === 0) {
      productStore.fetchProducts();
  }
});
</script>

<style scoped>
/* Removed fixed overlay styles to fit in layout */
.product-page {
  padding: 20px 40px 60px;
  max-width: 1400px;
  margin: 0 auto;
}

.product-top-section { display: flex; gap: 60px; position: relative; margin-bottom: 80px; }
.left-column { flex: 2; }
.product-bottom-section { width: 100%; }
.product-description { margin-bottom: 15px; max-width: 800px; }
.sku-container { margin: 30px 0; }
.sku-label { display: block; margin-bottom: 5px; }
.divider { border: none; border-top: 1px solid #dfdfdf; margin: 30px 0; }
.no-border-top { border-top: none !important; }

@media (max-width: 900px) {
  .product-page { padding: 15px 20px; }
  .product-top-section { flex-direction: column; }
}
</style>