// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEZjZERAE1RxDdIraZ-Ok5MulDMRNAVS8",
  authDomain: "react-coder-d5588.firebaseapp.com",
  projectId: "react-coder-d5588",
  storageBucket: "react-coder-d5588.appspot.com",
  messagingSenderId: "320172733998",
  appId: "1:320172733998:web:e31c6a2d8b96183b2111bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;