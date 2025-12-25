import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

export default defineNuxtPlugin(async (nuxtApp) => {
    const config = useRuntimeConfig();

    // REPLACE THESE WITH YOUR REACTUAL FIREBASE CONFIG
    const firebaseConfig = {
        apiKey: "AIzaSyAHlemwl7_FX1hBKlOCZ5YK2haE5QinbG4",
        authDomain: "vue-ikea-ee0e6.firebaseapp.com",
        projectId: "vue-ikea-ee0e6",
        storageBucket: "vue-ikea-ee0e6.firebasestorage.app",
        messagingSenderId: "835096432932",
        appId: "1:835096432932:web:fd34d41e46a661d1ea63b1",
        measurementId: "G-GJ8DPNWVYJ"
    };

    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);
    const auth = getAuth(app);
    const analytics = getAnalytics(app);

    // Sign in anonymously to allow database access if rules require auth
    import('firebase/auth').then(({ signInAnonymously }) => {
        signInAnonymously(auth).catch((error) => {
            console.error("Anonymous auth failed", error);
        });
    });

    return {
        provide: {
            db: firestore,
            auth: auth,
            analytics: analytics
        }
    };
});
