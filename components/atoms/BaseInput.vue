<template>
  <input 
    type="text" 
    class="base-input-atom"
    :class="`variant-${variant}`"
    :placeholder="placeholder" 
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    modelValue: String,
    placeholder: String,
    variant: {
      type: String,
      default: 'default',
      validator: (val) => ['default', 'signup', 'minimal'].includes(val)
    }
  },
  emits: ['update:modelValue']
}
</script>

<style scoped>
.base-input-atom {
  width: 100%;
  outline: none;
  font-size: 14px;
  box-sizing: border-box;
  transition: border-color 0.2s;
  color: #111;
}

/* --- VARIANTS --- */

/* Default (IkeaInput) */
.variant-default {
  padding: 16px 15px;
  border: 1px solid #929292;
  border-radius: 4px;
}
.variant-default:focus {
  border-color: #111;
}

/* Signup (IkeaInputSignup) */
.variant-signup {
  height: 48px;
  border: 1px solid #dfdfdf;
  border-radius: 2px;
  padding: 0 15px;
  font-size: 16px;
  color: blue; /* As per original */
}
.variant-signup:focus {
  border-color: #0058a3;
}

/* Minimal (SearchInput) */
.variant-minimal {
  border: none;
  background: transparent;
  padding: 0;
}
</style>
