<template>
  <div class="button-card-molecule">
    
    <BaseText variant="section-title" tag="h3">{{ title }}</BaseText>
    
    <BaseText variant="paragraph">{{ paragraph }}</BaseText>
    
    <BaseButton size="small">{{ buttonText }}</BaseButton>

  </div>
</template>

<script>
import BaseText from '../atoms/BaseText.vue';
import BaseButton from '../atoms/BaseButton.vue';

export default {
  name: 'ButtonCard',
  components: {
    BaseText,
    BaseButton
  },
  props: {
    title: { type: String, required: true },
    paragraph: { type: String, required: true },
    buttonText: { type: String, required: true }
  }
}


</script>

<style scoped>

</style>