<template>
  <button class="base-button-atom" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  emits: ['click']
}
</script>

<style scoped>
.base-button-atom {
  padding: 10px 24px;
  background: #111; 
  border-radius: 24px; 
  color: white;
  border: none;
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
  margin-top: 5px;
  transition: background 0.3s;
}

.base-button-atom:hover {
  background: #333;
}
</style>