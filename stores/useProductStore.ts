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
                this.products = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                } as Product));
            } catch (err: any) {
                this.error = err.message;
                console.error("Error fetching products:", err);
                // Fallback for demo if firebase fails/is empty
                if (this.products.length === 0) {
                    this.products = [
                        { id: '1', name: 'Masa', price: 5499, description: 'Beyaz masa', categoryId: '1', image: '', stock: 10 },
                        { id: '2', name: 'Sandalye', price: 1299, description: 'Ahşap sandalye', categoryId: '1', image: '', stock: 40 }
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
