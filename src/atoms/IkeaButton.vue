<template>
  <button class="ikea-btn">
    <slot></slot>
  </button>
</template>

<style scoped>
.ikea-btn {
  background-color: #111;
  color: white;
  border: none;
  border-radius: 999px;
  padding: 16px 60px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s;
}
.ikea-btn:hover { background-color: #333; }
</style>