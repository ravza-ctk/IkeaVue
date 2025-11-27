<template>
  <p class="paragraph-atom">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: 'Paragraph'
}
</script>

<style scoped>
.paragraph-atom {
  font-size: 13px;
  line-height: 1.5;
  margin-bottom: 16px;
  color: #444; 
  max-width: 90%; 
}
</style>