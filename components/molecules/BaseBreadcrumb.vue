<template>
  <nav class="base-breadcrumb">
    <template v-for="(item, index) in items" :key="index">
      
      <!-- Link Item -->
      <BaseLink 
        v-if="item.href"
        variant="breadcrumb" 
        :href="item.href"
      >
        {{ item.text }}
      </BaseLink>

      <!-- Current Item (Text only) -->
      <span v-else class="current">
        {{ item.text }}
      </span>

      <!-- Separator (don't show after last item) -->
      <span v-if="index < items.length - 1" class="separator">›</span>

    </template>
  </nav>
</template>

<script setup>
import BaseLink from '../atoms/BaseLink.vue';

defineProps({
  items: {
    type: Array, // [{ text: 'Home', href: '/' }, { text: 'Current' }]
    required: true
  }
});
</script>

<style scoped>
.base-breadcrumb {
  font-size: 12px;
  color: #484848;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.separator {
  margin: 0 6px;
  color: #929292;
  font-size: 14px;
  line-height: 1;
}

.current {
  color: #111;
  font-weight: 400;
}
</style>
