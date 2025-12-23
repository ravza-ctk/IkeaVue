<template>
  <div class="checkout-layout">
    <header class="checkout-header">
      <div class="logo-container">
        <!-- Text or Logo -->
        <h1 style="color:#0058a3; font-weight:bold;">IKEA</h1>
      </div>
    </header>
    <main class="main-content">
      <slot />
    </main>
    <footer class="checkout-footer">
      <p>&copy; 2024 IKEA - Güvenli Ödeme</p>
    </footer>
  </div>
</template>

<style scoped>
.checkout-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fff;
}
.checkout-header {
  height: 80px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  padding: 0 40px;
}
.main-content {
  flex: 1;
  padding-top: 20px; 
}
.checkout-footer {
    padding: 20px;
    text-align: center;
    border-top: 1px solid #ddd;
    font-size: 12px;
    color: #666;
}
</style>
