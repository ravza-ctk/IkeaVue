<template>
  <div class="button-card-molecule">
    
    <SectionTitle>{{ title }}</SectionTitle>
    
    <Paragraph>{{ paragraph }}</Paragraph>
    
    <BaseButton>{{ buttonText }}</BaseButton>

  </div>
</template>

<script>
import SectionTitle from '../atoms/SectionTitle.vue';
import Paragraph from '../atoms/Paragraph.vue';
import BaseButton from '../atoms/BaseButton.vue';

export default {
  name: 'ButtonCard',
  components: {
    SectionTitle,
    Paragraph,
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