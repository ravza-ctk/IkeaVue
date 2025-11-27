<template>
  <h3 class="section-title-atom">
    <slot></slot>
  </h3>
</template>

<script>
export default {
  name: 'SectionTitle'
}
</script>

<style scoped>
.section-title-atom {
  font-size: 16px; 
  font-weight: bold;
  margin-bottom: 16px;
  color: #111; 
}
</style>