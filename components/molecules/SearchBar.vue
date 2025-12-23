<template>
  <div class="search-bar-wrapper">
    <span class="search-icon">🔍</span>
    <BaseInput 
      class="search-input"
      placeholder="SANDLÖPARE Koleksiyonu"
      variant="minimal"
    />
  </div>
</template>

<script>
import BaseInput from '../atoms/BaseInput.vue';

export default {
  components: { BaseInput }
}
</script>

<style scoped>
.search-bar-wrapper {
  flex: 1;
  background: #f2f2f2;
  border-radius: 40px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.search-icon { font-size: 18px; opacity: 0.7; }
.search-icon { font-size: 18px; opacity: 0.7; }
/* .search-input handled by BaseInput or passed class if needed, checking BaseInput implementation... BaseInput accepts classes. 
   But the BaseInput has 'width: 100%' in base class. 
   Original search-input had background transparent, border none. 
   'variant-minimal' has border none, background transparent. 
   So we can just remove the .search-input style here or keep it minimum.
*/
</style>