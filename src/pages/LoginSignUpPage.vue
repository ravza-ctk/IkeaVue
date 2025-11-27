<template>
  <div class="page-wrapper">
    
    <div class="content-container">
      
      <AppBreadcrumb />

      <div class="main-grid">
        
        <InfoBanner />

        <LoginForm />

      </div>

    </div>
  </div>
</template>

<script setup>
import AppBreadcrumb from '../molecules/AppBreadcrumbSignup.vue';
import InfoBanner from '../organisms/InfoBanner.vue';
import LoginForm from '../organisms/LoginForm.vue';
</script>

<style scoped>

.page-wrapper {
  width: 100vw;
  min-height: 100vh;
  
  display: flex;
  justify-content: flex-start;
  padding-top: 20px; 
  padding-bottom: 80px;
 
}

.content-container {
  width: 100%;
  max-width: 1150px; 
  padding: 0 40px;   
  margin: 0; 
}

.main-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
}

@media (max-width: 900px) {
  .main-grid {
    flex-direction: column;
    gap: 40px;
  }

  .content-container {
    padding: 0 20px;
  }
}
</style>