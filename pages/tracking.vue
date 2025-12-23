<template>
  <div class="tracking-page-wrapper">
    <div class="breadcrumbs">
      <NuxtLink to="/" class="breadcrumb-link">Ana Sayfa</NuxtLink>
      <span class="separator">&gt;</span>
      <a href="#" class="breadcrumb-link">İnternet Mağazası</a>
      <span class="separator">&gt;</span>
      <span class="breadcrumb-current">Sipariş Takibi</span>
    </div>
    <h1 class="page-title">Sipariş Takibi</h1>
    <TrackingSection />
  </div>
</template>

<script setup>
import TrackingSection from '../component/organisms/TrackingSection.vue';
</script>

<style scoped>
.tracking-page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  max-width: 1200px;
  margin: 80px auto;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 50px;
  color: #111;
}

.breadcrumbs {
  width: 100%;
  text-align: left;
  margin-bottom: 50px;
  font-size: 0.9rem;
  color: #333;
}

.breadcrumb-link {
  text-decoration: underline;
  color: inherit;
  cursor: pointer;
}

.breadcrumb-link:hover {
  text-decoration: none;
}

.separator {
  margin: 0 5px;
}
</style>

