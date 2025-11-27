<template>
  <div class="footer-col-molecule">
    <h3>{{ title }}</h3> 
    <ul>
      <FooterLink v-for="item in items" :key="item">{{ item }}</FooterLink>
    </ul>
  </div>
</template>

<script>
import FooterLink from '../atoms/FooterLink.vue';
export default {
  components: { FooterLink },
  props: {
    title: { type: String, required: true },
    items: { type: Array, required: true }
  }
}
</script>

<style scoped>
.footer-col-molecule h3 { 
  font-size: 16px; 
  font-weight: bold;
  margin-bottom: 16px;
  color: #111;
}

.footer-col-molecule ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>