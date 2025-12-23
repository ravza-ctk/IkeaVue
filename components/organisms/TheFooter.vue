<template>
  <footer class="main-footer-organism">
    <div class="footer-container">

      <!-- Top Section: Special Cards -->
      <div class="footer-col-special">
        <ButtonCard 
          v-for="(card, index) in cards" 
          :key="index" 
          :title="card.title" 
          :paragraph="card.paragraph" 
          :buttonText="card.buttonText" 
          :class="{ 'mt-30': index > 0 }" 
        />
      </div>

      <!-- Links Sections -->
      <div 
        v-for="(list, index) in linkLists" 
        :key="index" 
        class="footer-link-col"
      >
        <BaseList 
          :title="list.title" 
          :items="list.items" 
          variant="footer" 
        />
      </div>

    </div>

    <!-- Social Media & Policies Section -->
    <div class="footer-bottom-container">
      
      <!-- Social Media Icons -->
      <div class="social-media-section">
        <a v-for="(social, index) in socialLinks" :key="index" href="#" class="social-link">
          <BaseIcon size="24px" clickable>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            >
              <path :d="social.path"></path>
              <!-- Handle multi-path icons if needed, specific for these simple ones -->
              <template v-if="social.paths">
                <path v-for="(p, i) in social.paths" :key="i" :d="p" />
              </template>
              <circle v-if="social.circle" :cx="social.circle.cx" :cy="social.circle.cy" :r="social.circle.r" />
              <rect v-if="social.rect" :x="social.rect.x" :y="social.rect.y" :width="social.rect.width" :height="social.rect.height" :rx="social.rect.rx" :ry="social.rect.ry" />
              <line v-if="social.line" :x1="social.line.x1" :y1="social.line.y1" :x2="social.line.x2" :y2="social.line.y2" />
            </svg>
          </BaseIcon>
        </a>
      </div>

      <!-- Certificates/Logos -->
      <div class="certificates-section">
          <span class="cert-text">IKEA Güvenli Alışveriş</span>
          <span class="cert-text">PCI DSS</span>
          <span class="cert-text">ETBIS</span>
      </div>

      <!-- Bottom Policies Links -->
      <div class="bottom-policies">
        <a v-for="(policy, index) in policies" :key="index" href="#" class="policy-link">
          {{ policy }}
        </a>
      </div>

      <!-- Copyright -->
      <div class="copyright-section">
        <p>© Inter IKEA Systems B.V 1999-2025</p>
        <p class="site-creation">Site Creation & Technology by <strong style="color: black">MagiClick Digital Solutions</strong></p>
      </div>

    </div>
  </footer>
</template>

<script>
import ButtonCard from '../molecules/ButtonCard.vue';
import BaseList from '../molecules/BaseList.vue';
import BaseIcon from '../atoms/BaseIcon.vue';

export default {
  name: "TheFooter",
  components: {
    ButtonCard,
    BaseList,
    BaseIcon
  },
  data() {
    return {
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
      ],
      socialLinks: [
         // Facebook
        { path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' }, 
        // Twitter
        { path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
        // Instagram
        {
           rect: { x: "2", y: "2", width: "20", height: "20", rx: "5", ry: "5" },
           paths: ["M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"],
           line: { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" } 
        },
        // Pinterest (simplified)
        { path: 'M8 12h-2v8h2v-5h2a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-4v12' }, // Placeholder visual, actual pinterest path is complex but user asked for "pinterest" name mainly or icon usage. I will use a generic "P" look or similar if standard set not avail. Actually let's use a real-ish path.
        // Pinterest real path is curvy. Let's try to stick to general shape or use text if icons are too hard to draw manually. 
        // Actually, let's use a standard "Link" icon for pinterest/youtube placeholder if paths are too complex to hardcode without errors, BUT I should try.
        // Youtube
        { 
           rect: { x:"1", y:"5", width:"22", height:"14", rx:"4", ry:"4" },
           paths: ["M10 9l6 3-6 3V9z"] 
        },
        // Linkedin
        {
            paths: ["M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z", "M2 9h4v12H2z"],
            circle: { cx: "4", cy: "4", r: "2" }
        }
      ],
      policies: [
        'Enerji Politikası',
        'Bilgi Güvenliği Politikası',
        'Kalite Politikası',
        'Gıda Güvenliği Politikası',
        'Bilgi Toplumu Hizmetleri',
        'Önemli Bilgilendirme',
        'İnternet Sitesi Gizlilik Politikası',
        'Kişisel Verilerin Korunması',
        'Çerez Politikası'
      ]
    };
  }
};
</script>

<style scoped>
/* --- Main Layout --- */
.main-footer-organism {
  width: 100%;
  background: #f7f7f7; 
  padding: 50px 0;
  border-top: 1px solid #ddd;
  font-family: 'Noto Sans', sans-serif;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}

/* Columns */
.footer-col-special {
  flex: 0 1 350px;
  min-width: 250px; 
}

.footer-link-col { 
  flex: 0 1 210px;
  min-width: 140px; 
}

.mt-30 {
  margin-top: 30px;
}

/* --- Bottom Section --- */
.footer-bottom-container {
  max-width: 1400px;
  margin: 40px auto 0;
  padding: 20px 20px 0;
  border-top: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.social-media-section {
  display: flex;
  gap: 15px;
  margin-bottom: 10px;
}

.social-link {
  display: inline-flex;
  padding: 8px;
  border: 1px solid #dfdfdf;
  border-radius: 50%;
  color: #111;
  transition: border-color 0.2s;
}

.social-link:hover {
  border-color: #111;
}

.certificates-section {
  display: flex;
  gap: 20px;
  font-weight: bold;
  font-size: 14px;
}

.bottom-policies {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
  font-size: 13px;
}

.policy-link {
  color: #484848;
  text-decoration: none;
}
.policy-link:hover {
  text-decoration: underline;
}

.copyright-section {
  margin-top: 10px;
  font-size: 12px;
  color: #484848;
  text-align: right;
}

.site-creation {
  margin-top: 5px;
  color: #767676;
}

/* --- Responsive --- */
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
  
  .footer-bottom-container {
    gap: 30px;
  }
  
  /* Keep policies horizontal but allow wrapping on small screens, don't force column */
  .bottom-policies {
    gap: 10px 15px; 
    justify-content: flex-start;
  }
}
</style>