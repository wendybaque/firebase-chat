// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWTF4fijPs483VQNoZRJwUkE48tX8DXeQ",
  authDomain: "fir-chat-e27fb.firebaseapp.com",
  projectId: "fir-chat-e27fb",
  storageBucket: "fir-chat-e27fb.appspot.com",
  messagingSenderId: "825185251896",
  appId: "1:825185251896:web:109692644e97cc351daccd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
