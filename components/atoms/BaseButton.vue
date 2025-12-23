<template>
  <button 
    class="base-button-atom" 
    :class="[
      `variant-${variant}`,
      `size-${size}`,
      `shape-${shape}`,
      { 'full-width': fullWidth }
    ]"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  emits: ['click'],
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (val) => ['primary', 'blue', 'danger', 'icon'].includes(val)
    },
    size: {
      type: String,
      default: 'medium', 
      validator: (val) => ['small', 'medium', 'big', 'large', 'icon-40', 'icon-24'].includes(val)
    },
    shape: {
      type: String,
      default: 'pill',
      validator: (val) => ['pill', 'circle'].includes(val)
    },
    fullWidth: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.base-button-atom {
  border: none;
  cursor: pointer;
  font-weight: 700;
  transition: background-color 0.2s, transform 0.1s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.base-button-atom:active {
  transform: scale(0.98);
}

.full-width {
  width: 100%;
}

/* --- VARIANTS --- */
.variant-primary {
  background-color: #111;
  color: white;
}
.variant-primary:hover {
  background-color: #333;
}

.variant-blue {
  background-color: #0058a3; /* IKEA Blue */
  color: white;
}
.variant-blue:hover {
  background-color: #004f93;
}

.variant-danger {
  background-color: #cc0008;
  color: white;
}
.variant-danger:hover {
  background-color: #a30006;
}

.variant-icon {
  background-color: transparent;
  color: #111;
  padding: 0;
}
.variant-icon:hover {
  background-color: rgba(0,0,0,0.05);
}

/* --- SHAPES --- */
.shape-pill {
  border-radius: 999px;
}
.shape-circle {
  border-radius: 50%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* --- SIZES --- */
.size-small {
  padding: 10px 24px;
  font-size: 13px;
  border-radius: 24px;
}
/* Adjust small/medium for circle/icon if needed or rely on width/height from parent or inline style for specific icons like 40px */
/* For simplicity, let's keep size classes as is, and allow circle buttons to set specific width/height via style or classes if standard sizes (small/med) don't fit 40x40. 
   Actually, let's add specific icon sizes? 
   Or just re-use. CloseButton was 40x40. CloseButtonModal was 24x24 inside 30 absolute?
   Let's allow width/height override or add size-icon-40.
*/
.size-icon-40 {
  width: 40px;
  height: 40px;
}
.size-icon-24 {
  width: 24px; 
  height: 24px;
}

.size-medium {
  padding: 16px 60px;
  font-size: 14px;
}

.size-big {
  height: 48px;
  font-size: 14px;
  padding: 0 20px;
}

.size-large {
  height: 56px;
  font-size: 14px;
  padding: 0 24px;
}
</style>