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
          <h2 class="modal-title">{{ category.title }}</h2>
          <p class="modal-description">Details about {{ category.title }}.</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import BaseButton from '../atoms/BaseButton.vue';

const props = defineProps({
  isOpen: { type: Boolean, required: true },
  category: { type: Object, default: () => ({ title: '' }) }
});
const emit = defineEmits(['close']);
</script>

<style scoped>
.modal-backdrop {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5); z-index: 2000;
  display: flex; justify-content: flex-start;
}
.modal-sidebar {
  width: 450px; max-width: 85vw; height: 100%;
  background: white; padding: 30px 50px; box-sizing: border-box;
  overflow-y: auto; box-shadow: 2px 0 10px rgba(0,0,0,0.1);
  position: relative;
}
.modal-close-btn { position: absolute; top: 30px; left: 30px; z-index: 10; }
.modal-title { margin-top: 0; }
</style>
