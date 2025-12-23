<template>
  <nav class="bottom-nav">
    <BaseLink variant="nav">Ürünler</BaseLink>
    <BaseLink variant="nav">Odalar</BaseLink>
    <BaseLink variant="nav" color="#cc0008">Fırsatlar</BaseLink>
    <BaseLink variant="nav">ŞAHANE KASIM</BaseLink>
    <BaseLink variant="nav" color="#008a00">Yılbaşı</BaseLink>
    <BaseLink variant="nav" color="#ef7c00">YENİ</BaseLink>
    <BaseLink variant="nav">İyi Fikirler</BaseLink>
  </nav>
</template>

<script>
import BaseLink from '../atoms/BaseLink.vue';

export default {
  components: { BaseLink }
}
</script>

<style scoped>
.bottom-nav {
  display: flex;
  gap: 25px;
  padding: 10px 25px;
  padding-left: 72px;
}
</style>