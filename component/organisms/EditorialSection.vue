<template>
  <div class="editorial-section">
    <div class="editorial-image">
      <img :src="image" alt="Lifestyle">
    </div>
    <div class="editorial-text">
      <BaseText variant="section-title" tag="h2">{{ title }}</BaseText>
      <BaseText variant="paragraph">{{ description }}</BaseText>
    </div>
  </div>
</template>

<script setup>
import BaseText from '../atoms/BaseText.vue';

defineProps({ image: String, title: String, description: String });
</script>

<style scoped>
.editorial-section { display: flex; gap: 60px; margin: 80px 0; align-items: center; }
.editorial-image { flex: 3; }
.editorial-image img { width: 100%; height: auto; display: block; }
.editorial-text { flex: 2; }
/* Override BaseText styles if needed? section-title is 18px, editorial h2 was 28px. */
.editorial-text h2 { font-size: 28px !important; line-height: 1.2; margin-bottom: 20px; }
/* paragraph is 14px 1.5. editorial p was 14px 1.6. Close enough. */
</style>