<template>
  <button @click="$emit('click')" class="close-button-modal">
    &times;
  </button>
</template>

<style scoped>
.close-button {
   position: absolute; 
  top: 30px; 
  left: 30px; 
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.close-button svg {
  width: 24px;
  height: 24px;
}

.close-button svg path {
  stroke: #111; 
  stroke-width: 1.5;
}
</style>