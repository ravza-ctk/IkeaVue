import { defineStore } from 'pinia';
import {
    collection,
    getDocs,
    addDoc,
    query,
    where,
    type DocumentData
} from 'firebase/firestore';
import type { Product } from '~/types';

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [] as Product[],
        loading: false,
        error: null as string | null,
    }),
    actions: {
        async fetchProducts() {
            this.loading = true;
            try {
                const { $db } = useNuxtApp();
                const q = query(collection($db, 'products'));
                const querySnapshot = await getDocs(q);
                this.products = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                        name: data.name,
                        price: data.price,
                        description: data.description,
                        categoryId: data.category || data.categoryId,
                        stock: typeof data.stock_status === 'boolean' ? (data.stock_status ? 100 : 0) : (data.stock || 0),
                        image: data.image_url || data.image_url1 || data.image || '',
                        sku: data.sku || data.skU || '',
                        dimensions: data.dimensions || {},
                        color: data.color || '',
                        material: data.material || ''
                    } as Product;
                });
            } catch (err: any) {
                this.error = err.message;
                console.error("Error fetching products:", err);
                // Fallback for demo if firebase fails/is empty
                if (this.products.length === 0) {
                    this.products = [
                        {
                            id: '1',
                            name: 'HAUGA Mutfak Masası',
                            price: 5499,
                            description: 'Ahşap kaplama tablalı sağlam ahşap masa, güzellik ve günlük aşınmaya dayanma kabiliyetini artırmak için boyanmış ve cilalanmıştır.',
                            categoryId: 'Mutfak Masaları',
                            image: 'https://image-ikea.mncdn.com/urunler/500_500/PE960173.jpg',
                            stock: 100,
                            sku: '005.767.09',
                            dimensions: { depth: 74, width: 118, unit: 'cm' },
                            color: 'beyaz'
                        },
                        {
                            id: '2',
                            name: 'BILLY Cam Kapaklı Kitaplık',
                            price: 7599,
                            description: 'Cam kapaklar ile en sevdiğiniz eşyalarınızı tozdan korurken sergileyebilirsiniz. Ayarlanabilir rafları sayesinde koleksiyonunuz genişledikçe size uyum sağlar.',
                            categoryId: 'Kitaplıklar',
                            image: 'https://image-ikea.mncdn.com/urunler/500_500/PE700390.jpg',
                            stock: 100,
                            sku: '690.178.28',
                            dimensions: { depth: 30, height: 202, width: 80, unit: 'cm' },
                            color: 'Beyaz',
                            material: 'Sunta, Kağıt folyo, Plastik kenar'
                        }
                    ]
                }
            } finally {
                this.loading = false;
            }
        },
        async addProduct(product: Omit<Product, 'id'>) {
            this.loading = true;
            try {
                const { $db } = useNuxtApp();
                const docRef = await addDoc(collection($db, 'products'), product);
                this.products.push({ id: docRef.id, ...product });
            } catch (err: any) {
                this.error = err.message;
                throw err;
            } finally {
                this.loading = false;
            }
        }
    }
});
