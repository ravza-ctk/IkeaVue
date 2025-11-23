<template>
  <div class="page-wrapper">
    
    <div class="content-container">
      
      <div class="breadcrumb">
        <a href="#">Ana Sayfa</a>
        <span class="arrow">›</span>
        <span class="current">Üye Girişi</span>
      </div>

      <div class="main-grid">
        
        <div class="blue-box">
          <h1>IKEA Aile Hesabınız Bir Tık Uzağınızda!</h1>
          
          <div class="blue-content">
            <p>
              IKEA Aile üyeliğiniz ile; iyi tasarımlı, kullanışlı ve kaliteli binlerce
              mobilya ve ev aksesuarı alışverişinizi kolayca ve hızla tamamlayın.
            </p>
            <p>
              IKEA Aile hesabınıza giriş yaparak bilgilerinize erişebilir ve
              güncelleyebilir, siparişlerinizi ve çeklerinizi takip edebilir,
              oluşturduğunuz favori listelerini kaydedip e-posta ile gönderebilir,
              IKEA Aile barkodunuzu ve paranızı görüntüleyebilir, IKEA’daki yenilik ve
              kampanyalardan haberdar olabilirsiniz.
            </p>
            <p>
              Henüz IKEA Aile üyesi değilseniz; üyeliğinizi oluşturabilir, IKEA Aile
              avantajlarından faydalanmaya hemen başlayabilirsiniz.
            </p>
          </div>
        </div>

        <div class="form-column">
          <div class="form-container">
            <h2>Üye Girişi / Üye Ol</h2>

            <div class="input-group">
              <label>Cep Telefonu</label>
              <input 
                v-model="phone" 
                type="text" 
                class="ikea-input"
              />
              <span class="hint">Cep telefon numaranızı başında 0 olmadan giriniz.</span>
            </div>

            <button @click="submit" class="ikea-btn">Devam Et</button>

            <div class="help-link-wrapper">
              <a href="#" class="help-link">Yardıma İhtiyacım Var</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const phone = ref("");

const submit = () => {
  if (!phone.value) {
    alert("Lütfen telefon numarası girin.");
  } else {
    console.log("Giriş yapılıyor:", phone.value);
  }
};
</script>

<style>
body, html {
  background-color: #ffffff !important;
  margin: 0;
  padding: 0;
  overflow-x: hidden; 
}
</style>

<style scoped>
* {
  font-family: "Noto Sans", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
}

.page-wrapper {
  width: 100vw;
  min-height: 100vh;
  background-color: #ffffff !important;
  color: #111;
  
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  
  display: flex;
  justify-content: center;
  padding-top: 20px; 
  padding-bottom: 80px;
}

.content-container {
  width: 100%;
  max-width: 1150px;
  padding: 0 25px;
}

.breadcrumb {
  font-size: 12px;
  color: #484848;
  margin-bottom: 15px; 
  display: flex;
  align-items: center;
}
.breadcrumb a {
  text-decoration: none;
  color: #484848;
  border-bottom: 1px solid transparent;
}
.breadcrumb a:hover {
  border-bottom: 1px solid #484848;
}
.arrow {
  margin: 0 8px;
  font-size: 16px;
  line-height: 1;
}
.current {
  color: #484848;
}

/* MAIN GRID */
.main-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 60px; /* İki sütun arasındaki geniş boşluk */
}

.blue-box {
  flex: 1.4; 
  min-width: 300px;
  background-color: #2986d7; 
  color: white;
  padding: 130px 80px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.blue-box h1 {
  font-size: 34px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 30px;
  line-height: 1.2;
}

.blue-content p {
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 20px;
  font-weight: 400;
}
.blue-content p:last-child {
  margin-bottom: 0;
}

.form-column {
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 20px;
}

.form-container {
  width: 100%;
  max-width: 400px; 
}

.form-container h2 {
  font-size: 22px;
  font-weight: 700;
  color: #111;
  margin-top: 0;
  margin-bottom: 40px;
}

.input-group {
  margin-bottom: 30px;
}

.input-group label {
  display: block;
  font-size: 14px;
  font-weight: 400; 
  color: #484848;
  margin-bottom: 8px;
}

.ikea-input {
  width: 100%;
  height: 48px;
  border: 1px solid #dfdfdf;
  border-radius: 2px; /* Hafif köşe */
  padding: 0 15px;
  font-size: 16px;
  color: #111;
  transition: border-color 0.2s;
}

.ikea-input:focus {
  outline: none;
  border-color: #0058a3;
}

.hint {
  display: block;
  margin-top: 8px;
  font-size: 12px;
  color: #767676;
}

.ikea-btn {
  width: 100%;
  height: 56px;
  background-color: #0058a3;
  color: white;
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 28px; 
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
}

.ikea-btn:hover {
  background-color: #004f93;
}

.ikea-btn:active {
  transform: scale(0.98);
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
.help-link:hover {
  text-decoration: none;
}


@media (max-width: 900px) {
  .main-grid {
    flex-direction: column;
    gap: 40px;
  }
  
  .blue-box {
    padding: 40px 30px;
  }
  
  .form-column {
    padding-right: 0;
    align-items: flex-start;
  }
  
  .form-container {
    max-width: 100%;
  }
  
  .blue-box h1 {
    font-size: 26px;
  }
}
</style>