<template>
  <header class="header-fixed">
    <div class="top-bar">
      <span @click="$emit('open-modal')" class="menu-icon">☰</span>

      <BaseLogo />

      <SearchBar />

      <div class="user-actions">
        <span class="icon-link">🏛️ İl Seçiniz</span>
        <span class="icon-link">👤 Hej! Üye Girişi</span>
        <span class="icon-link">♡</span>
        <span class="icon-link">🛒</span>
      </div>
    </div>

    <!-- Alt Navigasyon (Molekül) -->
    <BottomNav />
  </header>
</template>

<script>
import BaseLogo from '../atoms/BaseLogo.vue';
import SearchBar from '../molecules/SearchBar.vue';
import BottomNav from '../molecules/BottomNav.vue';

export default {
  components: {
    BaseLogo,
    SearchBar,
    BottomNav
  },
  emits: ['open-modal']
}
</script>

<style scoped>
.header-fixed {
  width: 100%;
  background: white;
  border-bottom: 1px solid #ddd;
  position: fixed;
  top: 0; left: 0; z-index: 999;
}
.top-bar {
  display: flex;
  align-items: center;
  padding: 15px 25px;
  gap: 25px;
}
.menu-icon { font-size: 24px; cursor: pointer; }
.user-actions { display: flex; gap: 15px; align-items: center; color:black }
.icon-link { cursor: pointer; font-size: 14px; font-weight: 600;}
</style>