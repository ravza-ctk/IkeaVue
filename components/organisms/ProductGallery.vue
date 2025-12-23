<template>
  <div class="gallery-container">
    <div class="image-grid">
      <div class="img-wrapper" v-for="(img, i) in images" :key="i">
        <img :src="img" :alt="`Urun ${i}`">
      </div>
    </div>
    <BaseButton>Daha fazla resim göster</BaseButton>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '../atoms/BaseButton.vue';
defineProps<{
  images: string[]
}>();
</script>

<style scoped>
.image-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px; }
.img-wrapper { background: #f5f5f5; cursor: pointer; }
.img-wrapper img { width: 100%; height: auto; display: block; mix-blend-mode: multiply; }
</style>