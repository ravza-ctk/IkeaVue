<template>
  <div class="material-section">
    <div class="material-header">
      <span class="sub-head">Malzeme</span>
      <h2>Sunta nedir?</h2>
    </div>
    <div class="material-content">
      <p>
        Sunta, geri dönüştürülmüş ahşap ve kereste fabrikası artıklarından yapılır - bu nedenle yanlış renk tonuna sahip ahşap parçalar, talaş ve benzeri atıklar, atılmak yerine bir kaynak haline gelir. Kitaplık, karyola, kanepe ve mutfak iskeletleri gibi ürünler için bu atıkları kullanıyoruz. Aşınma ve neme karşı korumak için ise mobilyanın görünümüne katkıda bulunan vernik, kaplama veya folyo uyguluyoruz.
      </p>
    </div>
  </div>
</template>

<style scoped>
.material-section { 
  display: flex; 
  gap: 60px; 
  margin: 80px 0; 
  align-items: flex-start; 
}

.material-header { 
  flex: 0 0 250px; 
}

.sub-head { 
  font-size: 12px; font-weight: 700; 
  color: #484848; display: block; 
  margin-bottom: 10px; 
}

.material-header h2 { 
  font-size: 24px; font-weight: 700; 
  margin: 0; line-height: 1.2; 
}

.material-content { 
  flex: 1; 
}

.material-content p { 
  font-size: 14px; line-height: 1.6; 
  color: #484848; margin: 0; 
}

/* Responsive */
@media (max-width: 900px) {
  .material-section { 
    flex-direction: column; 
    gap: 30px; 
    margin: 40px 0; 
  }
  .material-header { 
    width: 100%; flex: none; 
  }
}
</style>