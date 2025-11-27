<template>
  <div class="store-item">
    <h3 class="store-name">{{ store.name }}</h3>
    
    <div class="store-address">
      <p v-for="(line, index) in store.address" :key="index">{{ line }}</p>
    </div>

    <div class="store-links">
      <StoreLink>Detaylı Bilgi Al</StoreLink>
      <StoreLink>Yol Tarifi Al</StoreLink>
    </div>
  </div>
</template>

<script setup>
import StoreLink from '../atoms/StoreLink.vue';

defineProps({
  store: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.store-item {
  display: flex;
  flex-direction: column;
}

.store-name {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #111;
}

.store-address {
  font-size: 13px;
  line-height: 1.5;
  color: #484848;
  margin-bottom: 15px;
  flex-grow: 1;
}
.store-address p { margin: 0; }

.store-links {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>