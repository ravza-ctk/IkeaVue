<template>
  <li class="footer-link-atom">
    <slot></slot>
  </li>
</template>

<style scoped>
.footer-link-atom {
  margin-bottom: 12px;
  font-size: 14px;
  cursor: pointer;
  color: #444;
  transition: text-decoration 0.2s;
}

.footer-link-atom:hover {
  text-decoration: underline;
}
</style>