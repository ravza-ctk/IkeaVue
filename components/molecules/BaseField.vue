<template>
  <div class="base-field">
    <label v-if="label" class="field-label">{{ label }}</label>
    
    <slot></slot>
    
    <span v-if="hint" class="field-hint">{{ hint }}</span>
    <span v-if="error" class="field-error">{{ error }}</span>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  hint: String,
  error: String
});
</script>

<style scoped>
.base-field {
  margin-bottom: 20px;
  width: 100%;
}

.field-label {
  display: block;
  font-size: 14px;
  font-weight: 400;
  color: #484848;
  margin-bottom: 8px;
}

.field-hint {
  display: block;
  margin-top: 8px;
  font-size: 12px;
  color: #767676;
}

.field-error {
  display: block;
  margin-top: 5px;
  font-size: 12px;
  color: #cc0008;
}
</style>
