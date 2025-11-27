<template>
  <transition name="slide-fade">
    <div v-if="isOpen" class="modal-backdrop" @click="$emit('close')">
      
      <div class="modal-sidebar" @click.stop>
        

        <div class="sidebar-content">
          <BrandSection />

          <NavigationList :items="menuItems" />
        </div>
      </div>

    </div>
  </transition>
</template>

<script>
import CloseButton from '../atoms/CloseButtonModal.vue';
import BrandSection from '../molecules/BrandSection.vue';
import NavigationList from '../molecules/NavigationList.vue';

export default {
  name: 'SidebarModal',
  components: {
    CloseButton,
    BrandSection,
    NavigationList
  },
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
.slide-fade-enter-active, .slide-fade-leave-active { transition: opacity 0.3s ease; }
.slide-fade-enter-from, .slide-fade-leave-to { opacity: 0; }

.modal-backdrop {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5); z-index: 2000;
  display: flex; justify-content: flex-start;
}

.modal-sidebar {
  width: 450px; max-width: 85vw; height: 100%;
  background: white; 
  padding: 30px 50px;
  box-sizing: border-box;
  overflow-y: auto; 
  box-shadow: 2px 0 10px rgba(0,0,0,0.1);
  position: relative; 
}
</style>