<template>
  <section class="intro-section">
    <BaseText variant="page-title" tag="h1">{{ title }}</BaseText>
    <BaseText variant="paragraph" class="intro-text">
      <slot></slot> 
    </BaseText>
  </section>
</template>

<script>
import BaseText from '../atoms/BaseText.vue';

export default {
  components: { BaseText },
  props: ['title']
}
</script>

<style scoped>
.intro-section { margin-bottom: 60px; max-width: 1200px; }
/* BaseText page-title is 36px/700. IntroSection h1 was 36px/700. Matches. */
/* BaseText paragraph is 14px/1.5. IntroSection p was 14px/1.6. Close enough. */
.intro-text { max-width: 900px; }
</style>