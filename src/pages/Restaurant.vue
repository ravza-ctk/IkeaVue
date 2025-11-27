<template>
  <div class="restaurant-page-full">
    <main class="main-content">
      
      <IntroSection title="İsveç Restoranı">
        Alışverişinizi tok karnına rahatça yapın. IKEA Restoranında İsveç ve Türk mutfağının sağlıklı ve kaliteli lezzetlerinden oluşan düşük fiyatlı menüler sizi bekliyor. İsveç köftesinden, kahvaltı tabağına, simit, bal kaymak, fırında sütlaç ve baklava gibi lokal lezzetlere kadar damak zevkinize uygun yiyecekleri burada bulabilirsiniz.
      </IntroSection>

      <CategoryGrid :categories="categories" />

      <ProductGrid title="Sıcak Tabaklar" :products="products" />

    </main>
  </div>
</template>

<script>
import IntroSection from '../organisms/IntroSection.vue'
import CategoryGrid from '../organisms/CategoryGrid.vue';
import ProductGrid from '../organisms/ProductGrid.vue';

export default {
  name: 'RestaurantPageFull',
  components: {
    IntroSection,
    CategoryGrid,
    ProductGrid
  },
  data() {
    return {
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
        { name: 'KARİDES GÜVEÇ', price: '240', badgeType: 'msc', image: 'https://image-ikea.mncdn.com/ifb/karides-guvec.jpg' },
        { name: "TAVUK KANAT 8'Lİ", price: '260', badgeType: null, image: 'https://image-ikea.mncdn.com/ifb/tavuk-kanat-besli-4.jpg' },
        { name: 'MANTARLI DANA ET SOTE', price: '250', badgeType: null, image: 'https://image-ikea.mncdn.com/ifb/mantarli-et-sote.jpg' },
        { name: "İSVEÇ DANA KÖFTE 12'Lİ", price: '275', badgeType: null, image: 'https://image-ikea.mncdn.com/ifb/isvec-dana-kofte-ekmek-on-ikili-2.jpg' },
        { name: 'DANA BİFTEK TABAĞI', price: '360', badgeType: 'local', image: 'https://image-ikea.mncdn.com/ifb/dana-biftek-tabagi-2.jpg' },
        { name: 'IZGARA SOMON TABAĞI', price: '350', badgeType: 'msc', image: 'https://image-ikea.mncdn.com/ifb/izgara-somon-2.jpg' },
        { name: 'FISH&CHIPS', price: '290', badgeType: 'new', image: 'https://image-ikea.mncdn.com/ifb/fish-and-chips.jpg' },
      ]
    };
  }
};
</script>

<style scoped>
.restaurant-page-full {
  font-family: 'Noto Sans', 'Arial', sans-serif;
  background: #fff;
  color: #111;
  width: 75VW;
  min-height: 100vh;
  overflow-x: hidden;
}

.main-content {
  width: 100%;
  padding: 40px 50px; 
}

@media (max-width: 600px) {
  .main-content { padding: 20px; }
}
</style>
