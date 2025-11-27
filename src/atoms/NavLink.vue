<template>
  <span class="nav-item" :style="{ color: color }">
    <slot></slot> 
  </span>
</template>

<script>
export default {
  props: {
    color: { type: String, default: 'black' }
  }
}
</script>

<style scoped>
.nav-item {
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  transition: color 0.2s;
}
.nav-item:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}
</style>