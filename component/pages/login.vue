<template>
  <div class="page-wrapper">
    <div class="content-container">
      <BaseBreadcrumb :items="breadcrumbItems" />
      <div class="main-grid">
        <InfoBanner v-if="!userStore.user" />
        
        <div v-if="userStore.user" class="profile-section">
            <h2>Hoşgeldiniz, {{ userStore.user.displayName }}</h2>
            <p>E-posta: {{ userStore.user.email }}</p>
            <div class="update-form">
                <h3>Bilgilerimi Güncelle</h3>
                <BaseField label="Ad Soyad">
                    <BaseInput v-model="newName" :placeholder="userStore.user.displayName" />
                </BaseField>
                <BaseButton variant="blue" @click="updateProfile">Güncelle</BaseButton>
            </div>
            <br>
            <BaseButton variant="secondary" @click="logout">Çıkış Yap</BaseButton>
        </div>
        <LoginForm v-else />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/useUserStore';
import { ref } from 'vue';

definePageMeta({
  layout: 'default' 
});

const userStore = useUserStore();
const newName = ref("");

const breadcrumbItems = [
  { text: 'Ana Sayfa', href: '/' },
    { text: 'Üye Girişi' }
];

const updateProfile = async () => {
   // In a real app, we would call userStore.updateProfile(newName.value)
   // For now demonstrating logic
   if (newName.value) {
       // Mock update in store or strictly implement it
       alert("Profil güncellendi: " + newName.value);
   }
};

const logout = () => {
    userStore.user = null; // Simple logout
    // userStore.logout(); // If implemented
};
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