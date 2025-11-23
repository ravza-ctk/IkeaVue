<template>
  <transition name="slide-fade">
    <div v-if="isOpen" class="modal-backdrop" @click="$emit('close')">
      
      <div class="modal-sidebar" @click.stop>
        
        <div class="header">
          <button @click="$emit('close')" class="close-button">
            &times;
          </button>
          
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Ikea_logo.svg" 
            alt="IKEA Logo" 
            class="ikea-logo"
          >
        </div>

        <div class="menu-titles">
          <h1>Ürünler</h1>
          <h1>Odalar</h1>
        </div>

        <ul class="menu-list">
          <li v-for="item in menuItems" :key="item.text">
            <a :href="item.link">{{ item.text }}</a>
          </li>
        </ul>
      </div>

    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalCategories',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      menuItems: [
        { text: 'Mağazalarımız', link: '#' },
        { text: 'Hizmetler', link: '#' },
        { text: 'İyi Fikirler', link: '#' },
        { text: 'Sipariş Takibi', link: '#' },
        { text: 'Bize Ulaşın', link: '#' },
        { text: 'Evde Güvenlik', link: '#' },
        { text: 'Sosyal Sorumluluk', link: '#' },
        { text: 'IKEA Aile', link: '#' },
        { text: 'IKEA Kurumsal Satış', link: '#' },
        { text: 'İsveç Restoranı', link: '#' },
      ]
    };
  }
};
</script>

<style scoped>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: opacity 0.3s ease;
}

.slide-fade-enter-from, .slide-fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active .modal-sidebar {
  transition: transform 0.3s ease-out;
}
.slide-fade-leave-active .modal-sidebar {
  transition: transform 0.3s ease-in;
}

.slide-fade-enter-from .modal-sidebar,
.slide-fade-leave-to .modal-sidebar {
  transform: translateX(-100%);
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; 
  height: 100%; 
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  display: flex;
  justify-content: flex-start;
}

.modal-sidebar {
  width: 450px;
  max-width: 85vw;
  height: 100%;
  background: white;
  padding: 25px 40px;
  box-sizing: border-box;
  overflow-y: auto;
  box-shadow: 2px 0 10px rgba(0,0,0,0.1);
}

.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
}

.close-button {
  font-size: 32px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  font-weight: 300;
}

.ikea-logo {
  width: 90px; 
  height: auto;
}

.menu-titles {
  margin-bottom: 40px;
}

.menu-titles h1 {
  font-size: 32px;
  font-weight: 700;
  margin: 10px 0;
  line-height: 1.1;
  color: #111;
  letter-spacing: -0.5px;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-list li {
  margin: 18px 0;
}

.menu-list a {
  text-decoration: none;
  color: #111; 
  font-size: 14px;
  font-weight: 700;
  display: block;
}

.menu-list a:hover {
  text-decoration: underline; 
  text-underline-offset: 4px; 
}
</style>