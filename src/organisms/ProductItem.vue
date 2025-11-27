<template>
  <div class="product-item">
    <div class="p-image">
       <img :src="product.image" :alt="product.name">
    </div>
    <div class="p-details">
      <div class="p-header">
         <h3 class="p-brand">{{ product.brand }}</h3>
         <p class="p-desc">{{ product.desc }}</p>
         <span class="p-dim">{{ product.dim }}</span>
         <span class="p-unit">{{ product.unitPrice }}₺ / adet</span>
         <div class="sku-box">{{ product.sku }}</div>
      </div>
      
      <div class="p-right-side">
        <div class="p-total-price">{{ product.unitPrice }}₺</div>
        <div class="controls">
          <QuantitySelector 
            :modelValue="quantity" 
            @increase="quantity++" 
            @decrease="quantity > 1 ? quantity-- : null"
          />
          <button class="del-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import QuantitySelector from '../atoms/QuantitySelector.vue';

export default {
  components: { QuantitySelector },
  props: { product: Object },
  setup() {
    const quantity = ref(1);
    return { quantity };
  }
}
</script>

<style scoped>
.product-item { display: flex; gap: 30px; padding: 20px 0; }
.p-image { width: 140px; height: 140px; background: #f5f5f5; flex-shrink: 0; }
.p-image img { width: 100%; height: 100%; object-fit: cover; mix-blend-mode: multiply; }
.p-details { flex: 1; display: flex; justify-content: space-between; }
.p-header { flex: 1; }
.p-brand { margin: 0; font-size: 14px; font-weight: 700; letter-spacing: 0.5px; }
.p-desc { margin: 2px 0 10px; font-size: 14px; color: #484848; }
.p-dim { display: block; font-size: 12px; color: #767676; margin-bottom: 4px; }
.p-unit { display: block; font-size: 12px; color: #767676; }
.sku-box { display: inline-block; border: 1px solid #dfdfdf; padding: 2px 6px; font-size: 11px; font-weight: 700; margin-top: 10px; }
.p-right-side { display: flex; flex-direction: column; align-items: flex-end; justify-content: space-between; }
.p-total-price { font-size: 20px; font-weight: 700; }
.controls { display: flex; align-items: center; gap: 15px; }
.del-btn { background: none; border: none; cursor: pointer; padding: 8px; border-radius: 50%; }
.del-btn:hover { background: #f5f5f5; }
</style>