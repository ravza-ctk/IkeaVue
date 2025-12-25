<template>
  <div class="account-page">
    <div class="container">
      
      <h1 class="page-title">Hoş Geldiniz</h1>

      <div class="grid-row top-row">
        
        <div class="grid-col col-4">
          <div class="ikea-card-box">
            <div class="ikea-card-header">
              <span class="card-title">IKEA Aile</span>
              <span class="card-name">{{ userStore.user?.displayName || 'RAVZA ÇETİNKAYA' }}</span>
            </div>
            <div class="ikea-card-body">
              <div class="barcode-container">
                <div class="barcode-lines"></div>
                <span class="barcode-number">2029 1300 0600 5435</span>
              </div>
            </div>
          </div>
        </div>

        <div class="grid-col col-4">
          <div class=" center-content">
            <p class="info-text">
              IKEA Aile barkodunuzu sistemimizde kayıtlı <strong>{{ userStore.user?.phoneNumber || '5531996419' }}</strong> nolu cep telefonunuza SMS olarak almak için SMS GÖNDER'i tıklayın.
            </p>
            <button class="btn btn-black">SMS GÖNDER</button>
          </div>
        </div>

        <div class="grid-col col-4">
          <div class=" center-content">
            <h3 class="box-title">IKEA Aile Paranız</h3>
            <div class="price-big">0₺</div>
            <p class="small-text">
              Yukarıda belirtilen IKEA Aile Para bilgisi son 24 saat içinde yapılan işlemleri yansıtmaktadır.
            </p>
          </div>
        </div>
      </div>

      <div class="grid-row middle-row">
        
        <div class="grid-col col-6">
          <div class="info-box">
            <div class="box-header">
              <h3>Kişisel Bilgilerim</h3>
              <a href="#" class="edit-link"><i class="icon-pencil"></i></a>
            </div>
            
            <div class="user-details-grid">
              <div class="detail-item">
                <label>Ad Soyad</label>
                <span>{{ userStore.user?.displayName || 'Ravza Çetinkaya' }}</span>
              </div>
              <div class="detail-item">
                <label>Cep Telefonu</label>
                <span>{{ userStore.user?.phoneNumber || '5531996419' }}</span>
              </div>
              <div class="detail-item full-width">
                <label>E-Posta</label>
                <span>{{ userStore.user?.email || 'naber1417@gmail.com' }}</span>
              </div>
            </div>

            <div class="verify-area">
              <span class="info-icon">ⓘ</span>
              <p>E-Postanızı doğrulamak için 'Doğrula' butonuna tıklayınız.</p>
              <button class="btn btn-black small-btn">Doğrula</button>
            </div>
          </div>
        </div>

        <div class="grid-col col-6">
          <div class="info-box">
            <div class="box-header">
              <h3>Adreslerim</h3>
              <a href="#" class="arrow-link">↗</a>
            </div>

            <div class="address-list">
              <div class="address-item">
                <div class="icon-circle truck-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                </div>
                <div class="address-content">
                  <h4>Teslimat Adreslerim</h4>
                  <p>Samanlı köyü ghegbfgnngc, İlçe: Merkez, İl: Yalova</p>
                </div>
              </div>

              <div class="address-item">
                <div class="icon-circle doc-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
                <div class="address-content">
                  <h4>Fatura Adresi ve Bilgileri</h4>
                  <p>Samanlı köyü ghegbfgnngc, İlçe: Merkez, İl: Yalova</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid-row bottom-row">
        
        <div class="grid-col col-6">
          <div class="info-box">
             <div class="box-header">
              <h3>Kredi/Banka Kartlarım</h3>
              <a href="#" class="edit-link">✎</a>
            </div>
            <p class="info-text">Masterpass kullanarak kaydettiğiniz kartlarınızı düzenleyebilir ya da yeni bir kart ekleyebilirsiniz.</p>
            <button class="btn btn-black btn-with-icon">+ Yeni Kart Ekle</button>
          </div>
        </div>

        <div class="grid-col col-6">
          <div class="info-box">
             <div class="box-header">
              <h3>Çeklerim</h3>
            </div>
            <div class="coupon-area">
              <div class="coupon-icon-circle">🎫</div>
              <p class="info-text">Çeklerinizi buradan görüntüleyebilirsiniz.</p>
            </div>
            <button class="btn btn-black">Tüm Çeklerim</button>
          </div>
        </div>
      </div>

      <div class="grid-row">
        <div class="grid-col col-12">
           <div class="info-box">
             <div class="box-header">
              <h3>Siparişlerim</h3>
              <a href="#" class="link-text">Tümü</a>
            </div>
            <p class="info-text">Gösterilecek kayıt bulunmamaktadır.</p>
           </div>
        </div>
      </div>

      <div class="logout-section">
        <a href="javascript:;" @click="logout" class="logout-link">
          <span class="icon">🗑</span> Üyeliğimi İptal Et
        </a>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/useUserStore';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

const logout = () => {
  userStore.user = null;
  router.push('/login');
};
</script>

<style scoped>
/* --- Temel Layout ve Grid --- */
.account-page {
  background-color: #f9f9f9; /* Hafif gri arka plan */
  padding: 40px 0 80px;
  font-family: 'Noto Sans', sans-serif;
  color: #111;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 40px;
}

.grid-row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px 30px; /* Sütunlar arası boşluk */
}

.grid-col {
  padding: 0 15px;
  box-sizing: border-box;
}

.col-4 { width: 33.33%; }
.col-6 { width: 50%; }
.col-12 { width: 100%; }

/* Mobil Uyumluluk */
@media (max-width: 992px) {
  .col-4 { width: 50%; margin-bottom: 20px; }
}
@media (max-width: 768px) {
  .col-4, .col-6 { width: 100%; margin-bottom: 20px; }
}

/* --- KUTU STİLLERİ (Beyaz Kartlar) --- */
.info-box {
  background: white;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  padding: 24px;
  height: 100%; /* Yükseklikleri eşitle */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.info-box.center-content {
  align-items: flex-start;
  justify-content: center;
}

.box-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  border-bottom: 1px solid #f5f5f5;
  padding-bottom: 15px;
}

.box-header h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
}

.box-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 10px;
}

/* --- IKEA Aile Kartı Özel Tasarımı --- */
.ikea-card-box {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.ikea-card-header {
  background-color: #0058a3; /* IKEA Mavisi */
  color: white;
  padding: 20px;
}

.card-title {
  display: block;
  font-weight: 800;
  font-size: 1.2rem;
  text-transform: uppercase;
}

.card-name {
  display: block;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 5px;
  text-transform: uppercase;
}

.ikea-card-body {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.barcode-lines {
  height: 50px;
  background: repeating-linear-gradient(
    90deg,
    #000,
    #000 2px,
    #fff 2px,
    #fff 4px
  );
  width: 100%;
  margin-bottom: 10px;
}

.barcode-number {
  display: block;
  text-align: center;
  font-family: monospace;
  font-size: 1.1rem;
  letter-spacing: 2px;
}

/* --- Butonlar --- */
.btn {
  display: inline-block;
  padding: 12px 32px;
  border-radius: 40px; /* Tam yuvarlak kenarlar */
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  text-decoration: none;
}

.btn-black {
  background-color: #111;
  color: white;
}

.btn-black:hover {
  background-color: #333;
}

.small-btn {
  padding: 8px 24px;
}

/* --- Kişisel Bilgiler Detayları --- */
.user-details-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
}

.detail-item {
  flex: 1 1 40%;
}
.detail-item.full-width {
  flex: 1 1 100%;
}

.detail-item label {
  display: block;
  font-size: 12px;
  color: #666;
  margin-bottom: 4px;
}

.detail-item span {
  font-weight: 600;
  font-size: 16px;
}

/* --- Doğrulama Alanı --- */
.verify-area {
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: auto;
}
.info-icon { font-size: 20px; }
.verify-area p { margin: 0; font-size: 13px; flex-grow: 1; }

/* --- Adres İkonları --- */
.address-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 25px;
}

.icon-circle {
  width: 40px;
  height: 40px;
  background-color: #f5f5f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.address-content h4 {
  margin: 0 0 5px 0;
  font-size: 14px;
  font-weight: 700;
}
.address-content p {
  margin: 0;
  font-size: 14px;
  color: #666;
  line-height: 1.4;
}

/* --- Diğer --- */
.price-big {
  font-size: 3rem;
  font-weight: 700;
  margin: 10px 0;
}

.small-text {
  font-size: 12px;
  color: #666;
  line-height: 1.4;
}

.info-text {
  font-size: 14px;
  color: #333;
  margin-bottom: 20px;
  line-height: 1.5;
}

.edit-link, .arrow-link, .link-text {
  color: #111;
  text-decoration: none;
  font-size: 18px;
}

.coupon-area {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.coupon-icon-circle {
  width: 50px;
  height: 50px;
  background-color: #ffd700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.logout-section {
  margin-top: 40px;
}

.logout-link {
  color: #cc0008;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
</style>
