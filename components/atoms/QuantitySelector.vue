<template>
  <div class="qty-pill">
    <button @click="$emit('decrease')" :disabled="modelValue <= 1">−</button>
    <span>{{ modelValue }}</span>
    <button @click="$emit('increase')">+</button>
  </div>
</template>

<script>
export default {
  props: { modelValue: Number }
}
</script>

<style scoped>
.qty-pill {
  display: flex; align-items: center; border: 1px solid #929292; border-radius: 30px; height: 40px; padding: 0 5px;
}
.qty-pill button { background: none; border: none; font-size: 20px; cursor: pointer; width: 35px; color: #0058a3; font-weight: bold; }
.qty-pill button:disabled { color: #ccc; }
.qty-pill span { min-width: 20px; text-align: center; font-weight: 700; font-size: 14px; }
</style>