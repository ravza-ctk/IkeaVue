<template>
  <div class="admin-page">
    <div class="admin-container">
      <BaseText variant="page-title" tag="h1">Ürün Yönetimi (Admin)</BaseText>
      <p>Bu panelden yeni ürün ekleyip Firebase'e yazabilirsiniz (Read/Write testi).</p>
      
      <div class="form-card">
        <BaseField label="Ürün Adı">
          <BaseInput v-model="form.name" placeholder="Örn: BILLY Kitaplık" />
        </BaseField>

        <BaseField label="Fiyat (₺)">
          <BaseInput v-model="form.price" type="number" placeholder="5499" />
        </BaseField>

        <BaseField label="Açıklama">
          <BaseInput v-model="form.description" placeholder="Ürün açıklaması..." />
        </BaseField>

        <BaseField label="Kategori ID">
             <BaseInput v-model="form.categoryId" placeholder="1" />
        </BaseField>

        <BaseField label="Stok">
             <BaseInput v-model="form.stock" type="number" placeholder="100" />
        </BaseField>

        <BaseButton variant="blue" size="large" @click="saveProduct" :disabled="loading">
            {{ loading ? 'Kaydediliyor...' : 'Ürünü Ekle' }}
        </BaseButton>
      </div>

      <hr class="divider">

      <BaseText variant="section-title">Mevcut Ürünler (Canlı Liste)</BaseText>
      <div class="product-list">
         <div v-for="p in productStore.products" :key="p.id" class="list-item">
            <strong>{{ p.name }}</strong> - {{ p.price }}₺ 
            <span class="stock-badge">Stok: {{ p.stock }}</span>
         </div>
         <div v-if="productStore.products.length === 0">Hiç ürün yok.</div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useProductStore } from '~/stores/useProductStore';

definePageMeta({
  layout: 'default'
});

const productStore = useProductStore();
const loading = ref(false);

const form = reactive({
    name: '',
    price: '',
    description: '',
    categoryId: '1',
    image: '',
    stock: 10
});

onMounted(() => {
    productStore.fetchProducts();
});

const saveProduct = async () => {
    if (!form.name || !form.price) return alert("Ad ve Fiyat zorunlu");
    
    loading.value = true;
    try {
        await productStore.addProduct({
            name: form.name,
            price: Number(form.price),
            description: form.description,
            categoryId: form.categoryId,
            image: 'https://placehold.co/400', // Placeholder image
            stock: Number(form.stock)
        });
        alert("Ürün başarıyla eklendi!");
        // Reset
        form.name = '';
        form.price = '';
        form.description = '';
    } catch (e: any) {
        alert("Hata: " + e.message);
    } finally {
        loading.value = false;
    }
};
</script>

<style scoped>
.admin-page { padding: 40px; background: #f9f9f9; min-height: 80vh; }
.admin-container { max-width: 800px; margin: 0 auto; background: #fff; padding: 40px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
.form-card { display: flex; flex-direction: column; gap: 20px; max-width: 500px; margin-bottom: 40px; }
.divider { border: 0; border-top: 1px solid #eee; margin: 40px 0; }
.list-item { padding: 10px; border-bottom: 1px solid #f0f0f0; display: flex; justify-content: space-between; }
.stock-badge { background: #eee; padding: 2px 8px; border-radius: 4px; font-size: 12px; }
</style>
