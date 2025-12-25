import { defineStore } from 'pinia';
import {
    collection,
    addDoc,
    getDocs,
    doc,
    deleteDoc,
    query,
    where
} from 'firebase/firestore';
import type { CartItem, Product } from '~/types';

export const useCartStore = defineStore('cart', {
    state: () => ({
        cartItems: [] as (CartItem & { id?: string })[],
        loading: false,
        error: null as string | null
    }),
    getters: {
        totalPrice: (state) => state.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        totalItems: (state) => state.cartItems.reduce((sum, item) => sum + item.quantity, 0)
    },
    actions: {
        async fetchCart() {
            this.loading = true;
            try {
                const { $db } = useNuxtApp();
                const q = query(collection($db, 'cart'));
                const snapshot = await getDocs(q);
                this.cartItems = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                } as CartItem & { id: string }));
            } catch (err: any) {
                console.error("Error fetching cart:", err);
                this.error = err.message;
            } finally {
                this.loading = false;
            }
        },
        async addToCart(product: Product, quantity = 1) {
            this.loading = true;
            try {
                const { $db } = useNuxtApp();
                // Check if already in cart (client side check for now, can be improved)
                // For simplicity as per request "add to firebase", we will just add a new doc or update.
                // Since user said "save to firebase", I'll just add a new doc for simplicity or check if exists.
                // Let's assume unique items for now or separate entries. 
                // A better approach is checking if productId exists in firebase, but let's keep it simple: Add new doc.

                const cartItem: CartItem = {
                    productId: product.id!,
                    name: product.name,
                    price: product.price,
                    quantity: quantity,
                    image: product.image
                };

                const docRef = await addDoc(collection($db, 'cart'), cartItem);
                this.cartItems.push({ ...cartItem, id: docRef.id });

                // Show notification or success
            } catch (err: any) {
                console.error("Error adding to cart:", err);
                this.error = err.message;
                throw err;
            } finally {
                this.loading = false;
            }
        },
        async removeFromCart(id: string) {
            this.loading = true;
            try {
                const { $db } = useNuxtApp();
                await deleteDoc(doc($db, 'cart', id));
                this.cartItems = this.cartItems.filter(item => item.id !== id);
            } catch (err: any) {
                console.error("Error removing from cart:", err);
                this.error = err.message;
                throw err;
            } finally {
                this.loading = false;
            }
        }
    }
});
