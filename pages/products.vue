<template>
  <div class="products-page">
    <h1>Ürünler</h1>
    <div class="product-list">
      <div v-for="product in productStore.products" :key="product.id" class="product-card">
        <div class="image-container">
           <img v-if="product.image" :src="product.image" :alt="product.name" class="product-image" />
           <div v-else class="no-image">Görsel Yok</div>
        </div>
        <div class="product-info">
            <span class="category-tag" v-if="product.categoryId">{{ product.categoryId }}</span>
            <h2 class="product-name">{{ product.name }}</h2>
            <p class="product-desc" v-if="product.description">{{ product.description }}</p>
            <div class="price-stock-row">
                <p class="product-price">{{ product.price }}₺</p>
                <span v-if="product.stock > 0" class="stock-badge in-stock">Stokta Var</span>
                <span v-else class="stock-badge out-stock">Stok Yok</span>
            </div>
            <BaseButton variant="blue" @click="product.id && goToProduct(product.id)">Detay</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '~/stores/useProductStore';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import BaseButton from '~/components/atoms/BaseButton.vue';

const productStore = useProductStore();
const router = useRouter();

onMounted(() => {
  productStore.fetchProducts();
});

const goToProduct = (id: string) => {
  router.push({ path: `/product/${id}` });
};
</script>

<style scoped>
.products-page {
  padding: 2rem;
  background-color: #f5f5f5;
  min-height: 100vh;
}
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}
.product-card {
  background: white;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s;
}
.product-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.image-container {
    width: 100%;
    height: 250px;
    background-color: #f9f9f9;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}
.product-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s;
}
.product-card:hover .product-image {
    transform: scale(1.05);
}
.no-image {
    color: #999;
}
.product-info {
    padding: 16px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
.category-tag {
    font-size: 0.8rem;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 4px;
}
.product-name {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 8px;
  color: #111;
}
.product-desc {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    flex-grow: 1;
}
.price-stock-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}
.product-price {
  font-weight: 700;
  font-size: 1.2rem;
  color: #111;
}
.stock-badge {
    font-size: 0.8rem;
    padding: 4px 8px;
    border-radius: 4px;
    font-weight: 600;
}
.in-stock { background-color: #e6f4ea; color: #1e7e34; }
.out-stock { background-color: #fce8e6; color: #c0392b; }
</style>
