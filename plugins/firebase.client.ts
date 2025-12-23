import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export default defineNuxtPlugin(async (nuxtApp) => {
    const config = useRuntimeConfig();

    // REPLACE THESE WITH YOUR REACTUAL FIREBASE CONFIG
    const firebaseConfig = {
        apiKey: "AIzaSy...",
        authDomain: "projectId.firebaseapp.com",
        projectId: "projectId",
        storageBucket: "projectId.appspot.com",
        messagingSenderId: "123...",
        appId: "1:..."
    };

    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);
    const auth = getAuth(app);

    // if (import.meta.dev) {
    // Connect to emulators in development
    // try {
    // const { connectFirestoreEmulator } = await import('firebase/firestore');
    // const { connectAuthEmulator } = await import('firebase/auth');
    // connectFirestoreEmulator(firestore, 'localhost', 8080);
    // connectAuthEmulator(auth, 'http://localhost:9099');
    // console.log("Connected to Firebase Emulators");
    // } catch (e) {
    // console.warn("Could not connect to emulators:", e);
    // }
    // }

    return {
        provide: {
            db: firestore,
            auth: auth
        }
    };
});
