<template>
  <button class="ikea-btn" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<style scoped>
.ikea-btn {
  width: 100%;        
  height: 56px;       
  
  background-color: #0058a3; 
  color: white;
  border: none;
  
  border-radius: 999px; 
  
  font-size: 14px;
  font-weight: 700;    
  cursor: pointer;
  margin-top: 15px;    
  transition: background-color 0.2s;
}

.ikea-btn:hover {
  background-color: #004f93;
}

.ikea-btn:active {
  transform: scale(0.99);
}
</style>