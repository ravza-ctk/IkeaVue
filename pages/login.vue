<template>
  <div class="page-wrapper">
    <div class="content-container">
      <BaseBreadcrumb :items="breadcrumbItems" />
      <div class="main-grid">
        <InfoBanner v-if="!userStore.user" />
        
        <LoginForm v-if="!userStore.user" />
        <div v-else class="loading-state">
             <p>Giriş yapıldı, yönlendiriliyorsunuz...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/useUserStore';
import { useRouter } from 'vue-router';
import { watchEffect } from 'vue';

definePageMeta({
  layout: 'default' 
});

const userStore = useUserStore();
const router = useRouter();

const breadcrumbItems = [
  { text: 'Ana Sayfa', href: '/' },
  { text: 'Üye Girişi' }
];

watchEffect(() => {
    if (userStore.user) {
        router.push('/account');
    }
});
</script>

<style scoped>
.page-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding-top: 180px; 
  padding-bottom: 80px;
  background-color: white;
}

.content-container {
  width: 100%;
  max-width: 1150px; 
  padding: 0 40px;   
  margin: 0 auto; 
}

.main-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
}

.loading-state {
    width: 100%;
    text-align: center;
    font-size: 18px;
    padding: 50px;
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
