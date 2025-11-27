<template>
  <div class="brand-section">
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Ikea_logo.svg" 
      alt="IKEA Logo" 
      class="ikea-logo"
    >
    <div class="main-titles">
      <h1>Ürünler</h1>
      <h1>Odalar</h1>
    </div>
  </div>
</template>

<style scoped>
.brand-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  margin-bottom: 40px;
}

.ikea-logo {
  width: 90px; height: auto;
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