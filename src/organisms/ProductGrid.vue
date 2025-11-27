<template>
  <section class="products-section">
    <h2 class="section-title">{{ title }}</h2>
    <div class="products-grid">
      <ProductCard 
        v-for="(product, index) in products" 
        :key="index" 
        :product="product" 
      />
    </div>
  </section>
</template>

<script>
import ProductCard from '../molecules/ProductCard.vue';

export default {
  components: { ProductCard },
  props: ['title', 'products']
}
</script>

<style scoped>
.products-section { margin-bottom: 60px; width: 100%; }
.section-title { font-size: 26px; font-weight: 700; margin-bottom: 40px; color: #111; }
.products-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 60px 40px; width: 100%; }
@media (max-width: 1200px) { .products-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 900px) { .products-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .products-grid { grid-template-columns: 1fr; } }
</style>