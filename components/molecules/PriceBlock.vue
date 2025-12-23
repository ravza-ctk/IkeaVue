<template>
  <div class="price-section">
    <span class="price">{{ price }}</span>
    <BaseBadge type="sku" :code="sku" :showInfo="true">{{ sku }}</BaseBadge>
  </div>
</template>

<script setup>
import BaseBadge from '../atoms/BaseBadge.vue';

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