<template>
  <div class="restaurant-page-full">
    <main class="main-content">
      <IntroSection title="İsveç Restoranı">
         Alışverişinizi tok karnına rahatça yapın...
      </IntroSection>

      <SectionGrid title="İsveç Restoranı Favorileri">
        <CategoryCard 
          v-for="(cat, index) in categories" 
          :key="index"
          :title="cat.title"
          :image="cat.image"
        />
      </SectionGrid>

      <SectionGrid title="Sıcak Tabaklar">
        <ProductCard 
          v-for="(prod, index) in products"
          :key="index"
          :product="prod"
        />
      </SectionGrid>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

definePageMeta({
  layout: 'default'
});

const categories = ref([
    { title: 'SICAK TABAKLAR', image: 'https://image-ikea.mncdn.com/ifb/isvec-dana-kofte-ekmek-sekizli-2.jpg' },
    { title: 'KAHVALTI MENÜSÜ', image: 'https://image-ikea.mncdn.com/ifb/kahvalti-tabagi-3.jpg' },
    // ... shortened
]);

const products = ref([
    { name: 'KARİDES GÜVEÇ', price: '240', badgeType: 'msc', image: 'https://image-ikea.mncdn.com/ifb/karides-guvec.jpg' },
    { name: "TAVUK KANAT 8'Lİ", price: '260', badgeType: null, image: 'https://image-ikea.mncdn.com/ifb/tavuk-kanat-besli-4.jpg' },
]);
</script>

<style scoped>
.restaurant-page-full {
  font-family: 'Noto Sans', 'Arial', sans-serif;
  background: #fff;
  color: #111;
  width: 100%; /* Fixed width */
  min-height: 100vh;
}

.main-content {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 50px; 
}

@media (max-width: 600px) {
  .main-content { padding: 20px; }
}
</style>
