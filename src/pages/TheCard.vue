<template>
  <div class="ikea-page-overlay">
    

    <div class="main-content">
      <div class="page-title">
        <h2>Alışveriş Sepeti</h2>
        <button class="more-options-btn">...</button>
      </div>

      <div class="cart-layout">
        <div class="left-column">
          <div class="addresses-row">
            <AddressCard title="Teslimat Adresi" user-name="Ravza Çetinkaya" user-phone="5531996419" user-address="Yalova" add-new-text="Yeni Adres Ekle" />
            <AddressCard title="Fatura Adresi" user-name="Ravza Çetinkaya" user-phone="5531996419" user-address="Yalova" add-new-text="Yeni Fatura Ekle" badge="Bireysel" />
          </div>
          <ServiceBar />
          <ProductItem :product="currentProduct" />
          <hr class="section-divider" />
          <div class="footer-infos">
             <FooterInfoItem title="Teslimat Tarihi"><p>2 iş günü...</p></FooterInfoItem>
             <FooterInfoItem title="Kolay İade"><p>İade koşulları...</p></FooterInfoItem>
          </div>
        </div>
        <div class="right-column">
          <OrderSummary subtotal="5.499" shipping="799" total="6.298" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import AddressCard from '../molecules/AddressCard.vue';
import ServiceBar from '../molecules/ServiceBar.vue';
import FooterInfoItem from '../molecules/FooterInfoItem.vue';

import ProductItem from '../organisms/ProductItem.vue';
import OrderSummary from '../organisms/OrderSummary.vue';
export default {
  name: 'IKEACartFullPage',
  components: { AddressCard, ServiceBar, FooterInfoItem, ProductItem, OrderSummary },
  emits: ['close'], 
  data() {
    return {
      currentProduct: {
        brand: 'HAUGA', desc: 'mutfak masası, beyaz', dim: '118x74 cm',
        unitPrice: '5.499', sku: '005.767.09', image: 'https://image-ikea.mncdn.com/urunler/190_190/PE951816.jpg'
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');

.ikea-page-overlay {
  position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
  background-color: #fff; z-index: 5000; overflow-y: auto;
  font-family: 'Noto Sans', Arial, sans-serif; color: #111;
}



.main-content { max-width: 1400px; margin: 0 auto; padding: 40px; margin-top: 40px; }
.page-title { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
.cart-layout { display: flex; gap: 80px; align-items: flex-start; }
.left-column { flex: 1; }
.right-column { width: 380px; flex-shrink: 0; }
.addresses-row { display: flex; gap: 20px; margin-bottom: 30px; }
.section-divider { border: none; border-top: 1px solid #dfdfdf; margin: 20px 0 40px; }
.footer-infos { display: flex; gap: 40px; margin-bottom: 60px; flex-wrap: wrap; }
</style>