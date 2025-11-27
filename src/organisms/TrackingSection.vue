<template>
  <div class="content-container">
    
    <div class="form-column">
      <p class="page-description">
        Siparişiniz sonrasında e-posta adresinize gönderdiğimiz sipariş numaranızı kullanarak siparişinizin kargo sürecini sorgulayabilirsiniz.
      </p>
      <TrackingForm />
    </div>

    <div class="image-column">
      <img src="https://cdn.ikea.com.tr/_assets/img/page/siparis-takibi.jpg" alt="IKEA Teslimat" class="tracking-image" />
    </div>

  </div>
</template>

<script setup>
import TrackingForm from '../molecules/TrackingForm.vue';
</script>

<style scoped>
.content-container {
  display: flex;
  gap: 60px;
  align-items: flex-start;
}

.form-column { flex: 1; max-width: 500px; }
.image-column { flex: 1; }

.page-description {
  font-size: 14px; line-height: 1.6; color: #484848; margin-bottom: 30px;
}

.tracking-image {
  width: 100%; height: auto; display: block; object-fit: cover;
}

@media (max-width: 900px) {
  .content-container { flex-direction: column; gap: 40px; }
  .form-column { max-width: 100%; }
}
</style>