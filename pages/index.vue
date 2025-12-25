<template>
  <div class="home-page">
    <CategorySlider />
    
    <ul>
    </ul>
  </div>
</template>

<script setup lang="ts">
// Basic home page component
</script>

<style scoped>
.home-page {
  padding: 2rem;
  font-family: Arial, sans-serif;
  background-color: white;
  min-height: 100vh; /* Ensure it covers full height */
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0.5rem 0;
}
a {
  color: #007bff;
  text-decoration: none;
  font-size: 1.2rem;
}
a:hover {
  text-decoration: underline;
}
</style>
