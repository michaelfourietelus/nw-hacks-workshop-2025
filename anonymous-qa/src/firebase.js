// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnEzsTHHF3Qg0fLvPxgzChqUsGeiGtV48",
  authDomain: "anonymous-qa.firebaseapp.com",
  projectId: "anonymous-qa",
  storageBucket: "anonymous-qa.firebasestorage.app",
  messagingSenderId: "849688107498",
  appId: "1:849688107498:web:0f72a1a3c391b5dfcc3a93",
  measurementId: "G-3G95WYCFPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);