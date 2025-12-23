<template>
  <div class="service-bar">
    <div class="service-icon-text">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.9 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
      <span>Montaj Hizmeti Almak İstiyorum</span>
    </div>
    <ToggleSwitch />
  </div>
</template>

<script>
import ToggleSwitch from '../atoms/ToggleSwitch.vue';
export default { components: { ToggleSwitch } }
</script>

<style scoped>
.service-bar { display: flex; justify-content: space-between; align-items: center; background: #f5f5f5; padding: 20px 24px; border-radius: 4px; margin-bottom: 40px; }
.service-icon-text { display: flex; gap: 15px; font-weight: 600; font-size: 14px; align-items: center; }
</style>