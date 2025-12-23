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

    <BaseButton type="submit">Sorgula</BaseButton>
  </form>
</template>

<script setup>
import { reactive } from 'vue';
import BaseInput from '../atoms/BaseInput.vue';
import IkeaSelect from '../atoms/IkeaSelect.vue';
import BaseButton from '../atoms/BaseButton.vue';
import BaseField from './BaseField.vue';

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
</style>