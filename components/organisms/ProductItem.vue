<template>
  <div class="product-item">
    <div class="p-image">
       <img src="https://image-ikea.mncdn.com/urunler/190_190/PE951816.jpg" :alt="product.name">
    </div>
    <div class="p-details">
      <div class="p-header">
         <BaseText variant="section-title" tag="h3" class="p-brand">{{ product.brand }}</BaseText>
         <BaseText variant="paragraph" class="p-desc">{{ product.desc }}</BaseText>
         <BaseText variant="label" class="p-dim">{{ product.dim }}</BaseText>
         <BaseText variant="label" class="p-unit">{{ product.unitPrice }}₺ / adet</BaseText>
         
         <div class="sku-wrapper">
           <BaseBadge type="sku" :showInfo="false">{{ product.sku }}</BaseBadge>
         </div>
      </div>
      
      <div class="p-right-side">
        <BaseText variant="section-title" class="p-total-price">{{ product.unitPrice }}₺</BaseText>
        <div class="controls">
          <QuantitySelector 
            :modelValue="quantity" 
            @increase="quantity++" 
            @decrease="quantity > 1 ? quantity-- : null"
          />
          <BaseButton variant="icon" size="icon-40" shape="circle" class="del-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import QuantitySelector from '../atoms/QuantitySelector.vue';
import BaseText from '../atoms/BaseText.vue';
import BaseBadge from '../atoms/BaseBadge.vue';
import BaseButton from '../atoms/BaseButton.vue';

// Define loose props to match existing usage in Cart where we map items to a product-like shape
defineProps<{
  product: {
    brand: string;
    desc: string;
    dim: string;
    unitPrice: number;
    sku: string;
    image: string;
    name?: string; // Optional if sometimes accessed
  }
}>();

const quantity = ref(1);
</script>

<style scoped>
.product-item { display: flex; gap: 30px; padding: 20px 0; }
.p-image { width: 140px; height: 140px; background: #f5f5f5; flex-shrink: 0; }
.p-image img { width: 100%; height: 100%; object-fit: cover; mix-blend-mode: multiply; }
.p-details { flex: 1; display: flex; justify-content: space-between; }
.p-header { flex: 1; }
/* .p-brand handled by BaseText section-title but we override font size? Or let it be? BaseText section-title is 18px bold. Original was 14px bold. */
.p-brand { font-size: 14px !important; letter-spacing: 0.5px; margin: 0; } 
.p-desc { margin: 2px 0 10px; font-size: 14px; color: #484848; }
.p-dim { display: block; font-size: 12px; color: #767676; margin-bottom: 4px; }
.p-unit { display: block; font-size: 12px; color: #767676; }
.sku-wrapper { margin-top: 10px; }
.p-right-side { display: flex; flex-direction: column; align-items: flex-end; justify-content: space-between; }
.p-total-price { font-size: 20px; font-weight: 700; }
.controls { display: flex; align-items: center; gap: 15px; }
</style>