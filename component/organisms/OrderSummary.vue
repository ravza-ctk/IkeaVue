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

     <button class="coupon-btn">
       <div class="c-left">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Çek Numarası Uygula</span>
       </div>
       <span class="chevron">›</span>
     </button>

     <button class="checkout-btn">
       <span>Ödeme Sayfasına Devam Et</span>
       <div class="arrow-circle">
         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
       </div>
     </button>

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
.coupon-btn { width: 100%; display: flex; align-items: center; justify-content: space-between; background: white; border: none; border-top: 1px solid #dfdfdf; border-bottom: 1px solid #dfdfdf; padding: 20px 0; margin-bottom: 30px; cursor: pointer; font-size: 14px; font-weight: 700; color: #484848; margin-top: 20px; }
.coupon-btn:hover .chevron { transform: translateX(5px); }
.c-left { display: flex; gap: 10px; align-items: center; }
.chevron { font-size: 20px; transition: 0.2s; }
.checkout-btn { width: 100%; background-color: #0058a3; color: white; border: none; padding: 24px 30px; border-radius: 999px; font-size: 14px; font-weight: 700; cursor: pointer; display: flex; justify-content: space-between; align-items: center; transition: background 0.2s; }
.checkout-btn:hover { background-color: #004f93; }
.arrow-circle { background: white; color: #0058a3; border-radius: 50%; width: 24px; height: 24px; display: flex; justify-content: center; align-items: center; }
.ssl-info { margin-top: 20px; font-size: 12px; color: #767676; display: flex; gap: 8px; align-items: center; justify-content: center; text-decoration: underline; text-decoration-style: dotted; }
</style>