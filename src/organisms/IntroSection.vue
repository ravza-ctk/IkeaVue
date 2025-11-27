<template>
  <section class="intro-section">
    <h1 class="page-title">{{ title }}</h1>
    <p class="intro-text">
      <slot></slot> </p>
  </section>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
.intro-section { margin-bottom: 60px; max-width: 1200px; }
.page-title { font-size: 36px; font-weight: 700; margin-bottom: 20px; letter-spacing: -1px;}
.intro-text { font-size: 14px; line-height: 1.6; color: #484848; max-width: 900px;}
</style>