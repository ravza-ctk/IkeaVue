<template>
  <a :href="href" class="store-link">
    <slot></slot>
  </a>
</template>

<script setup>
defineProps({
  href: { type: String, default: '#' }
});
</script>

<style scoped>
.store-link {
  font-size: 12px;
  font-weight: 700;
  color: #0058a3;
  text-decoration: none;
  cursor: pointer;
}
.store-link:hover { text-decoration: underline; }
</style>