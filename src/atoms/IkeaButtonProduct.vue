<template>
  <button class="ikea-btn" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<style scoped>
.ikea-btn {
  /* --- GENİŞLİK VE YÜKSEKLİK --- */
  width: 100%;       /* Kapsayıcısının tamamını kaplar (Input ile eşitlenir) */
  height: 48px;      /* Cep telefonu kutusuyla birebir aynı yükseklik */
  
  /* --- GÖRÜNÜM --- */
  background-color: #0058a3; /* Orijinal IKEA Mavisi */
  color: white;
  border: none;
  
  /* --- ŞEKİL (HAP GİBİ) --- */
  border-radius: 999px; /* Tam yuvarlak kenarlar */
  
  /* --- YAZI VE DÜZEN --- */
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 20px; /* Input ile buton arasındaki boşluk */
  transition: background-color 0.2s;
}

.ikea-btn:hover {
  background-color: #004f93;
}

.ikea-btn:active {
  transform: scale(0.99);
}
</style>