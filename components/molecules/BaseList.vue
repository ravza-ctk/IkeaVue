<template>
  <div class="base-list-molecule">
    <h3 v-if="title" class="list-title">{{ title }}</h3>
    
    <ul class="list-ul">
      <li 
        v-for="(item, index) in normalizedItems" 
        :key="index" 
        class="list-li"
        :class="`variant-${variant}`"
      >
        <BaseLink 
          :variant="variant" 
          :text="item.text" 
          :href="item.href"
          :color="item.color"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import BaseLink from '../atoms/BaseLink.vue';

const props = defineProps({
  title: String,
  items: {
    type: Array,
    required: true
  },
  variant: {
    type: String,
    default: 'menu', // menu, footer
    validator: val => ['menu', 'footer'].includes(val)
  }
});

const normalizedItems = computed(() => {
  return props.items.map(item => {
    if (typeof item === 'string') {
      return { text: item, href: '#' }; // Default to # for footer links if string
    }
    return item; // Assume { text, href, color? }
  });
});
</script>

<style scoped>
.base-list-molecule {
  width: 100%;
}

.list-title {
  font-size: 20px; 
  font-weight: bold;
  margin-bottom: 16px;
  color: #111;
}

.list-ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-li {
  padding: 0;
}

/* Variant Styles for Spacing */
.list-li.variant-menu {
  margin: 18px 0;
}

.list-li.variant-footer {
  margin-bottom: 12px;
}
</style>
