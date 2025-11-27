<template>
  <button class="nav-btn">
    <slot></slot>
  </button>
</template>

<style scoped>
.nav-btn {
  width: 44px;
  height: 44px;
  background-color: #111;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 24px;
  line-height: 40px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 4px;
  transition: opacity 0.3s;
}

@media (max-width: 768px) {
  .nav-btn { display: none; }
}
</style>