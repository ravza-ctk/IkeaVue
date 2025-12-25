<template>
  <div class="form-column">
    <div class="form-container">
      <h2>Üye Girişi/Üye Ol</h2>

      <BaseField label="Cep Telefonu" hint="Cep telefon numaranızı başında 0 olmadan giriniz.">
        <BaseInput v-model="phoneNumber" placeholder="___ ___ __ __" />
      </BaseField>

      <BaseButton variant="blue" size="large" fullWidth @click="handleSubmit">
          Devam Et
      </BaseButton>

      <div class="help-link-wrapper">
        <a href="#" class="help-link">Yardıma İhtiyacım Var</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '~/stores/useUserStore';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const phoneNumber = ref("");

const handleSubmit = async () => {
  if (!phoneNumber.value) {
    alert("Lütfen telefon numaranızı giriniz.");
    return;
  }

  if (phoneNumber.value.length < 10) {
      alert("Lütfen geçerli bir telefon numarası giriniz.");
      return;
  }
  
  const email = phoneNumber.value + "@example.com";
  const password = "mockpassword123"; // Stronger password required by some policies?

  // Try to login first
  await userStore.login(email, password);

  if (userStore.error) {
      // If login failed, check if user needs to be registered
      if (userStore.error.includes("user-not-found") || userStore.error.includes("invalid-credential")) {
          // Reset error
          userStore.error = null;
          // Try to register
          await userStore.register(email, password, "User " + phoneNumber.value);
          
          if (userStore.error) {
               alert("Kayıt hatası: " + userStore.error);
          } else {
               alert("Hesap oluşturuldu ve giriş yapıldı!");
               // Redirect or update UI?
               const router = useRouter();
               router.push('/account');
          }
      } else {
          alert("Giriş Hatası: " + userStore.error);
      }
  } else {
      alert("Giriş Başarılı!");
      const router = useRouter();
      router.push('/account');
  }
};
</script>

<style scoped>
.form-column {
  flex: 1; 
  min-width: 300px;
  display: flex; 
  flex-direction: column; 
  justify-content: center;
  align-items: flex-start; 
  padding-left: 40px; 
}
.form-container { width: 100%; max-width: 448px; }
.form-container h2 { font-size: 22px; font-weight: 700; color: #111; margin-top: 0; margin-bottom: 30px; }
.help-link-wrapper { margin-top: 45px; text-align: center; }
.help-link { font-size: 14px; font-weight: 700; color: #111; text-decoration: underline; text-underline-offset: 3px; }
.toggle-mode { margin-top: 15px; text-align: center; cursor: pointer; color: #0058a3; text-decoration: underline; }

@media (max-width: 900px) {
  .form-column { padding-left: 0; align-items: center; }
  .form-container { max-width: 100%; }
}
</style>