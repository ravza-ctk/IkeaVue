<template>
  <header
    style="
      width: 100vw;
      background: white;
      border-bottom: 1px solid #ddd;
      position: fixed; 
      top: 0;
      left: 0;
      z-index: 999;
    "
  >
    <!-- ÜST MENÜ -->
    <div
      style="
        width: 100%;
        max-width: 1400px;
        display: flex;
        align-items: center;
        padding: 15px 25px;
        gap: 25px;
      "
    >
      <!-- Menü icon -->
      <span style="color:black;font-size: 24px; cursor: pointer;">☰</span>

      <!-- Logo -->
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/1200px-Ikea_logo.svg.png'
        style="height: 35px;"
      />

      <div
        style="
          flex: 1;
          background: #f2f2f2;
          border-radius: 40px;
          padding: 10px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
        "
      >
        <span style="font-size: 18px; opacity: 0.7;">🔍</span>
        <input
          type="text"
          placeholder="Ürün Ara"
          style="
            border: none;
            background: transparent;
            width: 100%;
            outline: none;
            font-size: 15px;
          "
        />
      </div>

     
      <span style="color: black; cursor: pointer;">🏛️ İl Seçiniz</span>


      <span style="color: black; cursor: pointer;">👤 Hej! Üye Girişi / Üye Ol</span>

      <span style="color: black; cursor: pointer; font-size:20px;">♡</span>

      <!-- Sepet -->
      <span style="color: black; cursor: pointer; font-size:20px;">🛒</span>
    </div>

    <!-- ALT MENÜ -->
    <nav
    style="
    display: flex;
    gap: 25px;
    padding: 10px 25px;
    padding-left: 72px;
    font-size: 15px;
  "
>

      <span style="color:black; cursor:pointer;">Ürünler</span>
      <span style="color:black; cursor:pointer;">Odalar</span>
      <span style="color:red; cursor:pointer;">Fırsatlar</span>
      <span style="color:black; cursor:pointer;">ŞAHANE KASIM</span>
      <span style="color:green; cursor:pointer;">Yılbaşı</span>
      <span style="color:orange; cursor:pointer;">YENİ</span>
      <span style="color:black; cursor:pointer;">İyi Fikirler</span>
    </nav>

    <div style="border-bottom: 1px solid #ddd;"></div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>
