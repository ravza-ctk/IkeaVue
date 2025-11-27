<template>
  <li class="menu-item">
    <a :href="link">{{ text }}</a>
  </li>
</template>

<script>
export default {
  props: {
    text: String,
    link: String
  }
}
</script>

<style scoped>
.menu-item {
  margin: 18px 0;
  padding: 0;
  border: none;
  background: none !important;
}

a {
  text-decoration: none;
  color: #111;
  font-size: 14px;
  font-weight: 400;
  display: inline-block;
  background: transparent !important;
  outline: none !important;
  box-shadow: none !important;
}

a:hover, a:focus, a:active, a:visited {
  display: inline-block;
  line-height: 20px;
  padding-bottom: 2px;
  border-bottom: 1px solid transparent;
  text-decoration: none !important;
  background: transparent !important;
  box-shadow: none !important;
  color: #111;
}

a:hover {
  border-bottom-color: #111;
  color: #111 !important;
}
</style>