<template>
  <input
    type="text"
    class="atom-search-input"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    placeholder: {
      type: String,
      default: 'Sandlöpare Koleksiyonu'
    },
    modelValue: String
  },
  emits: ['update:modelValue']
}
</script>

<style scoped>
.atom-search-input {
  border: none;
  background: transparent;
  width: 100%;
  outline: none;
  font-size: 15px;
  color: black;
}
</style>