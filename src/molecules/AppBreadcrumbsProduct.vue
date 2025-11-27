<template>
  <nav class="breadcrumbs">
    <a href="#">Ana Sayfa</a><span>›</span>
    <a href="#">Ürünler</a><span>›</span>
    <a href="#">Kitaplıklar ve Raflar</a><span>›</span>
    <a href="#">Kitaplıklar</a><span>›</span>
    <span class="current">Cam Kapaklı Kitaplıklar</span>
  </nav>
</template>

<style scoped>
.breadcrumbs { 
  font-size: 12px; color: #484848; 
  margin-bottom: 20px; 
}
.breadcrumbs a { 
  text-decoration: none; color: inherit; 
}
.breadcrumbs a:hover {
  text-decoration: underline;
}
.breadcrumbs span { 
  margin: 0 5px; color: #929292; 
}
.breadcrumbs .current { 
  color: #111; 
}
</style>