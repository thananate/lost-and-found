import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDzGzCrHOljdfUSpLlUaE78MgQLHOTbYwE",
  authDomain: "ips-lost-found-v2.firebaseapp.com",
  projectId: "ips-lost-found-v2",
  storageBucket: "ips-lost-found-v2.firebasestorage.app",
  messagingSenderId: "788946186880",
  appId: "1:788946186880:web:da576007136f2d6ff9ec65"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
