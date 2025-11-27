<template>
  <div class="search-bar-wrapper">
    <span class="search-icon">🔍</span>
    <input 
      type="text" 
      class="search-input"
      placeholder="SANDLÖPARE Koleksiyonu"
    />
  </div>
</template>

<style scoped>
.search-bar-wrapper {
  flex: 1;
  background: #f2f2f2;
  border-radius: 40px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.search-icon { font-size: 18px; opacity: 0.7; }
.search-input {
  border: none;
  background: transparent;
  width: 100%;
  outline: none;
  font-size: 15px;
}
</style>