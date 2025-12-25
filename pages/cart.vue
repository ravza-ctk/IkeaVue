<template>
  <div class="cart-page">
    <div class="page-title">
      <BaseText variant="page-title" tag="h2">Alışveriş Sepeti ({{ cartStore.totalItems }} Ürün)</BaseText>
      <BaseButton variant="icon" size="icon-24">
         <span style="font-weight:bold; font-size: 20px; line-height: 0.5; padding-bottom: 10px;">...</span>
      </BaseButton>
    </div>

    <div class="cart-layout">
      <div class="left-column">
        <div class="addresses-row">
          <!-- Delivery Address Section -->
          <div class="address-col">
              <h3 class="box-section-title">Teslimat Adresi</h3>
              <AddressCard 
                title="Teslimat Adresi" 
                user-name="Ravza Çetinkaya" 
                user-phone="5531996419" 
                user-address="Samanlı köyü + ghegbfgnngc, Merkez/Yalova" 
                add-new-text="Yeni Adres Ekle" 
              >
                <template #icon>
                    <i class="icon-order-tracking left"></i>
                </template>
              </AddressCard>
          </div>

          <!-- Billing Address Section -->
          <div class="address-col">
              <h3 class="box-section-title">Fatura Adresi ve Bilgileri</h3>
              <AddressCard 
                title="Teslimat Adresi" 
                user-name="Ravza Çetinkaya" 
                user-phone="5531996419" 
                user-address="Samanlı köyü + ghegbfgnngc, Merkez/Yalova" 
                add-new-text="Yeni Fatura Adresi Ekle" 
                badge="Bireysel Fatura" 
              >
                <template #icon>
                    <p class="no-item hide">Fatura Adresi Seçiniz</p>
                </template>
              </AddressCard>
          </div>
        </div>
        
        <ServiceBar />

        <!-- Dynamic Product Items -->
         <div v-if="cartStore.loading">Sepetiniz yükleniyor...</div>
         <div v-else-if="cartStore.cartItems.length === 0">Sepetinizde ürün bulunmamaktadır.</div>
        <div v-else>
            <div class="montaj-section">
                <!-- Placeholder for "Montaj Hizmeti Almak İstiyorum" -->
                <label class="checkbox-container">
                    <span class="label-text"></span>
                </label>
            </div>
            
            <div v-for="item in cartStore.cartItems" :key="item.productId" class="cart-item-wrapper" style="margin-bottom: 20px;">
                <ProductItem :product="mapItemToProduct(item)" />
                <div @click="removeFromCart(item.id!)" style="color: red; cursor: pointer; text-align: right; font-size: 12px; text-decoration: underline; margin-top: 5px;">Ürünü Kaldır</div>
            </div>
        </div>

        <hr class="section-divider" />
        <div class="footer-infos">
           <FooterInfoItem title="Teslimat Tarihi">
                <p>Tahmini 5 iş günü içinde kargoya verilir.</p>
                <p style="margin-top: 10px;">Siparişiniz sizi bekletmemek adına birden fazla teslimat olarak gerçekleştirilebilir. Kargo firmalarının adrese teslim yapamadığı köy ve beldelerde sipariş, alıcının adresine en yakın kargo şubesinden veya ortak noktadan teslim edilmektedir. Güncel dağıtım bölgelerimizi görmek için tıklayın.</p>
           </FooterInfoItem>
           <FooterInfoItem title="Kolay İade">
                <p>İnternet Mağazasından yaptığınız alışverişlerinizde ürününüzün iadesi için teslim alma tarihinden itibaren 14 gün içinde talebinizi iletmeniz gerekmektedir. İade talebi adımları için tıklayın.</p>
           </FooterInfoItem>
        </div>
      </div>
      <div class="right-column">
        <OrderSummary 
            :subtotal="cartStore.totalPrice" 
            :shipping="cartStore.totalItems > 0 ? 799 : 0" 
            :total="cartStore.totalPrice + (cartStore.totalItems > 0 ? 799 : 0)" 
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/useCartStore';
import { onMounted } from 'vue';

definePageMeta({
  layout: 'default'
});

const cartStore = useCartStore();

onMounted(() => {
    cartStore.fetchCart();
});

const removeFromCart = async (id: string) => {
    await cartStore.removeFromCart(id);
};

// Helper to map cart item to ProductItem component prop structure
const mapItemToProduct = (item: any) => ({
    brand: item.name,
    desc: item.name, // Using name as description since we store minimal data
    dim: 'Standart',
    unitPrice: item.price,
    sku: item.productId,
    image: item.image
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');

.cart-page {
  font-family: 'Noto Sans', Arial, sans-serif; color: #111;
  max-width: 1400px; margin: 0 auto; padding: 40px; 
}

.page-title { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
.cart-layout { display: flex; gap: 80px; align-items: flex-start; }
.left-column { flex: 1; }
.right-column { width: 380px; flex-shrink: 0; }
.addresses-row { display: flex; gap: 20px; margin-bottom: 30px; }
.section-divider { border: none; border-top: 1px solid #dfdfdf; margin: 20px 0 40px; }
.footer-infos { display: flex; gap: 40px; margin-bottom: 60px; flex-wrap: wrap; }

.montaj-section {
    padding: 20px 0;
    border-bottom: 1px solid #dfdfdf;
}
.checkbox-container {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    color: #111;
}
.checkbox-container input {
    margin-right: 10px;
    transform: scale(1.2);
}

.box-section-title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #111;
}

.address-col { flex: 1; }

.footer-infos :deep(.f-head) {
    font-size: 18px;
}
</style>