<template>
  <div class="blue-box">
    <h1>IKEA Aile Hesabınız Bir Tık Uzağınızda!</h1>
    
    <div class="blue-content">
      <p>IKEA Aile üyeliğiniz ile; iyi tasarımlı, kullanışlı ve kaliteli binlerce mobilya ve ev aksesuarı alışverişinizi kolayca ve hızla tamamlayın.</p>
      <p>IKEA Aile hesabınıza giriş yaparak bilgilerinize erişebilir ve güncelleyebilir, siparişlerinizi ve çeklerinizi takip edebilir, oluşturduğunuz favori listelerini kaydedip e-posta ile gönderebilirsiniz.</p>
      <p>Henüz IKEA Aile üyesi değilseniz; üyeliğinizi oluşturabilir, IKEA Aile avantajlarından faydalanmaya hemen başlayabilirsiniz.</p>
    </div>
  </div>
</template>

<style scoped>
.blue-box {
  flex: 1.4; min-width: 300px;
  background-color: #2986d7; color: white;
  padding: 130px 80px; 
  display: flex; flex-direction: column; justify-content: center;
}

.blue-box h1 {
  font-size: 34px; font-weight: 700; margin-top: 0; margin-bottom: 30px; line-height: 1.2;
}

.blue-content p {
  font-size: 14px; line-height: 1.6; margin-bottom: 20px; font-weight: 400;
}
.blue-content p:last-child { margin-bottom: 0; }

@media (max-width: 900px) {
  .blue-box { padding: 40px 30px; }
  .blue-box h1 { font-size: 26px; }
}
</style>