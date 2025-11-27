<template>
  <div class="form-column">
    <div class="form-container">
      <h2>Üye Girişi / Üye Ol</h2>

      <FormInputGroup 
        label="Cep Telefonu"
        hint="Cep telefon numaranızı başında 0 olmadan giriniz."
        v-model="phone"
      />

      <IkeaButton @click="handleSubmit">Devam Et</IkeaButton>

      <div class="help-link-wrapper">
        <a href="#" class="help-link">Yardıma İhtiyacım Var</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import FormInputGroup from '../molecules/FormInputGroup.vue';
import IkeaButton from '../atoms/IkeaButtonSignup.vue';

const phone = ref("");

const handleSubmit = () => {
  if (!phone.value) {
    alert("Lütfen telefon numarası girin.");
  } else {
    console.log("Giriş yapılıyor:", phone.value);
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

.form-container { 
  width: 100%; 
  max-width: 448px; 
}

.form-container h2 {
  font-size: 22px; 
  font-weight: 700; 
  color: #111;
  margin-top: 0; 
  margin-bottom: 30px;
}

.help-link-wrapper { 
  margin-top: 25px; 
  text-align: center; 
}

.help-link {
  font-size: 14px; 
  font-weight: 700; 
  color: #111;
  text-decoration: underline; 
  text-underline-offset: 3px; 
}

.help-link:hover { text-decoration: none; }

@media (max-width: 900px) {
  .form-column { 
    padding-left: 0; 
    align-items: center; 
  }
  .form-container { 
    max-width: 100%; 
  }
}
</style>