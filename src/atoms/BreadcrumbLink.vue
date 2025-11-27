<template>
  <a :href="url" class="breadcrumb-link">
    <slot></slot>
  </a>
</template>

<script setup>
defineProps({
  url: {
    type: String,
    default: '#'
  }
});
</script>

<style scoped>
.breadcrumb-link {
  text-decoration: none;
  color: #484848;
  border-bottom: 1px solid transparent; 
  cursor: pointer;
  font-size: 12px;
  transition: border-bottom-color 0.2s;
}

.breadcrumb-link:hover {
  border-bottom: 1px solid #484848;
}
</style>