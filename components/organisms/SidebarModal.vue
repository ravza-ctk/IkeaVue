<template>
  <transition name="slide-fade">
    <div v-if="isOpen" class="modal-backdrop" @click="$emit('close')">
      
      <div class="modal-sidebar" @click.stop>
        <BaseButton 
          variant="icon" 
          size="icon-24" 
          shape="circle" 
          class="modal-close-btn"
          @click="$emit('close')"
        >
          <span style="font-size: 24px; line-height: 1;">&times;</span>
        </BaseButton>

        <div class="sidebar-content">
          <BrandSection />
          <div class="sidebar-menu">
            <BaseList :items="menuItems" variant="menu" />
          </div>
        </div>
      </div>

    </div>
  </transition>
</template>

<script>
import BaseButton from '../atoms/BaseButton.vue';
import BrandSection from '../molecules/BrandSection.vue';
import BaseList from '../molecules/BaseList.vue';

export default {
  name: 'SidebarModal',
  components: {
    BaseButton,
    BrandSection,
    BaseList
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
        { text: 'Mağazalarımız', href: '/stores' },
        { text: 'Hizmetler', href: '#' },
        { text: 'İyi Fikirler', href: '#' },
        { text: 'Sipariş Takibi', href: '#' },
        { text: 'Bize Ulaşın', href: '#' },
        { text: 'Evde Güvenlik', href: '#' },
        { text: 'Sosyal Sorumluluk', href: '#' },
        { text: 'IKEA Aile', href: '#' },
        { text: 'IKEA Kurumsal Satış', href: '#' },
        { text: 'İsveç Restoranı', href: '/restaurant' },
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

.modal-close-btn {
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: 10;
}
</style>