// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-deb5e.firebaseapp.com",
  projectId: "blog-deb5e",
  storageBucket: "blog-deb5e.appspot.com",
  messagingSenderId: "542846678253",
  appId: "1:542846678253:web:0a8ed4962a02013e89c8e4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);