// src/config/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBLeBmdJ85IhfeJ7sGBHOlSjUmYJ6V_YIY",
  authDomain: "thpt-chi-linh.firebaseapp.com",
  projectId: "thpt-chi-linh",
  storageBucket: "thpt-chi-linh.firebasestorage.app",
  messagingSenderId: "59436766218",
  appId: "1:59436766218:web:8621e33cc12f6129e6fbf3",
  measurementId: "G-442TZLSK9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
