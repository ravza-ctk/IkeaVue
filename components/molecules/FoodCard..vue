<template>
  <div class="food-item">
    <div class="cat-image-wrapper">
       <img :src="image" :alt="title" class="cat-image" />
    </div>
    <h3 class="cat-title">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  props: ['title', 'image']
}
</script>

<style scoped>
.category-item { display: flex; flex-direction: column; align-items: center; text-align: center; cursor: pointer; }
.cat-image-wrapper { width: 100%; aspect-ratio: 1; overflow: hidden; margin-bottom: 20px; }
.cat-image { width: 100%; height: 100%; object-fit: contain; transition: transform 0.3s; }
.category-item:hover .cat-image { transform: scale(1.05); }
.cat-title { font-size: 13px; font-weight: 700; text-transform: uppercase; color: #111; letter-spacing: 0.5px; }
</style>