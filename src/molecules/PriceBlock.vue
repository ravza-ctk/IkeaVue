<template>
  <div class="price-section">
    <span class="price">{{ price }}</span>
    <SkuBadge :code="sku" :showInfo="true" />
  </div>
</template>

<script setup>
import SkuBadge from '../atoms/SkuBadge.vue';

defineProps({
  price: { type: String, required: true },
  sku: { type: String, required: true }    
});
</script>

<style scoped>
.price-section { 
  display: flex; align-items: center; 
  gap: 15px; margin-bottom: 10px; 
}
.price { 
  font-size: 28px; font-weight: 800; 
  display: flex; align-items: flex-start; 
}
</style>