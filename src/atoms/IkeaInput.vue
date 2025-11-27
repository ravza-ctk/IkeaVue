<template>
  <input 
    type="text" 
    :placeholder="placeholder" 
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="ikea-input" 
  />
</template>

<script setup>
defineProps({
  placeholder: String,
  modelValue: String
});
</script>

<style scoped>
.ikea-input {
  width: 100%;
  padding: 16px 15px;
  border: 1px solid #929292;
  border-radius: 4px;
  font-size: 14px;
  color: #111;
  outline: none;
  box-sizing: border-box;
}
.ikea-input:focus { border-color: #111; }
</style>