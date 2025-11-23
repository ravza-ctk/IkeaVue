<template>
  <div class="tracking-container">
    <h1 class="page-title">Sipariş Takibi</h1>

    <div class="content-wrapper">
      <div class="form-section">
        <p class="info-text">
          Siparişiniz sonrasında e-posta adresinize gönderdiğimiz sipariş numaranızı
          kullanarak siparişinizin kargo sürecini sorgulayabilirsiniz.
        </p>

        <form @submit.prevent="handleSearch">
          <div class="input-group">
            <div class="select-wrapper">
              <select v-model="selectedMethod" class="form-input">
                <option value="" disabled selected>Doğrulama Yöntemi</option>
                <option value="email">E-posta Adresi</option>
                <option value="phone">Telefon Numarası</option>
              </select>
              <span class="arrow">▼</span>
            </div>
          </div>

          <div class="input-group">
            <input 
              type="text" 
              v-model="orderNumber" 
              placeholder="Sipariş Numarası" 
              class="form-input"
            />
          </div>

          <button type="submit" class="search-btn">
            Sorgula
          </button>
        </form>
      </div>

      <div class="image-section">
        <img 
          src="https://cdn.ikea.com.tr/_assets/img/page/siparis-takibi.jpg" 
          alt="IKEA Teslimat" 
          class="delivery-image"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiparisTakibi',
  data() {
    return {
      selectedMethod: "", 
      orderNumber: ""    
    };
  },
  methods: {
    handleSearch() {
      console.log("Aranan:", this.selectedMethod, this.orderNumber);
      alert("Sorgulama yapılıyor..."); 
    }
  }
};
</script>

<style scoped>
/* Genel Konteyner */
.tracking-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 20px 40px 20px;
  font-family: 'Noto Sans', Arial, sans-serif;
}

/* Başlık */
.page-title {
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  color: #111;
  margin-bottom: 50px;
}

/* İçerik Düzeni */
.content-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 80px;
}

/* Form Bölümü */
.form-section {
  flex: 1;
  max-width: 480px;
}

.info-text {
  font-size: 16px; /* Yazı biraz daha okunaklı */
  line-height: 1.5;
  color: #111;     /* Yazı rengi daha koyu */
  margin-bottom: 35px;
}

.input-group {
  margin-bottom: 25px; /* Inputlar arası boşluk */
}

/* --- INPUT VE SELECT STİLLERİ (Burayı Koyulaştırdık) --- */
.form-input {
  width: 100%;
  padding: 18px 15px; /* Inputlar daha yüksek (görseldeki gibi) */
  font-size: 16px;
  border: 1px solid #929292; /* Çerçeve rengi görseldeki gri tonuna çekildi */
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;
  color: #484848;
  background-color: white;
  appearance: none;
}

/* Placeholder (İpucu yazısı) rengi */
.form-input::placeholder {
  color: #767676;
}

.form-input:focus {
  border-color: #111; /* Tıklayınca siyah çerçeve */
  border-width: 1px;
}

/* Select ok işareti */
.select-wrapper {
  position: relative;
}

.arrow {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  color: #111;
  font-weight: bold;
  pointer-events: none;
}

/* --- BUTON STİLİ (Tam Siyah ve Oval) --- */
.search-btn {
  background-color: #111; /* Simsiyah arka plan */
  color: white;
  border: none;
  padding: 16px 60px; /* Buton geniş ve dolgun */
  font-size: 16px;
  font-weight: 700;
  border-radius: 999px; /* Tam yuvarlak kenarlar (Hap şekli) */
  cursor: pointer;
  margin-top: 15px;
  transition: opacity 0.3s;
}

.search-btn:hover {
  opacity: 0.8; /* Üzerine gelince hafif saydamlık */
}

/* Resim Bölümü */
.image-section {
  flex: 1;
  max-width: 600px;
}

.delivery-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* Responsive */
@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
    gap: 40px;
  }
  .page-title {
    font-size: 28px;
  }
}
</style>