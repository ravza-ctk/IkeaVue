<template>
  <div class="stores-page-container">

    <main class="main-content">
      
      <h1 class="page-title">Mağazalarımız</h1>

      <div class="content-wrapper">
        
        <div class="hero-image-container">
          <img 
            src="https://cdn.ikea.com.tr/_assets/images/ikea-store.jpg" 
            alt="IKEA Mağazası" 
            class="hero-image"
          />
        </div>

        <div class="store-list-grid">
          
          <div v-for="(store, index) in stores" :key="index" class="store-item">
            <h3 class="store-name">{{ store.name }}</h3>
            <div class="store-address">
              <p v-for="(line, lIndex) in store.address" :key="lIndex">{{ line }}</p>
            </div>
            
            <div class="store-links">
              <a href="#" class="link-blue">Detaylı Bilgi Al</a>
              <a href="#" class="link-blue">Yol Tarifi Al</a>
            </div>
          </div>

        </div>

      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'StoresPage',
  data() {
    return {
      stores: [
        {
          name: 'IKEA Ankara',
          address: [
            'Anatolium Ankara AVM',
            'Akşemsettin Mh.',
            '2308. sok. A-1 Blok No: 1/3/1',
            '06480 Mamak',
            'Ankara'
          ]
        },
        {
          name: 'IKEA Antalya',
          address: [
            'Agora AVM',
            'Altınova Sinan Mh.',
            'Antalya Cd. No:14',
            '07170 Kepez',
            'Antalya'
          ]
        },
        {
          name: 'IKEA Bayrampaşa',
          address: [
            'Forum İstanbul AVM',
            'Kocatepe Mh.',
            'Paşa Cd. No:1',
            '34045 Bayrampaşa',
            'İstanbul'
          ]
        },
        {
          name: 'IKEA Bursa',
          address: [
            'Anatolium Bursa AVM A Blok',
            'Alaşarköy Mh.',
            'İstanbul Cd. No:485',
            '16245 Osmangazi',
            'Bursa'
          ]
        },
        {
          name: 'IKEA İzmir',
          address: [
            'Forum Bornova AVM',
            'Kazım Dirik Mh.',
            '372.Sok. No:34',
            '35100 Bornova',
            'İzmir'
          ]
        },
        {
          name: 'IKEA Kartal',
          address: [
            'Anatolium Marmara Alışveriş Merkezi',
            'Soğanlık Yeni Mahallesi',
            'Soğanlık D-100 Yan yol Cad.',
            '34880',
            'Kartal - İstanbul'
          ]
        },
        {
          name: 'IKEA Ümraniye',
          address: [
            'Meydan AVM',
            'Fatih Sultan Mehmet Mh.',
            'Balkan Cd. No:62',
            '34771 Ümraniye',
            'İstanbul'
          ]
        },
        {
          name: 'Adana Sipariş ve Teslim Noktası',
          address: [
            'M1 Adana AVM',
            'Yeni Mahalle, 87071 Caddesi',
            'J Blok Kapı No :13',
            '01200 Seyhan/Adana'
          ]
        },
        {
          name: 'Bodrum Sipariş ve Teslim Noktası',
          address: [
            'Avenue AVM',
            'Merkez Mh. Atatürk Bulvarı No:25/29',
            '48400 Konacık',
            'Muğla'
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.stores-page-container {
  font-family: 'Noto Sans', Arial, sans-serif;
  color: #111;
  background-color: #fff;
  min-height: 100vh;
}
a { text-decoration: none; color: inherit; }

.site-header { position: sticky; top: 0; background: #fff; z-index: 1000; padding: 15px 30px; }
.header-inner { max-width: 1400px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
.header-left { display: flex; gap: 15px; align-items: center; }
.ikea-logo { background: #0058a3; color: #ffdb00; font-weight: 900; font-size: 22px; padding: 0 10px; letter-spacing: -1px; }
.search-container { flex: 1; max-width: 600px; display: none; margin: 0 20px; } 
.search-wrapper { position: relative; }
.search-input { width: 100%; background: #f5f5f5; border: none; padding: 12px 12px 12px 45px; border-radius: 99px; font-size: 14px; }
.search-icon { position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: #555; }
.header-right { display: flex; gap: 15px; align-items: center; font-size: 13px; font-weight: 700; }
.icon-btn { background: none; border: none; position: relative; cursor: pointer; }
.badge { position: absolute; top: -5px; right: -5px; background: #0058a3; color: white; width: 18px; height: 18px; border-radius: 50%; font-size: 10px; display: flex; align-items: center; justify-content: center; }

.main-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 30px;
}

.page-title {
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  color: #111;
  margin-bottom: 50px;
}

.content-wrapper {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

.hero-image-container {
  flex: 1.2; 
  max-width: 600px;
}
.hero-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}

.store-list-grid {
  flex: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 40px 30px;
}

.store-item {
  display: flex;
  flex-direction: column;
}

.store-name {
  font-size: 14px;
  font-weight: 700;
  color: #111;
  margin-bottom: 15px;
}

.store-address {
  font-size: 12px;
  line-height: 1.6;
  color: #484848;
  margin-bottom: 15px;
}
.store-address p { margin: 0; }

.store-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.link-blue {
  font-size: 12px;
  font-weight: 600;
  color: #0058a3; 
  text-decoration: none;
}
.link-blue:hover {
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .store-list-grid { grid-template-columns: repeat(2, 1fr); }
  .content-wrapper { flex-direction: column; }
  .hero-image-container { max-width: 100%; width: 100%; margin-bottom: 30px; }
}

@media (max-width: 768px) {
  .store-list-grid { grid-template-columns: 1fr; }
  .search-container { display: block; width: 100%; margin: 10px 0; max-width: 100%; }
  .header-inner { flex-wrap: wrap; }
  .header-right { display: none; }
  .page-title { font-size: 28px; margin-bottom: 30px; }
}
@media (min-width: 769px) {
  .search-container { display: block; }
}
</style>