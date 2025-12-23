<template>
  <div class="section-wrapper">
    <h1 class="section-title">Sipariş Takibi</h1>

    <div class="content-container">
      
      <div class="form-column">
        <BaseText variant="paragraph" class="page-description">
          Siparişiniz sonrasında e-posta adresinize gönderdiğimiz sipariş numaranızı kullanarak siparişinizin kargo sürecini sorgulayabilirsiniz.
        </BaseText>
        <TrackingForm />
      </div>

      <div class="image-column">
        <img 
          src="https://cdn.ikea.com.tr/_assets/img/page/siparis-takibi.jpg" 
          alt="IKEA Teslimat Çalışanı" 
          class="tracking-image" 
        />
      </div>

    </div>
  </div>
</template>

<script setup>
import TrackingForm from '../molecules/TrackingForm.vue';
import BaseText from '../atoms/BaseText.vue';
</script>

<style scoped>
.section-wrapper {
  max-width: 1200px; /* İçeriği çok yayılmaktan kurtarır */
  margin: 0 auto;
  padding: 20px;
}

.section-title {
  text-align: center;
  font-size: 2.5rem; /* Görseldeki gibi büyük font */
  font-weight: 700;
  margin-bottom: 40px;
  color: #111;
}

.content-container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start; /* Üstten hizalama */
  justify-content: space-between;
}

.form-column {
  flex: 0 0 45%; /* %50 yerine biraz boşluk bırakmak için kıstım */
  max-width: 45%;
  padding-right: 20px;
  /* Görselde form biraz daha yukarıdan başlıyor gibi, margin gerekmez */
}

.image-column {
  flex: 0 0 50%;
  max-width: 50%;
}

.page-description {
  margin-bottom: 30px;
  line-height: 1.5;
  color: #484848;
}

.tracking-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border-radius: 4px; /* Hafif bir yumuşatma varsa */
}

@media (max-width: 900px) {
  .content-container { 
    flex-direction: column-reverse; /* Mobilde resim üstte kalsın istersen column-reverse yapabilirsin, yoksa normal column */
  }
  .form-column, .image-column { 
    flex: 0 0 100%; 
    max-width: 100%; 
    padding: 0;
  }
  .image-column {
    margin-bottom: 20px;
  }
}
</style>