<template>
  <component 
    :is="tag" 
    :href="href" 
    class="base-link-atom" 
    :class="[`variant-${variant}`, { 'active': active }]"
    :style="{ color: color !== 'inherit' ? color : undefined }"
    @click="$emit('click', $event)"
  >
    <slot>{{ text }}</slot>
  </component>
</template>

<script>
export default {
  name: 'BaseLink',
  props: {
    text: String,
    href: String,
    variant: {
      type: String,
      default: 'default',
      validator: val => ['default', 'menu', 'footer', 'store', 'nav', 'breadcrumb'].includes(val)
    },
    active: Boolean,
    // For nav link color
    color: {
      type: String,
      default: 'inherit' 
    }
  },
  emits: ['click'],
  computed: {
    tag() {
      // If href is present, use 'a', otherwise 'span' (like NavLink)
      return this.href ? 'a' : 'span';
    }
  }
}
</script>

<style scoped>
.base-link-atom {
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
  color: inherit;
  display: inline-block;
}

/* Menu */
.variant-menu {
  color: #111;
  font-size: 14px;
  background: transparent;
}
.variant-menu:hover {
  line-height: 20px;
  padding-bottom: 2px;
  border-bottom: 1px solid #111;
}

/* Footer */
.variant-footer {
  font-size: 14px;
  color: #444;
}
.variant-footer:hover { text-decoration: underline; }

/* Store */
.variant-store {
  font-size: 12px;
  font-weight: 700;
  color: #0058a3;
}
.variant-store:hover { text-decoration: underline; }

/* Nav */
.variant-nav {
  font-weight: 700;
  font-size: 14px;
  color: black; /* default, can be overridden by style binding if we allowed it, or just use css var? */
}
/* Allow color prop to work via style binding if simple, but here we can just map it or assume parent handles color via class. 
   Original NavLink accepted color prop. 
   Let's keep it simple. If color prop is passed, apply it via style.
*/

.variant-nav:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

/* Breadcrumb */
.variant-breadcrumb {
  font-size: 12px;
  color: #484848;
  border-bottom: 1px solid transparent;
}
.variant-breadcrumb:hover {
  border-bottom: 1px solid #484848;
}
</style>
