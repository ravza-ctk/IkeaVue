<template>
  <div id="app">
    <HeaderComponent @open-modal="isModalOpen = true" /> 
    
    <ModalCategories 
      :is-open="isModalOpen" 
      @close="isModalOpen = false" 
    />

    <main class="main-content">
      <SignupLogin /> 
    </main>

    <main class="main-content">
      <CategoriesSlider /> 
    </main>

    <main class="main-content">
      <Card /> 
    </main>

    <Footer />
  </div>
</template>

<script>
import { ref } from 'vue'; 
import HeaderComponent from "./components/pages/Header.vue";
import Footer from "./components/pages/Footer.vue";
import SignupLogin from "./components/pages/SignupLogin.vue";
import CategoriesSlider from "./components/pages/CategoriesSlider.vue";
import Card from "./components/pages/Card.vue";
import ModalCategories from './components/pages/ModalCategories.vue'; 

export default {
  name: "App",
  components: {
    HeaderComponent,
    Footer,
    SignupLogin,
    CategoriesSlider,
    Card,
    ModalCategories 
  },
  setup() {
    const isModalOpen = ref(false); 

    return {
      isModalOpen 
    };
  }
};
</script>

<style>

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden; 
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

.main-content {
  flex: 1; 
  margin-top: 140px; 
  width: 100%;
}
</style>