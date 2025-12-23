<template>
  <span 
    class="base-icon"
    :class="{ 'is-clickable': clickable }"
    :style="{ fontSize: size }"
  >
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    size: {
      type: String,
      default: '16px' 
    },
    clickable: {
      type: Boolean,
      default: false 
    }
  }
}
</script>

<style scoped>
.base-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: black;
}

.is-clickable {
  cursor: pointer;
}
</style>