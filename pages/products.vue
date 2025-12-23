<template>
  <div class="products-page">
    <h1>Ürünler</h1>
    <div class="product-list">
      <div v-for="product in productStore.products" :key="product.id" class="product-card">
        <img v-if="product.image" :src="product.image" :alt="product.name" class="product-image" />
        <h2 class="product-name">{{ product.name }}</h2>
        <p class="product-price">{{ product.price }}₺</p>
        <BaseButton variant="blue" @click="product.id && goToProduct(product.id)">Detay</BaseButton>
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
  background-color: #fff;
}
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 200px;
  text-align: center;
}
.product-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 8px;
}
.product-name {
  font-size: 1.1rem;
  margin: 8px 0;
}
.product-price {
  font-weight: bold;
  margin-bottom: 12px;
}
</style>
