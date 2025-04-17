// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDhX7gjAaCulHXrqnyBNg0NhnOCun-OFV8",
  authDomain: "estanco-juanos-c8e1c.firebaseapp.com",
  projectId: "estanco-juanos-c8e1c",
  storageBucket: "estanco-juanos-c8e1c.firebasestorage.app",
  messagingSenderId: "863161993915",
  appId: "1:863161993915:web:3fa63545393f20f79eb79e",
  measurementId: "G-L9J8SSRVCX"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar los servicios que usas
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
