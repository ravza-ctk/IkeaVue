<template>
  <header class="header-fixed">
    <div class="top-bar">
      <span 
        @click="$emit('open-modal')" 
        class="menu-icon"
      >
        ☰
      </span>

      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/1200px-Ikea_logo.svg.png'
        class="logo"
      />

      <div class="search-bar">
        <span style="font-size: 18px; opacity: 0.7;">🔍</span>
        <input
          type="text"
          placeholder="SANDLÖPARE Koleksiyonu"
          class="search-input"
        />
      </div>

      <span class="icon-link">🏛️ İl Seçiniz</span>
      <span class="icon-link">👤 Hej! Üye Girişi / Üye Ol</span>
      <span class="icon-link" style="font-size:20px;">♡</span>
      <span class="icon-link" style="font-size:20px;">🛒</span>
    </div>

    <nav class="bottom-nav">
      <span class="nav-item">Ürünler</span>
      <span class="nav-item">Odalar</span>
      <span class="nav-item" style="color:red;">Fırsatlar</span>
      <span class="nav-item">ŞAHANE KASIM</span>
      <span class="nav-item" style="color:green;">Yılbaşı</span>
      <span class="nav-item" style="color:orange;">YENİ</span>
      <span class="nav-item">İyi Fikirler</span>
    </nav>

    <div style="border-bottom: 1px solid #ddd;"></div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  emits: ['open-modal']
};
</script>

<style scoped>
.header-fixed {
  width: 100vw;
  background: white;
  border-bottom: 1px solid #ddd;
  position: fixed; 
  top: 0;
  left: 0;
  z-index: 999;
}

.top-bar {
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  padding: 15px 25px;
  gap: 25px;
}

.menu-icon {
  color: black;
  font-size: 24px; 
  cursor: pointer;
}

.logo {
  height: 35px;
}

.search-bar {
  flex: 1;
  background: #f2f2f2;
  border-radius: 40px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.search-input {
  border: none;
  background: transparent;
  width: 100%;
  outline: none;
  font-size: 15px;
}

.icon-link {
  color: black;
  cursor: pointer;
}

.bottom-nav {
  display: flex;
  gap: 25px;
  padding: 10px 25px;
  padding-left: 72px;
  font-size: 14px;
  font-weight: 700; 
}

.nav-item {
  color: black; 
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s; 
}

.nav-item:hover {
  text-decoration: underline; 
  text-underline-offset: 4px; 
}
</style>