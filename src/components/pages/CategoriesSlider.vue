<template>
  <div 
    class="slider-section"
    @mouseover="stopAutoScroll"
    @mouseleave="startAutoScroll"
  >
    
    <h2 class="slider-title">Düzenle, paylaş, kutla</h2>

    <div class="slider-wrapper">
      
      <button 
        class="nav-btn prev-btn" 
        @click="scroll('left')"
        v-show="showPrevBtn"
      >
        ‹
      </button>

      <div class="slider-track" ref="scrollContainer">
        
        <div 
          v-for="(item, index) in categories" 
          :key="index" 
          class="slider-card"
        >
          <div class="image-wrapper">
            <img :src="item.image" :alt="item.title" loading="lazy" />
            
            <div class="card-btn">
              {{ item.title }}
            </div>
          </div>
        </div>

      </div>

      <button 
        class="nav-btn next-btn" 
        @click="scroll('right')"
        v-show="showNextBtn"
      >
        ›
      </button>

    </div>
    
    <div class="custom-scrollbar-track">
      <div class="custom-scrollbar-thumb" :style="{ width: scrollPercentage + '%', left: scrollLeftPos + '%' }"></div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const categories = ref([
  { title: "Yemek Masaları", image: "https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy26-kasim/ikea-yemek-masalari.jpg" },
  { title: "Yemek Odası Sandalyeleri", image: "https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy26-kasim/ikea-yemek-odasi-sandalyeleri.jpg" },
  { title: "Yemek Odası Halıları", image: "https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy26-kasim/ikea-yemek-odasi-halilari.jpg" },
  { title: "Sofra Ürünleri", image: "https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy26-kasim/ikea-sofra-urunleri.jpg" },
  { title: "Tabaklar", image: "https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy26-kasim/ikea-tabaklar.jpg" },
  { title: "Çatal Bıçak ve Kaşıklar", image: "https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy26-kasim/ikea-catal-bicak-ve-kasiklar.jpg" },
  { title: "Bardaklar", image: "https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy26-kasim/ikea-bardaklar.jpg" },
  { title: "Peçeteler", image: "https://image-ikea.mncdn.com/ozgur-icerik/ana-sayfa/cy26-kasim/ikea-peceteler.jpg" }
]);

const scrollContainer = ref(null);
const scrollPercentage = ref(20);
const scrollLeftPos = ref(0);

const showPrevBtn = ref(false); 
const showNextBtn = ref(true);

let intervalId = null;
const scrollInterval = 5000; 

const scroll = (direction) => {
  const el = scrollContainer.value;
  if (!el) return;

  const scrollAmount = 300; 

  if (direction === 'left') {
    el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - scrollAmount) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  setTimeout(updateScrollIndicator, 350); 
};

const startAutoScroll = () => {
    if (intervalId) return; 
    intervalId = setInterval(() => {
        scroll('right');
    }, scrollInterval);
};

const stopAutoScroll = () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
};

const updateScrollIndicator = () => {
  const el = scrollContainer.value;
  if (el) {
    const maxScroll = el.scrollWidth - el.clientWidth;
    const currentScroll = el.scrollLeft;
    
    const percentage = (currentScroll / maxScroll) * 80; 
    scrollLeftPos.value = percentage;

    showPrevBtn.value = currentScroll > 10;
    showNextBtn.value = currentScroll < maxScroll - 5;
  }
};

onMounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener('scroll', updateScrollIndicator);
    updateScrollIndicator(); 
  }
  startAutoScroll();
});

onUnmounted(stopAutoScroll);
</script>

---

<style scoped>
.slider-section {
  max-width: 1400px;
  margin: 60px auto;
  padding: 0 20px;
  position: relative;
}

.slider-title {
  font-size: 24px;
  font-weight: bold;
  color: #111;
  margin-bottom: 20px;
}

.slider-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.slider-track {
  display: flex;
  gap: 20px;
  overflow-x: auto; 
  scroll-behavior: smooth;
  padding-bottom: 20px; 
  
  scrollbar-width: none; 
  -ms-overflow-style: none; 
}

.slider-track::-webkit-scrollbar {
  display: none; 
}


.slider-card {
  flex: 0 0 auto; 
  width: 280px; 
  cursor: pointer;
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 350px; 
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  transition: transform 0.5s ease;
}

.slider-card:hover img {
  transform: scale(1.05); 
}

.card-btn {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  
  background-color: white;
  color: black;
  padding: 12px 24px;
  border-radius: 30px; 
  font-weight: bold;
  font-size: 13px;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  
  transition: background-color 0.3s, transform 0.3s;
}

.card-btn:hover {
  background-color: #f5f5f5;
  transform: translateX(-50%) scale(1.05); 
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  background-color: #111;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 24px;
  line-height: 40px; 
  cursor: pointer;
  z-index: 10;
  
  
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 4px; 
}



.prev-btn { left: -22px; }
.next-btn { right: -22px; }

.custom-scrollbar-track {
  width: 100%;
  height: 2px;
  background-color: #e0e0e0;
  margin-top: 10px;
  position: relative;
  border-radius: 2px;
  overflow: hidden;
}

.custom-scrollbar-thumb {
  height: 100%;
  background-color: #111; 
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 2px;
  transition: left 0.1s linear; 
}

@media (max-width: 768px) {
  .slider-card {
    width: 220px; 
  }
  .image-wrapper {
    height: 280px;
  }
  .nav-btn {
    display: none; 
  }
}
</style>