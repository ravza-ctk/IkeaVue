<template>
  <div class="toggle-switch" @click="$emit('toggle')">
    <div class="toggle-circle" :class="{ active: isActive }"></div>
  </div>
</template>

<script>
export default {
  props: { isActive: Boolean }
}
</script>

<style scoped>
.toggle-switch {
  width: 48px; height: 28px; background: #929292; border-radius: 24px; position: relative; cursor: pointer;
}
.toggle-circle {
  position: absolute; left: 4px; top: 4px; width: 20px; height: 20px; background: white; border-radius: 50%; box-shadow: 0 1px 3px rgba(0,0,0,0.3); transition: 0.3s;
}
.toggle-circle.active { left: 24px; }
</style>