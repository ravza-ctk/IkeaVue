<template>
  <input 
    type="text" 
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="ikea-input"
  />
</template>

<script setup>
defineProps(['modelValue']);
defineEmits(['update:modelValue']);
</script>

<style scoped>
.ikea-input {
  width: 100%;
  height: 48px;
  border: 1px solid #dfdfdf;
  border-radius: 2px; 
  padding: 0 15px;
  font-size: 16px;
  color: blue;
  transition: border-color 0.2s;
  outline: none;
}
.ikea-input:focus { border-color: #0058a3; }
</style>