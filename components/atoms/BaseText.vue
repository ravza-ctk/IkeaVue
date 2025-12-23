<template>
  <component :is="tag" class="base-text-atom" :class="`variant-${variant}`">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'BaseText',
  props: {
    tag: {
      type: String,
      default: 'p',
      validator: (val) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div', 'strong', 'label', 'li', 'ul', 'a'].includes(val)
    },
    variant: {
      type: String,
      default: 'paragraph',
      validator: (val) => ['page-title', 'section-title', 'paragraph', 'label'].includes(val)
    }
  }
}
</script>

<style scoped>
.base-text-atom {
  margin: 0;
  color: #111;
}

/* Variants */
.variant-page-title {
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
}

.variant-section-title {
  font-size: 22px; 
  font-weight: bold;
  margin-bottom: 16px;
}

.variant-paragraph {
  font-size: 15px;
  line-height: 1.5;
  margin-bottom: 16px;
  color: #444; 
}
</style>
