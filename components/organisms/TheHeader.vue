<template>
  <header class="header-fixed">
    <!-- Utility Bar (Top Links) -->
    <div class="utility-bar">
      <div class="utility-content">
        <a href="#" class="utility-link">Size En Yakın IKEA</a>
        <a href="#" class="utility-link">Hizmetler</a>
        <a href="#" class="utility-link">IKEA Aile</a>
        <a href="#" class="utility-link">IKEA Kurumsal Satış</a>
        <NuxtLink to="/restaurant" class="utility-link">İsveç Restoranı</NuxtLink>
        <NuxtLink to="/tracking" class="utility-link">Sipariş Takibi</NuxtLink>
        <a href="#" class="utility-link">Bize Ulaşın</a>
        <a href="#" class="utility-link">Stok Sorgula</a>
        <a href="#" class="utility-link">İade/Değişim Talebi</a>
        <a href="#" class="utility-link utility-link-lang">English</a>
      </div>
    </div>

    <div class="top-bar">
      <span @click="$emit('open-modal')" class="menu-icon">☰</span>

      <NuxtLink to="/" class="logo-link">
        <BaseLogo class="header-logo" />
      </NuxtLink>

      <SearchBar />

      <div class="user-actions">
        <span class="icon-link"><svg data-v-5223e4c0="" focusable="false" viewBox="0 0 24 24" class="range-revamp-svg-icon range-revamp-stockcheck__icon store-icon" aria-hidden="true"><path data-v-5223e4c0="" fill-rule="evenodd" clip-rule="evenodd" d="M22 20V4H2v16h20zM20 6H4v12h3v-8h10v8h3V6zm-9 6H9v6h2v-6zm2 6h2v-6h-2v6z"></path></svg> İl Seçiniz</span>
        <NuxtLink to="/login" class="icon-link"> Hej! Üye Girişi / Üye ol</NuxtLink>
        <span class="icon-link">♡</span>
        <NuxtLink to="/cart" class="icon-link cart-wrapper">
          🛒
          <span class="cart-badge">1</span>
        </NuxtLink>
      </div>
    </div>

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

.utility-bar {
  background: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
  padding: 8px 0;
}

.utility-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 25px;
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
}

.utility-link {
  font-size: 12px;
  color: #111;
  text-decoration: none;
  font-weight: 400;
  transition: text-decoration 0.2s;
}

.utility-link:hover {
  text-decoration: underline;
}

.utility-link-lang {
  margin-left: auto;
  font-weight: 600;
}

.top-bar {
  display: flex;
  align-items: center;
  padding: 15px 25px;
  gap: 25px;
}
.menu-icon { font-size: 24px; cursor: pointer; color: black; }
.header-logo { height: 35px; max-width: none; }
.user-actions { display: flex; gap: 15px; align-items: center; color:black }
.icon-link { cursor: pointer; font-size: 14px; font-weight: 600;color:black}
.cart-wrapper { position: relative; display: inline-flex; align-items: center; justify-content: center; text-decoration: none !important; }
.cart-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #0058a3; /* IKEA Blue or Primary Color */
  color: white;
  font-size: 10px;
  font-weight: bold;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.store-icon {
  width: 16px;
  height: 16px;
  vertical-align: middle;
  transform: translateY(-2px); /* Slight adjustment for alignment */
}
</style>