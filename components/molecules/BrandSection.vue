<template>
  <div class="brand-section">
    <BaseLogo class="ikea-logo-molecule" />
    <div class="main-titles">
      <h1>Ürünler</h1>
      <h1>Odalar</h1>
    </div>
  </div>
</template>

<script>
import BaseLogo from '../atoms/BaseLogo.vue';

export default {
  components: {
    BaseLogo
  }
}
</script>

<style scoped>
.brand-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  margin-bottom: 40px;
}

.ikea-logo-molecule {
  width: 90px;
  margin-bottom: 30px; 
}

.main-titles {
  display: flex; flex-direction: column; gap: 8px;
}

.main-titles h1 {
  font-size: 32px;
  font-weight: 700;
  margin: 8px 0;
  line-height: 1.1;
  color: #111;
  letter-spacing: -0.5px;
  cursor: pointer;
}

.main-titles h1:hover {
  text-decoration: underline; 
  text-decoration-thickness: 3px;
}
</style>