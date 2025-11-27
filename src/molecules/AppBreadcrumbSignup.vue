<template>
  <div class="breadcrumb">
    
    <BreadcrumbLink url="/">Ana Sayfa</BreadcrumbLink>
    
    <span class="arrow">›</span>
    
    <span class="current">Üye Girişi</span>
  </div>
</template>

<script setup>
import BreadcrumbLink from '../atoms/BreadcrumbLink.vue';
</script>

<style scoped>
.breadcrumb {
  font-size: 12px; color: #484848; margin-bottom: 15px; 
  display: flex; align-items: center;
}
.arrow { margin: 0 8px; font-size: 16px; line-height: 1; }
.current { color: #484848; }
</style>