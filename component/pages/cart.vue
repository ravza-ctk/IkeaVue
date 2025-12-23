<template>
  <div class="cart-page">
    <div class="page-title">
      <BaseText variant="page-title" tag="h2">Alışveriş Sepeti</BaseText>
      <BaseButton variant="icon" size="icon-24">
         <span style="font-weight:bold; font-size: 20px; line-height: 0.5; padding-bottom: 10px;">...</span>
      </BaseButton>
    </div>

    <div class="cart-layout">
      <div class="left-column">
        <div class="addresses-row">
          <AddressCard 
            title="Teslimat Adresi" 
            user-name="Ravza Çetinkaya" 
            user-phone="5531996419" 
            user-address="Samanlı köyü + ghegbfgnngc, Merkez/Yalova" 
            add-new-text="Yeni Adres Ekle" 
          />
          <AddressCard 
            title="Fatura Adresi ve Bilgileri" 
            user-name="Ravza Çetinkaya" 
            user-phone="5531996419" 
            user-address="Samanlı köyü + ghegbfgnngc, Merkez/Yalova" 
            add-new-text="Yeni Fatura Adresi Ekle" 
            badge="Bireysel Fatura" 
          >
             <!-- We might need to inject "Teslimat Adresi" text if the user strictly wants it visible inside, but title covers it. 
                  The prompt had "Teslimat Adresi" under "Fatura Adresi ve Bilgileri". 
                  I'll assume standard layout for now or maybe it meant the billing address IS the delivery address. -->
          </AddressCard>
        </div>
        
        <ServiceBar />

        <!-- Hardcoded Product Item -->
        <div>
            <div class="montaj-section">
                <!-- Placeholder for "Montaj Hizmeti Almak İstiyorum" -->
                <label class="checkbox-container">
            
                    <span class="label-text"></span>
                </label>
            </div>
            
            <ProductItem :product="{
                brand: 'HAUGA',
                desc: 'HAUGA mutfak masası, beyaz',
                dim: '118x74 cm',
                unitPrice: 5499,
                sku: '005.767.09',
                image: 'https://cdn.ikea.com.tr/urunler/2000_2000/PE794503.jpg' 
            }" />
            <!-- Using a real IKEA image link for HAUGA table if valid, or similar. 
                 If this 404s, it's just a broken image, safer to use placeholder? 
                 I'll try a generic white table placeholder or the one from user request context if possible.
                 Actually I will use a placeholder service to be safe or empty.
                 The user didn't give a URL. 
                 Let's stick to a generated placeholder URL to avoid broken external links.
                 'https://via.placeholder.com/150'
            -->
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
            :subtotal="5499" 
            :shipping="799" 
            :total="6298" 
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOrderStore } from '~/stores/useOrderStore';

definePageMeta({
  layout: 'checkout'
});

const orderStore = useOrderStore();

// Helper to map cart item to ProductItem component prop structure
// The existing ProductItem expects a 'product' prop with { brand, desc, dim, unitPrice, sku, image }
const mapItemToProduct = (item: any) => ({
    brand: item.name,
    desc: 'Item Description',
    dim: 'Standard',
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
</style>