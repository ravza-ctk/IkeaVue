<template>
  <div class="sku-badge">
    {{ code }} 
    <span v-if="showInfo" class="info-i">i</span>
  </div>
</template>

<script setup>
defineProps({
  code: String,
  showInfo: Boolean
});
</script>

<style scoped>
.sku-badge { 
  background: #111; color: white; padding: 2px 6px; 
  font-size: 11px; font-weight: 700; display: inline-flex; 
  align-items: center; gap: 4px; 
}
.info-i { 
  border: 1px solid white; border-radius: 50%; width: 12px; height: 12px; 
  display: flex; justify-content: center; align-items: center; 
  font-size: 9px; font-style: italic; font-family: serif; 
}
</style>