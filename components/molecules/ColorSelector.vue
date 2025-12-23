<template>
  <div class="color-selection">
    <div class="color-header"><strong>Renk</strong><span>{{ selectedColorName }}</span></div>
    <div class="color-grid">
      <div 
        v-for="(img, index) in colors" :key="index"
        :class="['color-opt', { selected: index === selectedIndex }]"
        @click="selectedIndex = index"
      >
        <img :src="img" alt="Renk Seçeneği">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
defineProps({
  selectedColorName: String,
  colors: Array
});
const selectedIndex = ref(0);
</script>

<style scoped>
.color-header { display: flex; gap: 5px; font-size: 14px; margin-bottom: 10px; }
.color-grid { display: flex; gap: 10px; }
.color-opt { width: 40px; height: 40px; border: 1px solid #dfdfdf; cursor: pointer; }
.color-opt img { width: 100%; height: 100%; object-fit: cover; }
.color-opt.selected { border: 2px solid #111; }
</style>