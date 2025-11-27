<template>
  <div class="address-box">
    <div class="box-header">
      <div class="header-left-icon">
        <slot name="icon"></slot>
        <span>{{ title }}</span>
      </div>
      <div class="header-actions">
        <button class="icon-btn-sm"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></button>
        <button class="icon-btn-sm"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
      </div>
    </div>
    <div class="box-content">
      <span v-if="badge" class="badge">{{ badge }}</span>
      <div class="user-info">
        <strong>{{ userName }} {{ userPhone }}</strong>
        <p>{{ userAddress }}</p>
      </div>
      <a href="#" class="add-new-link">{{ addNewText }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    userName: String,
    userPhone: String,
    userAddress: String,
    addNewText: String,
    badge: String
  }
}
</script>

<style scoped>
.address-box { flex: 1; border: 1px solid #dfdfdf; border-radius: 4px; padding: 24px; position: relative; }
.box-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px; }
.header-left-icon { display: flex; gap: 10px; font-weight: 700; font-size: 14px; align-items: center; }
.icon-btn-sm { background: none; border: none; cursor: pointer; padding: 5px; border-radius: 4px; }
.icon-btn-sm:hover { background: #f5f5f5; }
.badge { background: #e5e5e5; font-size: 12px; font-weight: 700; padding: 4px 8px; margin-bottom: 12px; display: inline-block; }
.user-info strong { display: block; font-size: 14px; margin-bottom: 4px; }
.user-info p { margin: 0; font-size: 14px; color: #484848; line-height: 1.5; }
.add-new-link { display: block; margin-top: 15px; font-size: 12px; font-weight: 700; color: #111; text-decoration: underline; text-align: right; }
</style>