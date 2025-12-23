<template>
  <section class="section-grid">
    <BaseText variant="section-title" tag="h2" class="title">{{ title }}</BaseText>
    
    <div class="grid-layout">
      <slot></slot>
    </div>
  </section>
</template>

<script setup>
import BaseText from '../atoms/BaseText.vue';

defineProps({
  title: String
});
</script>

<style scoped>
.section-grid {
  margin-bottom: 60px;
  width: 100%;
}

.title {
  margin-bottom: 40px;
}

.grid-layout {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px 40px;
  width: 100%;
}

@media (max-width: 1200px) {
  .grid-layout { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 900px) {
  .grid-layout { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .grid-layout { grid-template-columns: 1fr; }
}
</style>
