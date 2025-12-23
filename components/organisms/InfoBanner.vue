<template>
  <div class="blue-box">
    <BaseText variant="page-title" tag="h1" class="banner-title">IKEA Aile Hesabınız Bir Tık Uzağınızda!</BaseText>
    
    <div class="blue-content">
      <BaseText variant="paragraph" class="banner-text">IKEA Aile üyeliğiniz ile; iyi tasarımlı, kullanışlı ve kaliteli binlerce mobilya ve ev aksesuarı alışverişinizi kolayca ve hızla tamamlayın.</BaseText>
      <BaseText variant="paragraph" class="banner-text">IKEA Aile hesabınıza giriş yaparak bilgilerinize erişebilir ve güncelleyebilir, siparişlerinizi ve çeklerinizi takip edebilir, oluşturduğunuz favori listelerini kaydedip e-posta ile gönderebilirsiniz.</BaseText>
      <BaseText variant="paragraph" class="banner-text">Henüz IKEA Aile üyesi değilseniz; üyeliğinizi oluşturabilir, IKEA Aile avantajlarından faydalanmaya hemen başlayabilirsiniz.</BaseText>
    </div>
  </div>
</template>

<script setup>
import BaseText from '../atoms/BaseText.vue';
</script>

<style scoped>
.blue-box {
  flex: 1.4; min-width: 300px;
  background-color: #2986d7; color: white;
  padding: 130px 80px; 
  display: flex; flex-direction: column; justify-content: center;
}

.banner-title {
  font-size: 34px !important; font-weight: 700; margin-top: 0; margin-bottom: 30px; line-height: 1.2;color: white !important;
}

.banner-text {
  font-size: 14px; line-height: 1.6; margin-bottom: 20px; font-weight: 400; color: white !important;
}
.banner-text:last-child { margin-bottom: 0; }

@media (max-width: 900px) {
  .blue-box { padding: 40px 30px; }
  .banner-title { font-size: 26px !important; }
}
</style>