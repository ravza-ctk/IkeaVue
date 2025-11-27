<template>
  <div class="ikea-page-full">
    <main class="main-content-full">
      
      <PageTitle>Mağazalarımız</PageTitle>

      <div class="content-split">
        
        <div class="hero-box">
          <img 
            src="https://cdn.ikea.com.tr/_assets/images/ikea-store.jpg" 
            alt="IKEA Mağaza" 
            class="hero-image"
          />
        </div>

        <div class="list-box">
          <div class="stores-grid">
            <StoreCard 
              v-for="(store, index) in stores" 
              :key="index" 
              :store="store" 
            />
          </div>
        </div>

      </div>

    </main>
  </div>
</template>

<script setup>
import PageTitle from '../atoms/PageTitle.vue';
import StoreCard from '../molecules/StoreCard.vue';

// Veri Seti
const stores = [
  { name: 'IKEA Ankara', address: ['Anatolium Ankara AVM', 'Akşemsettin Mh.', '2308. sok. A-1 Blok No: 1/3/1', '06480 Mamak', 'Ankara'] },
  { name: 'IKEA Antalya', address: ['Agora AVM', 'Altınova Sinan Mh.', 'Antalya Cd. No:14', '07170 Kepez', 'Antalya'] },
  { name: 'IKEA Bayrampaşa', address: ['Forum İstanbul AVM', 'Kocatepe Mh.', 'Paşa Cd. No:1', '34045 Bayrampaşa', 'İstanbul'] },
  { name: 'IKEA Bursa', address: ['Anatolium Bursa AVM A Blok', 'Alaşarköy Mh.', 'İstanbul Cd. No:485', '16245 Osmangazi', 'Bursa'] },
  { name: 'IKEA İzmir', address: ['Forum Bornova AVM', 'Kazım Dirik Mh.', '372.Sok. No:34', '35100 Bornova', 'İzmir'] },
  { name: 'IKEA Kartal', address: ['Anatolium Marmara AVM', 'Soğanlık Yeni Mh.', 'Soğanlık D-100 Yan yol Cd.', '34880', 'Kartal - İstanbul'] },
  { name: 'IKEA Ümraniye', address: ['Meydan AVM', 'Fatih Sultan Mehmet Mh.', 'Balkan Cd. No:62', '34771 Ümraniye', 'İstanbul'] },
  { name: 'Adana Sipariş ve Teslim Noktası', address: ['M1 Adana AVM', 'Yeni Mahalle, 87071 Caddesi', 'J Blok Kapı No :13', '01200 Seyhan/Adana'] },
  { name: 'Bodrum Sipariş ve Teslim Noktası', address: ['Avenue AVM', 'Merkez Mh. Atatürk Bulvarı', 'No:25/29', '48400 Konacık', 'Muğla'] }
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');

.ikea-page-full {
  width: 100%;
  min-height: 100vh;
  font-family: 'Noto Sans', sans-serif;
  color: #111;
  background: #fff;
  overflow-x: hidden;
}

.main-content-full {
  width: 70vw; 
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 60px;
}

.content-split {
  display: flex;
  width: 100%;
  gap: 3%;
}

.hero-box {
  width: 42%;
  flex-shrink: 0;
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.list-box {
  width: 55%;
  flex-grow: 1;
}

.stores-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 40px 20px;
}

@media (max-width: 1200px) {
  .stores-grid { grid-template-columns: repeat(2, 1fr); }
  .content-split { gap: 40px; }
}

@media (max-width: 900px) {
  .content-split { flex-direction: column; gap: 30px; }
  .hero-box, .list-box { width: 100%; }
}

@media (max-width: 600px) {
  .main-content-full { width: 95vw; padding: 15px; }
  .stores-grid { grid-template-columns: 1fr; }
}
</style>