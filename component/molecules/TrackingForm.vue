<template>
  <form class="tracking-form" @submit.prevent="handleSubmit">
    <BaseField>
      <IkeaSelect 
        v-model="form.verificationMethod"
        placeholder="Doğrulama Yöntemi"
        :options="[
          { value: 'phone', text: 'Telefon Numarası' },
          { value: 'email', text: 'E-Posta Adresi' }
        ]"
      />
    </BaseField>
    
    <BaseField>
      <BaseInput 
        v-model="form.orderNumber"
        placeholder="Sipariş Numarası"
      />
    </BaseField>

    <div class="button-wrapper">
      <BaseButton type="submit" variant="black">Sorgula</BaseButton>
    </div>
  </form>
</template>

<script setup>
import { reactive } from 'vue';
/* Importlarınız aynen kalabilir */
import BaseInput from '../atoms/BaseInput.vue';
import IkeaSelect from '../atoms/IkeaSelect.vue';
import BaseButton from '../atoms/BaseButton.vue';
import BaseField from './BaseField.vue'; // Yolun doğru olduğundan emin ol

const form = reactive({
  verificationMethod: '',
  orderNumber: ''
});

const handleSubmit = () => {
  console.log('Sorgulanıyor:', { ...form });
};
</script>

<style scoped>
.tracking-form { 
  display: flex; 
  flex-direction: column; 
  gap: 20px; /* Inputlar arası boşluk */
  max-width: 400px; /* Formun çok uzamasını engeller */
}

.button-wrapper {
  margin-top: 10px;
}
</style>