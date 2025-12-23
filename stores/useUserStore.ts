import { defineStore } from 'pinia';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from 'firebase/auth';
import type { User } from '~/types';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null as User | null,
        loading: false,
        error: null as string | null
    }),
    actions: {
        async register(email: string, pass: string, name: string) {
            this.loading = true;
            try {
                const { $auth } = useNuxtApp();
                const userCredential = await createUserWithEmailAndPassword($auth, email, pass);
                if (userCredential.user) {
                    await updateProfile(userCredential.user, { displayName: name });
                    this.user = {
                        id: userCredential.user.uid,
                        email: userCredential.user.email!,
                        displayName: name,
                        addresses: [],
                        role: 'user'
                    };
                }
            } catch (err: any) {
                this.error = err.message;
            } finally {
                this.loading = false;
            }
        },
        async login(email: string, pass: string) {
            this.loading = true;
            try {
                const { $auth } = useNuxtApp();
                const userCredential = await signInWithEmailAndPassword($auth, email, pass);
                if (userCredential.user) {
                    this.user = {
                        id: userCredential.user.uid,
                        email: userCredential.user.email!,
                        displayName: userCredential.user.displayName || 'User',
                        addresses: [],
                        role: 'user'
                    };
                }
            } catch (err: any) {
                this.error = err.message;
            } finally {
                this.loading = false;
            }
        }
    }
});
