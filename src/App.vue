<template>
  <div class="app-layout">
    
    <button 
      v-if="!isSidebarOpen" 
      class="close-preview-btn" 
      @click="handleClose" 
      title="Menüye Dön / Kapat"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </button>

    <aside class="sidebar" v-if="isSidebarOpen">
      <div class="sidebar-header">
        <h2>Bileşen Test</h2>
      </div>
      
      <ul class="menu-list">
        <li 
          v-for="(item, index) in menuItems" 
          :key="index"
          :class="{ active: currentComponent === item.component }"
          @click="selectComponent(item)"
        >
          {{ item.name }}
        </li>
      </ul>
    </aside>

    <main class="preview-area" :class="{ 'full-screen': !isSidebarOpen }">
      <div class="component-wrapper" :class="{ 'no-border': !isSidebarOpen }">
        
        <component 
          :is="currentComponent" 
          :is-open="isModalVisible"
          @close="handleClose"
        />

      </div>
    </main>

  </div>
</template>

<script setup>
import { shallowRef, ref } from 'vue';


import TheHeader from './components/organisms/TheHeader.vue';
import TheFooter from './components/organisms/TheFooter.vue';
import TheCard from './components/pages/TheCard.vue';
import CategorySlider from './components/organisms/CategorySlider.vue';
import Restaurant from './components/pages/Restaurant.vue';
import SidebarModal from './components/organisms/SidebarModal.vue';
import TrackingPage from './components/pages/TrackingPage.vue';
import ProductPage from './components/pages/ProductPage.vue';
import LoginSignUpPage from './components/pages/LoginSignUpPage.vue';
import StoreSection from './components/organisms/StoreSection.vue';


const menuItems = [ 
  { name: 'Header', component: TheHeader },
  { name: 'Footer', component: TheFooter },
  { name: 'Giriş / Kayıt Ol', component: LoginSignUpPage },
  { name: 'Kategori Modalı', component: SidebarModal },
  { name: 'Kategori Slider', component: CategorySlider },
  { name: 'Sepet', component: TheCard },
  { name: 'Sipariş Takip', component: TrackingPage },
  { name: 'Ürün Sayfası', component: ProductPage  },
  { name: 'Mağazalar', component: StoreSection },
  { name: 'Yemek Menüsü', component: Restaurant },
];

const currentComponent = shallowRef(TheHeader);
const isModalVisible = ref(true);
const isSidebarOpen = ref(true); 

const selectComponent = (item) => {
  currentComponent.value = item.component;
  isModalVisible.value = true;
  isSidebarOpen.value = false;
};

// --- BU FONKSİYON ARTIK HEM KIRMIZI X HEM DE HAMBURGER BUTONU İÇİN ÇALIŞIYOR ---
const handleClose = () => {
  console.log("Menüye dönülüyor...");
  isModalVisible.value = false; // Varsa modalı kapat
  isSidebarOpen.value = true;   // Menüyü aç
  
  // EĞER SAYFA AÇIKSA ONU KAPATIP VARSAYILAN HEADER'A DÖN
  // Bu satır sayesinde Sipariş Takibi vb. sayfalar ekrandan gider.
  currentComponent.value = TheHeader; 
};
</script>

<style>
/* Stil dosyaların aynen kalabilir */
body {
  margin: 0; padding: 0;
  font-family: 'Segoe UI', Arial, sans-serif;
  background-color: #f4f4f4;
  overflow-x: hidden;
}

.app-layout { display: flex; width: 100%; min-height: 100vh; }

.sidebar {
  width: 220px; background-color: #2c3e50; color: #fff;
  display: flex; flex-direction: column; position: fixed;
  height: 100vh; left: 0; top: 0; border-right: 1px solid #34495e;
  z-index: 1000; overflow-y: auto;
}

.sidebar-header { padding: 20px; background-color: #1a252f; text-align: center; border-bottom: 1px solid #34495e; }
.sidebar-header h2 { margin: 0; font-size: 18px; letter-spacing: 1px; }

.menu-list { list-style: none; padding: 0; margin: 0; }
.menu-list li {
  padding: 15px 20px; cursor: pointer; border-bottom: 1px solid #34495e;
  font-size: 14px; color: #bdc3c7; transition: all 0.2s;
}
.menu-list li:hover { background-color: #34495e; color: #fff; padding-left: 25px; }
.menu-list li.active { background-color: #0058a3; color: white; font-weight: bold; border-left: 4px solid #ffdb00; }

.preview-area {
  margin-left: 220px; width: calc(100% - 220px); background-color: #fff;
  min-height: 100vh; padding: 20px; box-sizing: border-box; transition: all 0.3s ease; 
}
.preview-area.full-screen { margin-left: 0 !important; width: 100% !important; padding: 0 !important; }

.component-wrapper { width: 100%; background: white; border: 1px dashed #ccc; min-height: 500px; position: relative; }
.component-wrapper.no-border { border: none; }

.close-preview-btn {
  position: fixed; top: 15px; left: 15px; z-index: 9999; 
  width: 40px; height: 40px; background-color: #2c3e50; color: white;
  border: none; border-radius: 50%; font-size: 20px; font-weight: bold;
  cursor: pointer; box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  display: flex; align-items: center; justify-content: center;
  transition: transform 0.2s, background-color 0.2s;
}
.close-preview-btn:hover { background-color: #1a252f; transform: scale(1.1); }
</style>