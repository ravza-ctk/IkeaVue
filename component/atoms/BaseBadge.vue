<template>
  <div class="base-badge-atom" :class="['type-' + type, { 'sku-style': isSku }]">
    
    <!-- SKU CONTENT -->
    <template v-if="type === 'sku'">
      <slot></slot>
      <span v-if="showInfo" class="info-i">i</span>
    </template>
    
    <!-- MSC CONTENT -->
    <template v-else-if="type === 'msc'">
      <svg viewBox="0 0 24 24" fill="white" width="24" height="24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
      <span>MSC</span>
    </template>

    <!-- OTHER BADGES (Local, New, Custom) -->
    <template v-else>
      <slot></slot>
    </template>

  </div>
</template>

<script>
export default {
  name: 'BaseBadge',
  props: {
    type: { 
      type: String, 
      default: 'custom',
      validator: (val) => ['msc', 'local', 'new', 'sku', 'custom'].includes(val)
    },
    // Only for SKU
    showInfo: { type: Boolean, default: false }
  },
  computed: {
    isSku() { return this.type === 'sku'; }
  }
}
</script>

<style scoped>
.base-badge-atom {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 12px;
  border-radius: 4px;
}

/* MSC */
.type-msc {
  background-color: #0058a3; 
  width: 50px; height: 30px;
  color: white; font-size: 10px; gap: 2px;
  padding: 2px;
}

/* Local */
.type-local {
  background-color: #cc0008; 
  color: white; 
  padding: 4px 8px;
}

/* New */
.type-new {
  background-color: #ef7c00; 
  color: white; 
  padding: 4px 8px;
}

/* SKU */
.type-sku {
  background: #111; 
  color: white; 
  padding: 2px 6px; 
  font-size: 11px; 
  gap: 4px;
}

.info-i { 
  border: 1px solid white; border-radius: 50%; width: 12px; height: 12px; 
  display: flex; justify-content: center; align-items: center; 
  font-size: 9px; font-style: italic; font-family: serif; 
}
</style>
