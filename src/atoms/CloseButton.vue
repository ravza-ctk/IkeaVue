<template>
  <button class="close-full-page-btn" @click="$emit('click')" title="Kapat ve Menüye Dön">
    <svg 
      width="24" height="24" viewBox="0 0 24 24" 
      fill="none" stroke="currentColor" stroke-width="2" 
      stroke-linecap="round" stroke-linejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  </button>
</template>

<script>
export default {
  name: 'CloseButton',
  emits: ['click']
}
</script>

<style scoped>
.close-full-page-btn {
  position: fixed;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  background-color: #cc0008; 
  color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10000;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  transition: transform 0.2s, background-color 0.2s;
}

.close-full-page-btn:hover {
  background-color: #a30006;
  transform: scale(1.1);
}

.close-full-page-btn svg {
  width: 20px;
  height: 20px;
}
</style>