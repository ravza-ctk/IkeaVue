<template>
  <div class="shopping-cart-page">
    <header class="cart-header">
      <h2>Alışveriş Sepeti</h2>
    </header>

    <div class="cart-content">
      <div class="left-panel">
        
        <div class="address-cards-container">
            <section class="address-card delivery-address">
              <div class="card-header">
                <h3>Teslimat Adresi</h3>
                <span class="edit-icon">...</span>
              </div>
              <p>**Ravza Çetinkaya** 5531996419</p>
              <p>Samanlı köyü + ghegbfgninc, Merkez/Yalova</p>
              <a href="#">Yeni Adres Ekle</a>
            </section>

            <section class="address-card invoice-address">
              <header class="card-header">
                <h3>Fatura Adresi ve Bilgileri</h3>
                <span class="edit-icon">...</span>
              </header>
              <div class="address-details">
                <div class="billing-address">
                  <input type="radio" id="individual" name="invoice-type" checked>
                  <label for="individual">Bireysel Fatura</label>

                  <p>**Ravza Çetinkaya** 5531996419</p>
                  <p>Samanlı köyü + ghegbfgninc, Merkez/Yalova</p>
                  <a href="#">Yeni Fatura Adresi Ekle</a>
                </div>
              </div>
            </section>
        </div>
        <div class="product-item">
          <img src="https://image-ikea.mncdn.com/urunler/190_190/PE740215.jpg" alt="MAMMUT çocuk masası, beyaz" class="product-image">
          <div class="product-info">
            <span class="product-brand">MAMMUT</span>
            <p class="product-name">çocuk masası, beyaz</p>
            <span class="product-dimensions">77x55 cm</span>
            <span class="product-price">1.599₺ / adet</span>
          </div>
          <div class="product-actions">
            <div class="quantity-control">
              <button @click="decrementQuantity">-</button>
              <input type="number" :value="quantity" min="1" readonly>
              <button @click="incrementQuantity">+</button>
            </div>
            <button class="remove-button">Kaldır</button>
          </div>
        </div>

        <div class="product-status-code">
            503.651.77
        </div>
      </div>
      
      <div class="right-panel">
        <section class="order-summary-card">
          <h3>Sipariş Özeti</h3>
          <div class="summary-line">
            <span>Ürünler Bedeli</span>
            <span class="price">1.599₺</span>
          </div>
          <div class="summary-line tax-line">
            <span>KDV Dahil</span>
          </div>
          <div class="summary-line">
            <span>Nakliye Bedeli</span>
            <span class="price">399₺</span>
          </div>
          <div class="summary-line tax-line">
            <span>KDV Dahil</span>
          </div>
          <hr>
          <div class="summary-line total-line">
            <span>Genel Toplam</span>
            <span class="price total-price">1.998₺</span>
          </div>
          <div class="summary-line tax-line">
            <span>KDV Dahil</span>
          </div>

          <div class="coupon-section">
            <a href="#">Çek Numarası Uygula ></a>
          </div>

          <button class="checkout-button">
            Ödeme Sayfasına Devam Et
            <span class="arrow-icon">→</span>
          </button>
          
          <p class="ssl-info">
            SSL veri şifreleme ile güvenli alışveriş
          </p>
        </section>
      </div>
    </div>

    <footer class="cart-footer">
      <div class="delivery-info">
        <h3>Teslimat Tarihi</h3>
        <p>Tahmini **2 iş günü** içinde kargoya verilir.</p>
        <p>Siparişiniz sizi bekletmemek adına birden fazla teslimat olarak gerçekleştirilebilir. Kargo firmalarının adrese teslim yapamadığı köy ve beldelerde sipariş, alıcının adresine en yakın kargo şubesinden veya ortak noktadan teslim edilmektedir. Güncel dağıtım bölgelerimizi görmek için <a href="#">tıklayın</a>.</p>
      </div>
      <div class="return-info">
        <h3>Kolay İade</h3>
        <p>İnternet Mağazası'ndan yaptığınız alışverişlerinizde **ürününüzün iadesi** için teslim tarihinden itibaren **14 gün** içinde talebinizi iletmeniz gerekmektedir. İade talebi adımları için <a href="#">tıklayın</a>.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ShoppingCart',
  setup() {
    const quantity = ref(1);

    const incrementQuantity = () => {
      quantity.value++;
    };

    const decrementQuantity = () => {
      if (quantity.value > 1) {
        quantity.value--;
      }
    };

    return {
      quantity,
      incrementQuantity,
      decrementQuantity,
    };
  },
};
</script>

<style scoped>
.shopping-cart-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: sans-serif;
}

.cart-content {
  display: flex;
  gap: 30px;
}

.left-panel {
  flex: 2; 
}

.right-panel {
  flex: 1; 
}

.address-cards-container {
    display: flex;
    gap: 20px; 
    margin-bottom: 20px; 
}

.address-card {
    flex: 1; 
    
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 4px;
    color:rgb(0, 0, 0);
}


.product-item,
.order-summary-card {
  border: 0px solid #000000;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  color:rgb(66, 62, 62);
}

.address-card .card-header,
.product-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgb(0, 0, 0);
}

.product-item img {
    width: 80px;
    height: 80px;
    margin-right: 20px;

}

.quantity-control button {
    padding: 5px 10px;
}

.checkout-button {
  width: 100%;
  padding: 15px;
  background-color: #0058a3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
}

.cart-footer {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    padding-top: 20px;
    border-top: 0px solid #eee;
}
</style>