<template>
  <div class="slider-card">
    <div class="image-wrapper">
      <img :src="image" :alt="title" loading="lazy" />
      <div class="card-btn">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  image: String
});
</script>

<style scoped>
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

@media (max-width: 768px) {
  .slider-card { width: 220px; }
  .image-wrapper { height: 280px; }
}
</style>