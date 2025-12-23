<template>
  <div class="material-section">
    <div class="material-header">
      <BaseText variant="label" class="sub-head">Malzeme</BaseText>
      <BaseText variant="section-title" tag="h2" class="title">Sunta nedir?</BaseText>
    </div>
    <div class="material-content">
      <BaseText variant="paragraph">
        Sunta, geri dönüştürülmüş ahşap ve kereste fabrikası artıklarından yapılır - bu nedenle yanlış renk tonuna sahip ahşap parçalar, talaş ve benzeri atıklar, atılmak yerine bir kaynak haline gelir. Kitaplık, karyola, kanepe ve mutfak iskeletleri gibi ürünler için bu atıkları kullanıyoruz. Aşınma ve neme karşı korumak için ise mobilyanın görünümüne katkıda bulunan vernik, kaplama veya folyo uyguluyoruz.
      </BaseText>
    </div>
  </div>
</template>

<script setup>
import BaseText from '../atoms/BaseText.vue';
</script>

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
  display: block; 
  margin-bottom: 10px; 
  /* BaseText label styles should apply, but color might need override if distinct */
}

.title { 
  margin: 0; 
  font-size: 24px !important; /* Override BaseText section-title size */
  line-height: 1.2; 
}

.material-content { 
  flex: 1; 
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