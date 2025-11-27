<template>
  <ul class="menu-list">
    <MenuLink 
      v-for="item in items" 
      :key="item.text"
      :text="item.text"
      :link="item.link"
    />
  </ul>
</template>

<script>
import MenuLink from '../atoms/MenuLink.vue';

export default {
  components: { MenuLink },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.menu-list {
  list-style: none; padding: 0; margin: 0;
}
</style>