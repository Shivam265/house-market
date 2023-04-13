// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVe9ssyWlGLVpZfuKVnt-SD5o6tX_YnPI",
  authDomain: "house-market-bb077.firebaseapp.com",
  projectId: "house-market-bb077",
  storageBucket: "house-market-bb077.appspot.com",
  messagingSenderId: "686328633316",
  appId: "1:686328633316:web:5912a978c9ef4bc984d9f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();