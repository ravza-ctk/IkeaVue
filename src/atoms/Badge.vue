<template>
  <div class="badge-wrapper">
    <div v-if="type === 'msc'" class="badge-msc">
      <svg viewBox="0 0 24 24" fill="white" width="24" height="24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
      <span>MSC</span>
    </div>
    
    <div v-else-if="type === 'local'" class="badge-box red">Lokal</div>
    <div v-else-if="type === 'new'" class="badge-box orange">Yeni</div>
  </div>
</template>

<script>
export default {
  props: {
    type: { type: String, default: null } // 'msc', 'local', 'new'
  }
}
</script>

<style scoped>
.badge-box { color: white; padding: 4px 8px; font-size: 12px; font-weight: 700; display: inline-block; }
.badge-box.red { background-color: #cc0008; } 
.badge-box.orange { background-color: #ef7c00; } 

.badge-msc {
  background-color: #0058a3; width: 50px; height: 30px;
  border-radius: 4px; display: flex; align-items: center; justify-content: center; padding: 2px;
  color: white; font-size: 10px; font-weight: bold; gap: 2px;
}
</style>