<template>
  <div class="editorial-section">
    <div class="editorial-image">
      <img :src="image" alt="Lifestyle">
    </div>
    <div class="editorial-text">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({ image: String, title: String, description: String });
</script>

<style scoped>
.editorial-section { display: flex; gap: 60px; margin: 80px 0; align-items: center; }
.editorial-image { flex: 3; }
.editorial-image img { width: 100%; height: auto; display: block; }
.editorial-text { flex: 2; }
.editorial-text h2 { font-size: 28px; font-weight: 700; margin-bottom: 20px; line-height: 1.2; }
.editorial-text p { font-size: 14px; line-height: 1.6; color: #484848; }

@media (max-width: 900px) {
  .editorial-section { flex-direction: column; gap: 30px; }
}
</style>