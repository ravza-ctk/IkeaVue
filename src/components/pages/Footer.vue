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


/* FOOTER - EKRANI KAPLAMASI İÇİN ÖZEL AYAR */
.footer {
  /* Ekranın tamamını kapla (Viewport Width) */
  width: 100vw; 
  
  /* Ortala ve kenarlara taşır */
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  
  /* Arka plan ve boşluklar */
  background: #f7f7f7; /* İstediğin açık gri renk */
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
  /* Gap'i 40px'ten 20px'e düşürdük ki sığması kolaylaşsın */
  gap: 0px; 
}

html, body {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

.footer-col {
  /* ÖNEMLİ DEĞİŞİKLİK: 
     Eskiden: flex: 1 1 200px; (Bu en az 200px yer istiyordu)
     Yeni: flex: 1; (Mevcut alanı eşit paylaşır) 
  */
  flex: 1;
  
  /* Min-width'i düşürdük, böylece ekran daralınca hemen aşağı düşmez */
  min-width: 140px; 
}

/* İkinci görseldeki gibi en soldaki yazı alanı diğerlerinden biraz daha geniş olsun */
.footer-col:first-child {
  flex: 1.5; /* Diğer sütunlardan 1.5 kat daha geniş olmaya çalışır */
  min-width: 250px; /* Yazıların çok sıkışmaması için */
}

.footer-col h3 {
  font-size: 16px; /* Başlıkları fotodaki gibi biraz kibarlaştırdık */
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
  max-width: 90%; /* Yazıların çok uzamasını engeller */
}

button {
  padding: 10px 24px;
  background: #111;
  border-radius: 24px; /* Butonu daha oval yaptık */
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

/* Tablet ve Mobil Ayarları */
@media (max-width: 992px) {
  .footer-container {
    gap: 30px;
  }
  
  /* Tablette 5'i yan yana sığmazsa 2 veya 3'lü gruplar haline gelsin */
  .footer-col {
    flex: 1 1 40%; /* Genişliği %40 yapar */
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