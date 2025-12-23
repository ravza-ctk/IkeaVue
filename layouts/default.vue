<template>
  <div class="default-layout">
    <TheHeader @open-modal="isModalOpen = true" />
    <main class="main-content">
      <slot />
    </main>
    <TheFooter />
    <SidebarModal :is-open="isModalOpen" @close="isModalOpen = false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// State for sidebar modal
const isModalOpen = ref(false);
</script>

<style scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-content {
  flex: 1;
  padding-top: 140px; 
}
</style>
