<template>
  <div class="ikea-page-full">
    <!-- Hero Image Section (Full Width) -->
    <div class="hero-box">
      <img 
        src="https://cdn.ikea.com.tr/_assets/images/ikea-store.jpg" 
        alt="IKEA Mağaza" 
        class="hero-image"
      />
    </div>

    <!-- Main Content (Constrained Width) -->
    <main class="main-content-full">
      <BaseText variant="page-title" tag="h1" class="page-title">Mağazalarımız</BaseText>

      <div class="list-box">
        <div class="stores-grid">
          <StoreCard 
            v-for="(store, index) in stores" 
            :key="index" 
            :store="store" 
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import BaseText from '../atoms/BaseText.vue';
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
  padding-top: 50px; /* Header space */
}

/* Hero Box - Full Width */
.hero-box {
  width: 100%;
  height: 400px; /* Fixed height for banner look */
  margin-bottom: 40px;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Cover the area */
  display: block;
}

/* Main Content */
.main-content-full {
  max-width: 1200px; 
  width: 90%;
  margin: 0 auto;
  padding-bottom: 60px;
}

.page-title {
  margin-bottom: 30px;
}

.list-box {
  width: 100%;
}

.stores-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 30px;
}

@media (max-width: 900px) {
  .stores-grid { grid-template-columns: repeat(2, 1fr); }
  .hero-box { height: 250px; }
}

@media (max-width: 600px) {
  .stores-grid { grid-template-columns: 1fr; }
  .hero-box { height: 200px; }
}
</style>