<template>
  <div 
    class="color-opt" 
    :class="{ selected: isSelected }"
    @click="$emit('select')"
  >
    <img :src="image" :alt="alt">
  </div>
</template>

<script setup>
defineProps({
  image: { type: String, required: true },
  alt: { type: String, default: 'Renk Seçeneği' },
  isSelected: { type: Boolean, default: false }
});

defineEmits(['select']);
</script>

<style scoped>
.color-opt { 
  width: 40px; height: 40px; 
  border: 1px solid #dfdfdf; 
  cursor: pointer; 
  transition: border-color 0.2s;
}
.color-opt img { 
  width: 100%; height: 100%; 
  object-fit: cover; 
}
.color-opt.selected { 
  border: 2px solid #111; 
}
.color-opt:hover {
  border-color: #999;
}
</style>