<template>
  <div class="user-actions">
    
    <div class="action-item">
      <BaseIcon size="16px">🏛️</BaseIcon>
      <span class="action-text">İl Seçiniz</span>
    </div>

    <div class="action-item">
      <BaseIcon size="16px">👤</BaseIcon>
      <span class="action-text">Hej! Üye Girişi / Üye Ol</span>
    </div>

    <div class="action-item">
      <BaseIcon size="20px" clickable>♡</BaseIcon>
    </div>

    <div class="action-item">
      <BaseIcon size="20px" clickable>🛒</BaseIcon>
    </div>

  </div>
</template>

<script>
import BaseIcon from '../atoms/BaseIcon.vue';

export default {
  name: 'UserActions',
  components: {
    BaseIcon
  }
}
</script>

<style scoped>
.user-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.action-item {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
    color: black; 
}

.action-text {
  font-size: 14px;
  font-weight: 600;
    color: black; 
}


</style>