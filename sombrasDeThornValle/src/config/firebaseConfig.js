// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA54V2r5ltKe11tYDM4Jqrcxqec0heejjg",
  authDomain: "sombradethornvalle.firebaseapp.com",
  databaseURL: "https://sombradethornvalle-default-rtdb.firebaseio.com",
  projectId: "sombradethornvalle",
  storageBucket: "sombradethornvalle.appspot.com",
  messagingSenderId: "229673995721",
  appId: "1:229673995721:web:205b5bb4d4c429298fec18",
  measurementId: "G-1GFDYRDYZ6"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Exporta o database
const db = getDatabase(app);
export { db };
