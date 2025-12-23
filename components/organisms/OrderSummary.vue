<template>
  <div class="summary-box">
     <BaseText variant="section-title" tag="h3">Sipariş Özeti</BaseText>
     
     <div class="s-row">
       <span>Ürünler Bedeli</span>
       <BaseText variant="label" tag="strong">{{ subtotal }}₺</BaseText>
     </div>
     <BaseText variant="label" class="vat">KDV Dahil</BaseText>
     
     <div class="s-row">
       <span>Nakliye Bedeli</span>
       <BaseText variant="label" tag="strong">{{ shipping }}₺</BaseText>
     </div>
     <BaseText variant="label" class="vat">KDV Dahil</BaseText>

     <hr class="s-divider">

     <div class="s-row total">
       <BaseText variant="section-title" tag="span">Genel Toplam</BaseText>
       <span class="big-price">{{ total }}<sup class="curr-symbol">₺</sup></span>
     </div>
     <BaseText variant="label" class="vat">KDV Dahil</BaseText>

     <div class="coupon-box entercode">
        <div class="coupon-box__icon">
            <!-- Replaced i class="icon-coupon" with SVG -->
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
        </div>
        <div class="coupon-box__head">
            <span>Çek Numarası Uygula</span>
            <!-- Replaced i class="icon-right-arrow" with SVG -->
            <svg class="icon-right-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </div>
        <div class="coupon-box__entercode">
            <div class="coupon-box__entercode--input">
                <input type="text" class="form__input w-100" placeholder="Kodu giriniz">
            </div>
            <div class="coupon-box__entercode--btn">
                <span class="btn btn-black">Uygula</span>
            </div>
            <div class="coupon-box__entercode--note">
                <span>Çek numarasını boşluk olmadan girin.</span>
            </div>
        </div>
        <div class="coupon-box__used--coupons"></div>
    </div>

     <div class="form-group">
        <a id="btnContinue" class="btn btn-primary btn-block btn-continue btn-jumbo" href="/siparis-adim/siparis-ozeti-ve-odeme">
            <span>Ödeme Sayfasına Devam Et</span>
            <!-- Replaced i class="icon-arrow-right" with SVG -->
            <svg class="icon-arrow-right hidden-xs" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
     </div>

     <div class="ssl-info">
       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
       <span>SSL veri şifreleme ile güvenli alışveriş</span>
     </div>
  </div>
</template>

<script>
import BaseText from '../atoms/BaseText.vue';

export default {
  components: { BaseText },
  props: ['subtotal', 'shipping', 'total']
}
</script>

<style scoped>
.summary-box { position: sticky; top: 100px; }
.summary-box h3 { font-size: 16px; margin-bottom: 25px; font-weight: 700; }
.s-row { display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 4px; color: #484848; }
.s-row strong { color: #111; font-weight: 400; }
.vat { font-size: 11px; color: #767676; display: block; margin-bottom: 15px; }
.s-divider { border: none; border-top: 1px solid #111; margin: 20px 0; }
.total { align-items: flex-end; margin-top: 5px; }
.total span:first-child { font-weight: 700; font-size: 16px; color: #111; }
.big-price { font-size: 36px; font-weight: 700; line-height: 0.8; display: flex; align-items: flex-start; }
.curr-symbol { font-size: 14px; top: 0; margin-left: 2px; }

/* Coupon Box Styles */
.coupon-box {
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
    padding: 20px 0;
    margin: 20px 0 30px;
}
.coupon-box__icon { display: none; } /* Hide if not needed or style it */
.coupon-box__head {
    display: flex; justify-content: space-between; align-items: center;
    font-size: 14px; font-weight: 700; color: #484848;
    cursor: pointer; margin-bottom: 15px;
}
.coupon-box__entercode { display: flex; flex-wrap: wrap; gap: 10px; }
.coupon-box__entercode--input { flex: 1; }
.form__input {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #dfdfdf;
    border-radius: 4px; /* Optional rounded */
}
.coupon-box__entercode--btn { }
.btn {
    display: inline-flex; align-items: center; justify-content: center;
    border: none; cursor: pointer; text-decoration: none;
    font-weight: 700; font-size: 14px;
}
.btn-black {
    background: #111; color: white; height: 40px; padding: 0 20px; border-radius: 20px;
}
.coupon-box__entercode--note { width: 100%; font-size: 12px; color: #767676; margin-top: 5px; }

/* Checkout Button Styles */
.form-group { margin-top: 20px; }
.btn-primary {
    background-color: #0058a3; color: white;
    width: 100%; padding: 20px;
    border-radius: 999px;
    display: flex; justify-content: space-between;
    transition: background 0.2s;
}
.btn-primary:hover { background-color: #004f93; }
.btn-jumbo { font-size: 16px; }
.icon-arrow-right { background: white; color: #0058a3; border-radius: 50%; padding: 4px; box-sizing: content-box; width: 16px; height: 16px; }

.ssl-info { margin-top: 20px; font-size: 12px; color: #767676; display: flex; gap: 8px; align-items: center; justify-content: center; text-decoration: underline; text-decoration-style: dotted; }
</style>