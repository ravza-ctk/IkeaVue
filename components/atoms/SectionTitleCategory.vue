<template>
  <h2 class="slider-title">{{ text }}</h2>
</template>

<script setup>
defineProps({
  text: String
});
</script>

<style scoped>
.slider-title {
  font-size: 24px;
  font-weight: bold;
  color: #111;
  margin-bottom: 20px;
}
</style>