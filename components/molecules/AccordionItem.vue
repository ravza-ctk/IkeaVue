<template>
  <div class="accordion-item">
    <h3>{{ title }}</h3>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"></path></svg>
  </div>
</template>

<script setup>
defineProps({ title: String });
</script>

<style scoped>
.accordion-item { 
  display: flex; justify-content: space-between; align-items: center; 
  border-top: 1px solid #dfdfdf; padding: 25px 0; cursor: pointer; 
}
.accordion-item h3 { font-size: 16px; font-weight: 700; margin: 0; }
</style>