import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC4Btsd_GLVS0e_8bnZPHMDiGbQuS5OeV0",
    authDomain: "teased-brand.firebaseapp.com",
    projectId: "teased-brand",
    storageBucket: "teased-brand.appspot.com",
    messagingSenderId: "28504084002",
    appId: "1:28504084002:web:00597c8a3287e1752c447b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export { db };