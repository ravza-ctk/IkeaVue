<template>
  <div class="ikea-tracking-page-overlay">
    
    <main class="main-content">
      <AppBreadcrumbs />
      <h1 class="page-title">Sipariş Takibi</h1>
      <TrackingSection />
    </main>
  </div>
</template>

<script setup>
import AppBreadcrumbs from '../molecules/AppBreadcrumbs.vue';
import TrackingSection from '../organisms/TrackingSection.vue';

defineEmits(['close']);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');

.ikea-tracking-page-overlay {
  position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
  background-color: #fff; z-index: 5000; overflow-y: auto;
  font-family: 'Noto Sans', Arial, sans-serif; color: #111;
}


.main-content { max-width: 1200px; margin: 0 auto; padding: 60px 40px; }
.page-title { text-align: center; font-size: 36px; font-weight: 700; margin-bottom: 60px; color: #111; }
</style>