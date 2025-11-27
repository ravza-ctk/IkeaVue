<template>
  <div class="product-card">
    
    <div class="badges-container">
      <Badge :type="product.badgeType" />
    </div>

    <div class="product-image-wrapper">
      <img :src="product.image" :alt="product.name" class="product-image" />
    </div>

    <div class="product-info">
      <h3 class="product-name">{{ product.name }}</h3>
      <div class="product-price">{{ product.price }}₺</div>
    </div>

  </div>
</template>

<script>
import Badge from '../atoms/Badge.vue';

export default {
  components: { Badge },
  props: ['product']
}
</script>

<style scoped>
.product-card { position: relative; display: flex; flex-direction: column; }
.badges-container { position: absolute; top: 0; left: 0; z-index: 10; display: flex; flex-direction: column; gap: 5px; }
.product-image-wrapper { width: 100%; aspect-ratio: 1; border-radius: 50%; overflow: hidden; margin-bottom: 20px; background: #f9f9f9; }
.product-image { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s;}
.product-card:hover .product-image { transform: scale(1.03); }
.product-info { text-align: left; }
.product-name { font-size: 14px; font-weight: 700; text-transform: uppercase; margin-bottom: 8px; line-height: 1.4;}
.product-price { font-size: 24px; font-weight: 700; color: #111; }
</style>