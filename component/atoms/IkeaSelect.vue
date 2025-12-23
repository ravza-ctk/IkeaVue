<template>
  <div class="select-wrapper">
    <select 
      :value="modelValue" 
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option disabled value="">{{ placeholder }}</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <svg class="chevron-down" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
  placeholder: { type: String, default: 'Seçiniz' },
  options: { type: Array, default: () => [] }
});
</script>

<style scoped>
.select-wrapper { position: relative; width: 100%; }
.select-wrapper select { 
  width: 100%; padding: 16px 15px; 
  border: 1px solid #929292; border-radius: 4px; 
  font-size: 14px; color: #484848; 
  background-color: white; appearance: none; 
  cursor: pointer; 
  box-sizing: border-box;
}
.select-wrapper .chevron-down { 
  position: absolute; right: 15px; top: 50%; 
  transform: translateY(-50%); pointer-events: none; 
}
.select-wrapper select:focus { border-color: #111; }
</style>