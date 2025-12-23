<template>
  <div class="content-container">
    
    <div class="form-column">
      <BaseText variant="paragraph" class="page-description">
        Siparişiniz sonrasında e-posta adresinize gönderdiğimiz sipariş numaranızı kullanarak siparişinizin kargo sürecini sorgulayabilirsiniz.
      </BaseText>
      <TrackingForm />
    </div>

    <div class="image-column">
      <img src="https://cdn.ikea.com.tr/_assets/img/page/siparis-takibi.jpg" alt="IKEA Teslimat" class="tracking-image" />
    </div>

  </div>
</template>

<script setup>
import TrackingForm from '../molecules/TrackingForm.vue';
import BaseText from '../atoms/BaseText.vue';
</script>

<style scoped>
.content-container {
  display: flex;
  flex-wrap: wrap; /* Allow wrapping like a grid row */
  align-items: flex-start;
}

.form-column,
.image-column {
  flex: 0 0 50%;
  max-width: 50%;
  box-sizing: border-box; /* Ensure padding doesn't affect width */
  padding-right: 15px;
  padding-left: 15px;
}

.page-description {
  margin-bottom: 30px;
}

.tracking-image {
  width: 100%; height: auto; display: block; object-fit: cover;
}

@media (max-width: 900px) {
  .content-container { flex-direction: column; }
  .form-column, .image-column { flex: 0 0 100%; max-width: 100%; }
}
</style>