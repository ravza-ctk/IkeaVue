<template>
  <div class="custom-scrollbar-track">
    <div 
      class="custom-scrollbar-thumb" 
      :style="{ width: width + '%', left: left + '%' }"
    ></div>
  </div>
</template>

<script setup>
defineProps({
  width: { type: Number, default: 20 },
  left: { type: Number, default: 0 }
});
</script>

<style scoped>
.custom-scrollbar-track {
  width: 100%;
  height: 2px;
  background-color: #e0e0e0;
  margin-top: 10px;
  position: relative;
  border-radius: 2px;
  overflow: hidden;
}

.custom-scrollbar-thumb {
  height: 100%;
  background-color: #111;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 2px;
  transition: left 0.1s linear;
}
</style>