<template>
  <div class="home-page">
    <CategorySlider />
    <h1>Welcome to the Food Delivery App</h1>
    <p>Please select a page to visit:</p>
    <ul>
      <li><NuxtLink to="/restaurant">Restaurants</NuxtLink></li>
      <li><NuxtLink to="/product">Products</NuxtLink></li>
      <li><NuxtLink to="/cart">Cart</NuxtLink></li>
      <li><NuxtLink to="/login">Login</NuxtLink></li>
      <li><NuxtLink to="/admin">Admin</NuxtLink></li>
      <li><NuxtLink to="/tracking">Order Tracking</NuxtLink></li>
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
