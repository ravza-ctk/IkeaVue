<template>
  <nav class="bottom-nav">
    <NavLink>Ürünler</NavLink>
    <NavLink>Odalar</NavLink>
    <NavLink color="red">Fırsatlar</NavLink>
    <NavLink>ŞAHANE KASIM</NavLink>
    <NavLink color="green">Yılbaşı</NavLink>
    <NavLink color="orange">YENİ</NavLink>
    <NavLink>İyi Fikirler</NavLink>
  </nav>
</template>

<script>
import NavLink from '../atoms/NavLink.vue';

export default {
  components: { NavLink }
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