<template>
  <div class="tracking-container">
    
    <div v-if="loading" class="loading-message">
       Sorgulanıyor...
    </div>

    <div v-else-if="orderResult" class="result-view">
        
        <div class="info-grid">
            <div class="info-item">
                <span class="label">Sipariş Numarası</span>
                <span class="value">{{ orderResult.order_number }}</span>
            </div>
            <div class="info-item">
                <span class="label">Sipariş Tarihi</span>
                <span class="value">{{ formatDate(orderResult.order_date) }}</span>
            </div>
        </div>

        <div class="divider"></div>

        <div class="delivery-header">
            Adrese Teslim - Teslimat 1 ({{ orderResult.tracking_code || 'Takip No Bekleniyor' }})
        </div>

        <div class="info-grid cargo-grid">
            <div class="info-item">
                <span class="label">Kargo Takip</span>
                <a href="#" class="cargo-link">Kargo Linki</a>
            </div>
            <div class="info-item">
                <span class="label">Kargo Firması</span>
                <span class="value">{{ orderResult.cargo_company }}</span>
            </div>
        </div>

        <div class="stepper-container">
            <div class="step-item">
                <div class="circle" :class="{ active: getStepStatus(0) }">
                    <svg v-if="getStepStatus(0)" viewBox="0 0 24 24" width="16" height="16" stroke="white" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span class="step-label">Paketleniyor</span>
            </div>
            
            <div class="step-line"></div>

            <div class="step-item">
                <div class="circle" :class="{ active: getStepStatus(1) }">
                    <svg v-if="getStepStatus(1)" viewBox="0 0 24 24" width="16" height="16" stroke="white" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span class="step-label">Yolda</span>
            </div>

            <div class="step-line"></div>

            <div class="step-item">
                <div class="circle" :class="{ active: getStepStatus(2) }">
                    <svg v-if="getStepStatus(2)" viewBox="0 0 24 24" width="16" height="16" stroke="white" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span class="step-label">Teslim Edildi</span>
            </div>
        </div>

        <div class="product-card-container">
            <div v-if="orderResult.items && orderResult.items.length >= 5" class="product-card">
                <div class="card-content">
                    <div class="img-wrapper">
                         <img :src="orderResult.items[4]" :alt="orderResult.items[0]" class="product-img" />
                    </div>
                    <div class="product-info">
                        <h4 class="product-name">{{ orderResult.items[0] }}</h4>
                        <p class="product-desc">{{ orderResult.items[1] }}</p>
                        <p class="product-desc" style="font-size:12px; margin-top:4px; color:#666;">Adet: {{ orderResult.items[3] }}</p>
                    </div>
                </div>
                
                <div class="card-footer">
                    <div class="footer-item">
                        <span class="label">Ürün Stok Kodu</span>
                        <span class="value">50530988</span>
                    </div>
                    <div class="footer-item price-item">
                        <span class="label">Birim Fiyatı</span>
                        <span class="value price">{{ formatPrice(orderResult.items[2]) }} ₺</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="action-area">
             <BaseButton variant="black" @click="resetForm">Yeni Sorgulama</BaseButton>
        </div>
    </div>

    <form v-else class="tracking-form" @submit.prevent="handleSubmit">
      <BaseField>
        <IkeaSelect 
          v-model="form.verificationMethod"
          placeholder="Doğrulama Yöntemi"
          :options="[
            { value: 'phone', text: 'Telefon Numarası' },
            { value: 'email', text: 'E-Posta Adresi' }
          ]"
        />
      </BaseField>
      
      <BaseField>
        <BaseInput 
          v-model="form.orderNumber"
          placeholder="Sipariş Numarası"
        />
      </BaseField>

      <div class="button-wrapper">
        <BaseButton type="submit" variant="black">Sorgula</BaseButton>
      </div>

      <div v-if="error" class="error-message">
          {{ error }}
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useNuxtApp } from '#app';
import { collection, query, where, getDocs } from 'firebase/firestore';

import BaseInput from '../atoms/BaseInput.vue';
import IkeaSelect from '../atoms/IkeaSelect.vue';
import BaseButton from '../atoms/BaseButton.vue';
import BaseField from './BaseField.vue';

const form = reactive({
  verificationMethod: 'phone',
  orderNumber: ''
});

const loading = ref(false);
const error = ref(null);
const orderResult = ref(null);

// Status Map: Veritabanındaki statüye göre hangi adımların aktif olacağını belirler
const statusMap = {
    'Hazırlanıyor': 0,
    'Paketleniyor': 0,
    'Kargoya Verildi': 1,
    'Yolda': 1,
    'Teslim Edildi': 2
};

const getStepStatus = (stepIndex) => {
    if (!orderResult.value) return false;
    const currentStatus = orderResult.value.status; 
    // Eğer DB'den gelen status map'te yoksa varsayılan olarak hepsini pasif yapabiliriz
    // veya basit string eşleştirmesi kullanabiliriz.
    const activeIndex = statusMap[currentStatus] !== undefined ? statusMap[currentStatus] : -1;
    return stepIndex <= activeIndex;
};

const handleSubmit = async () => {
    if (!form.orderNumber) {
        error.value = "Lütfen sipariş numarası giriniz.";
        return;
    }

    loading.value = true;
    error.value = null;

    try {
        const { $db } = useNuxtApp();
        const q = query(collection($db, 'orders'), where('order_number', '==', form.orderNumber));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const doc = querySnapshot.docs[0];
            orderResult.value = doc.data();
        } else {
            error.value = "Sipariş bulunamadı. Lütfen bilgileri kontrol ediniz.";
        }
    } catch (err) {
        console.error(err);
        error.value = "Sorgulama sırasında bir hata oluştu: " + err.message;
    } finally {
        loading.value = false;
    }
};

const resetForm = () => {
    orderResult.value = null;
    form.orderNumber = '';
    error.value = null;
};

const formatPrice = (price) => {
    if (price === undefined || price === null) return '0,00';
    return Number(price).toLocaleString('tr-TR', { minimumFractionDigits: 2 });
};

const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    // 17.12.2024 19:32 formatı için
    return date.toLocaleString('tr-TR', { 
        day: '2-digit', month: '2-digit', year: 'numeric', 
        hour: '2-digit', minute: '2-digit' 
    });
};
</script>

<style scoped>
.tracking-container {
    width: 100%;
    font-family: 'Noto Sans', sans-serif; /* IKEA Font benzeri */
}

/* Form Styles */
.tracking-form { 
  display: flex; 
  flex-direction: column; 
  gap: 20px; 
  max-width: 400px; 
}

.button-wrapper { margin-top: 10px; }
.error-message { color: #cc0008; font-size: 14px; margin-top: 10px; }
.loading-message { font-size: 16px; color: #666; padding: 20px 0; }

/* Result View Styles - Mobile Design Replication */
.result-view {
    max-width: 600px;
    background: #fff;
    padding: 0; /* İçerik padding'i elemanlara verilecek */
}

/* Label & Value Typography */
.label {
    display: block;
    font-size: 14px;
    font-weight: 700;
    color: #111;
    margin-bottom: 4px;
}

.value {
    display: block;
    font-size: 14px;
    color: #484848;
}

/* Top Grid (Sipariş No & Tarih) */
.info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 20px 0;
}

.divider {
    height: 1px;
    background-color: #dfdfdf;
    margin: 0 0 20px 0;
}

/* Delivery Header */
.delivery-header {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 20px;
    color: #111;
}

.cargo-grid {
    padding-top: 0;
}

.cargo-link {
    color: #0058a3;
    font-weight: 700;
    text-decoration: none;
    font-size: 14px;
}
.cargo-link:hover { text-decoration: underline; }

/* Stepper (Yeşil İlerleme Çubuğu) */
.stepper-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0 50px 0;
    position: relative;
}

.step-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2; /* Çizginin üstünde kalması için */
}

.circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #f5f5f5; /* Pasif renk */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
}

.circle.active {
    background-color: #008a00; /* IKEA Green */
}

.step-label {
    font-size: 12px;
    font-weight: 700;
    color: #111;
}

.step-line {
    flex-grow: 1;
    height: 0;
    border-top: 3px dotted #008a00; /* Yeşil noktalı çizgi */
    margin: 0 10px;
    margin-bottom: 20px; /* Label hizası için yukarı taşıma */
}

/* Product Card */
.product-card {
    border: 1px solid #dfdfdf;
    padding: 24px;
    margin-bottom: 20px;
    background: #fff;
}

.card-content {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
}

.img-wrapper {
    width: 80px;
    height: 100px;
    flex-shrink: 0;
}

.product-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.product-info {
    flex-grow: 1;
}

.product-name {
    margin: 0 0 5px 0;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
}

.product-desc {
    margin: 0;
    font-size: 14px;
    color: #484848;
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.footer-item .label {
    font-size: 12px;
    margin-bottom: 2px;
}

.footer-item .value {
    font-size: 14px;
}

.price-item {
    text-align: right;
}

.price-item .value.price {
    font-weight: 700;
    font-size: 16px;
    color: #111;
}

.action-area {
    margin-top: 30px;
    text-align: center;
}
</style>