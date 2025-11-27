<template>
  <form class="tracking-form" @submit.prevent="handleSubmit">
    <div class="form-group">
      <IkeaSelect 
        v-model="form.verificationMethod"
        placeholder="Doğrulama Yöntemi"
        :options="[
          { value: 'phone', text: 'Telefon Numarası' },
          { value: 'email', text: 'E-Posta Adresi' }
        ]"
      />
    </div>
    
    <div class="form-group">
      <IkeaInput 
        v-model="form.orderNumber"
        placeholder="Sipariş Numarası"
      />
    </div>

    <IkeaButton type="submit">Sorgula</IkeaButton>
  </form>
</template>

<script setup>
import { reactive } from 'vue';
import IkeaInput from '../atoms/IkeaInput.vue';
import IkeaSelect from '../atoms/IkeaSelect.vue';
import IkeaButton from '../atoms/IkeaButton.vue';

const form = reactive({
  verificationMethod: '',
  orderNumber: ''
});

const handleSubmit = () => {
  console.log('Sorgulanıyor:', { ...form });
};
</script>

<style scoped>
.tracking-form { display: flex; flex-direction: column; gap: 25px; }
.form-group { width: 100%; }
</style>