import { defineStore } from 'pinia';
import { collection, getDocs } from 'firebase/firestore';
import type { Category } from '~/types';

export const useCategoryStore = defineStore('category', {
    state: () => ({
        categories: [] as Category[],
        loading: false
    }),
    actions: {
        async fetchCategories() {
            this.loading = true;
            try {
                const { $db } = useNuxtApp();
                const querySnapshot = await getDocs(collection($db, 'categories'));
                this.categories = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                } as Category));
            } catch (err) {
                console.error(err);
                // Fallback
                if (this.categories.length === 0) {
                    this.categories = [
                        { id: '1', name: 'Mobilya', image: '' },
                        { id: '2', name: 'Aydınlatma', image: '' }
                    ]
                }
            } finally {
                this.loading = false;
            }
        }
    }
});
