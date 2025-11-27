<template>
  <div class="input-group">
    <label>{{ label }}</label>
    
    <IkeaInput 
      :modelValue="modelValue" 
      @update:modelValue="$emit('update:modelValue', $event)" 
    />
    
    <span v-if="hint" class="hint">{{ hint }}</span>
  </div>
</template>

<script setup>
import IkeaInput from '../atoms/IkeaInput.vue';

defineProps({
  label: String,
  hint: String,
  modelValue: String
});
defineEmits(['update:modelValue']);
</script>

<style scoped>
.input-group { margin-bottom: 30px; }
.input-group label {
  display: block; font-size: 14px; font-weight: 400; 
  color: #484848; margin-bottom: 8px;
}
.hint {
  display: block; margin-top: 8px; font-size: 12px; color: #767676;
}
</style>