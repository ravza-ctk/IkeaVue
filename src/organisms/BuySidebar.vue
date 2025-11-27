<template>
  <div class="right-column">
    <div class="sticky-wrapper">
      
      <div class="product-header">
        <h1 class="p-title">BILLY</h1>
        <p class="p-sub">cam kapaklı kitaplık, beyaz, 80x30x202 cm</p>
      </div>

      <PriceBlock price="7.599₺" sku="690.178.28" />

      <p class="installment-text">2.533₺ x 3 ay'a varan vade farksız <a href="#">taksit seçenekleri</a></p>
      <hr class="short-divider">

      <ColorSelector 
        selectedColorName="beyaz"
        :colors="[
          'https://image-ikea.mncdn.com/urunler/190_190/PE700390.jpg',
          'https://image-ikea.mncdn.com/urunler/190_190/PE867570.jpg',
          'https://image-ikea.mncdn.com/urunler/190_190/PE770197.jpg',
          'https://image-ikea.mncdn.com/urunler/190_190/PE864645.jpg'
        ]"
      />

      <div class="function-link"><span>Diğer Fonksiyonlar</span><span>></span></div>
      <hr class="short-divider">
      
      <div class="dimension-section"><strong>Ölçü</strong><p>80x30x202 cm</p></div>

      <IkeaButton variant="primary">
        <template #icon>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line></svg>
        </template>
        Sepete Ekle
      </IkeaButton>

      <IkeaButton variant="secondary">
        <template #icon>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V7l8-4 8 4v14M10 9a3 3 0 1 0 6 0"></path></svg>
        </template>
        Mağaza stok durumunu kontrol et
      </IkeaButton>

    </div>
  </div>
</template>

<script setup>
import PriceBlock from '../molecules/PriceBlock.vue'; // YENİ EKLENDİ
import ColorSelector from '../molecules/ColorSelector.vue';
import IkeaButton from '../atoms/IkeaButtonProduct.vue';
</script>

<style scoped>
.right-column { flex: 1; min-width: 350px; }
.sticky-wrapper { position: sticky; top: 80px; } 
.p-title { font-size: 20px; font-weight: 700; text-transform: uppercase; margin: 0; }
.p-sub { font-size: 14px; color: #484848; margin: 5px 0 20px; }
.installment-text { font-size: 12px; margin-bottom: 5px; color: #484848; }
.installment-text a { color: #0058a3; text-decoration: underline; }
.short-divider { border: none; border-top: 1px solid #dfdfdf; margin: 20px 0; }
.function-link { display: flex; justify-content: space-between; font-size: 14px; font-weight: 700; cursor: pointer; padding: 10px 0; }
.dimension-section { margin-bottom: 20px; font-size: 14px; }
.dimension-section p { margin: 5px 0 0; color: #484848; }

@media (max-width: 900px) {
  .right-column { order: -1; margin-bottom: 30px; }
}
</style>