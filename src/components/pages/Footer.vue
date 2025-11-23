<template>
  <footer class="footer">
    <div class="footer-container">

      <div class="footer-col">
        <h3>IKEA Aile</h3>
        <p>IKEA Aile üyeliğiniz ile her alışverişinizde IKEA Aile Para kazanın ve kampanyaları kaçırmayın.</p>
        <button>Üye Girişi / Üye Ol</button>

        <h3 style="margin-top: 30px;">IKEA Kurumsal Satış</h3>
        <p>İş yeri mobilya ve aksesuar alışverişleriniz IKEA Kurumsal Kart ile daha hesaplı.</p>
        <button>Hemen Başvurun</button>
      </div>

      <div class="footer-col">
        <h3>Popüler Kategoriler</h3>
        <ul>
          <li>Yatak Odası</li>
          <li>Oturma Odası</li>
          <li>Yemek Odası</li>
          <li>Çalışma Odası</li>
          <li>Çocuk Mobilyaları</li>
          <li>Dekorasyon</li>
          <li>Züccaciye</li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>Hakkımızda</h3>
        <ul>
          <li>IKEA Konsepti</li>
          <li>IKEA'da Alışveriş</li>
          <li>Sosyal Sorumluluk Projeleri</li>
          <li>Evde Güvenlik</li>
          <li>IKEA'da Kariyer</li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>Müşteri Hizmetleri</h3>
        <ul>
          <li>Garanti Koşulları</li>
          <li>İade Politikası</li>
          <li>İade/Değişim Talebi</li>
          <li>Sıkça Sorulan Sorular</li>
          <li>Stok Sorgula</li>
          <li>Bize Ulaşın</li>
          <li>Müşteri Memnuniyet Anketi</li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>Diğer</h3>
        <ul>
          <li>Size En Yakın IKEA</li>
          <li>IKEA Mobil</li>
          <li>İnternetten Alışveriş</li>
          <li>Planlayıcılar</li>
          <li>Hizmetler</li>
        </ul>
      </div>

    </div>
  </footer>
</template>

<script>
export default { name: "Footer" };
</script>

<style scoped>


.footer {

  width: 100vw; 
  
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  
  background: #f7f7f7; 
  padding: 50px 0;
  border-top: 1px solid #ddd;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0px; 
}

html, body {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

.footer-col {
  flex: 1;
  min-width: 140px; 
}

.footer-col:first-child {
  flex: 1.5; 
  min-width: 250px; 
}

.footer-col h3 {
  font-size: 16px; 
  font-weight: bold;
  margin-bottom: 16px;
  color: #111;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-col li {
  margin-bottom: 12px;
  font-size: 14px;
  cursor: pointer;
  color: #444;
}

.footer-col li:hover {
  text-decoration: underline;
}

.footer-col p {
  font-size: 13px;
  line-height: 1.5;
  margin-bottom: 16px;
  color: #444;
  max-width: 90%; 
}

button {
  padding: 10px 24px;
  background: #111;
  border-radius: 24px; 
  color: white;
  border: none;
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
  margin-top: 5px;
  transition: background 0.3s;
}

button:hover {
  background: #333;
}

@media (max-width: 992px) {
  .footer-container {
    gap: 30px;
  }
  
  .footer-col {
    flex: 1 1 40%;
    min-width: 200px;
  }
}

@media (max-width: 576px) {
  .footer-container {
    flex-direction: column;
    gap: 40px;
  }

  .footer-col {
    width: 100%;
    flex: auto;
  }
}
</style>