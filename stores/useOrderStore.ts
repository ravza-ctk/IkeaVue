import { defineStore } from 'pinia';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import type { Order, CartItem } from '~/types';

export const useOrderStore = defineStore('order', {
    state: () => ({
        currentOrder: null as Order | null,
        cart: [] as CartItem[],
        loading: false
    }),
    getters: {
        cartTotal: (state) => state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },
    actions: {
        addToCart(item: CartItem) {
            const existing = this.cart.find(i => i.productId === item.productId);
            if (existing) {
                existing.quantity += item.quantity;
            } else {
                this.cart.push(item);
            }
        },
        async createOrder(userId: string, address: any) {
            this.loading = true;
            try {
                const { $db } = useNuxtApp();
                const orderData = {
                    userId,
                    items: this.cart,
                    total: this.cartTotal,
                    status: 'pending',
                    createdAt: serverTimestamp(),
                    shippingAddress: address
                };
                const docRef = await addDoc(collection($db, 'orders'), orderData);
                this.cart = []; // Clear cart
                return docRef.id;
            } catch (err) {
                console.error(err);
                throw err;
            } finally {
                this.loading = false;
            }
        }
    }
});
