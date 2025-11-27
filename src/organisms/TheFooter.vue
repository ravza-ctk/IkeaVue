<template>
  <footer class="main-footer-organism">
    <div class="footer-container">

      <div class="footer-col-special">
        <div 
          v-for="(card, index) in cards" 
          :key="index" 
          class="button-card-molecule"
          :class="{ 'mt-30': index > 0 }"
        >
          <h3>{{ card.title }}</h3>
          <p>{{ card.paragraph }}</p>
          <button>{{ card.buttonText }}</button>
        </div>
      </div>

      <div 
        v-for="(list, index) in linkLists" 
        :key="index" 
        class="footer-link-col"
      >
        <h3 class="list-title">{{ list.title }}</h3>
        <ul class="link-list">
          <li v-for="(item, i) in list.items" :key="i">
            <a href="#">{{ item }}</a>
          </li>
        </ul>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      // ButtonCard verileri
      cards: [
        {
          title: "IKEA Aile",
          paragraph: "IKEA Aile üyeliğiniz ile her alışverişinizde IKEA Aile Para kazanın ve kampanyaları kaçırmayın.",
          buttonText: "Üye Girişi / Üye Ol"
        },
        {
          title: "IKEA Kurumsal Satış",
          paragraph: "İş yeri mobilya ve aksesuar alışverişleriniz IKEA Kurumsal Kart ile daha hesaplı.",
          buttonText: "Hemen Başvurun"
        }
      ],
      // LinkList verileri
      linkLists: [
        {
          title: "Popüler Kategoriler",
          items: ['Yatak Odası', 'Oturma Odası', 'Yemek Odası', 'Çalışma Odası', 'Çocuk Mobilyaları', 'Dekorasyon', 'Züccaciye']
        },
        {
          title: "Hakkımızda",
          items: ['IKEA Konsepti', "IKEA'da Alışveriş", 'Sosyal Sorumluluk Projeleri', 'Evde Güvenlik', "IKEA'da Kariyer"]
        },
        {
          title: "Müşteri Hizmetleri",
          items: ['Garanti Koşulları', 'İade Politikası', 'İade/Değişim Talebi', 'Sıkça Sorulan Sorular', 'Stok Sorgula', 'Bize Ulaşın', 'Müşteri Memnuniyet Anketi']
        },
        {
          title: "Diğer",
          items: ['Size En Yakın IKEA', 'IKEA Mobil', 'İnternetten Alışveriş', 'Planlayıcılar', 'Hizmetler']
        }
      ]
    };
  }
};
</script>

<style scoped>
/* --- Ana Yapı (Organism) Stilleri --- */
.main-footer-organism {
  width: 100vw; 
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: #f7f7f7; 
  padding: 50px 0;
  border-top: 1px solid #ddd;
  font-family: 'Noto Sans', sans-serif; /* IKEA benzeri font varsayımı */
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

/* Kolon Genişlik Ayarları */
.footer-col-special {
  flex: 1.5; 
  min-width: 250px; 
  padding-right: 20px;
}

.footer-link-col { 
  flex: 1;
  min-width: 140px; 
}

/* --- Kart (Molecule) Stilleri --- */
.button-card-molecule h3 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #111;
}

.button-card-molecule p {
  font-size: 13px;
  line-height: 1.5;
  margin-bottom: 16px;
  color: #444;
  max-width: 90%; 
}

.button-card-molecule button {
  padding: 10px 24px;
  background: #111;
  border-radius: 24px; 
  color: white;
  border: none;
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
  transition: background 0.3s;
}

.button-card-molecule button:hover {
  background: #333;
}

.mt-30 {
  margin-top: 30px;
}

/* --- Link Listesi (Molecule) Stilleri --- */
.list-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #111;
}

.link-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.link-list li {
  margin-bottom: 10px;
}

.link-list a {
  text-decoration: none;
  color: #484848;
  font-size: 13px;
  transition: text-decoration 0.2s;
}

.link-list a:hover {
  text-decoration: underline;
  color: #111;
}

/* --- Responsive Ayarlar --- */
@media (max-width: 992px) {
  .footer-container { gap: 30px; }
  .footer-col-special, .footer-link-col { 
    flex: 1 1 40%;
    min-width: 200px;
  }
}

@media (max-width: 576px) {
  .footer-container {
    flex-direction: column;
    gap: 40px;
  }
  .footer-col-special, .footer-link-col {
    width: 100%;
    flex: auto;
    padding-right: 0;
  }
}
</style>