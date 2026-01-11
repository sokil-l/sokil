import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCOVszL-lrgbqR8qQFTwYL6lTRH2RcDO4Y",
  authDomain: "zabudova-sokil.firebaseapp.com",
  projectId: "zabudova-sokil",
  storageBucket: "zabudova-sokil.firebasestorage.app",
  messagingSenderId: "938144772496",
  appId: "1:938144772496:web:70acbbf28ccdf779708315",
  measurementId: "G-TGZTM8K6SZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);