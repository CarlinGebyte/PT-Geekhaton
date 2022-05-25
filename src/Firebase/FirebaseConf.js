// Import the functions you need from the SDKs you need
import { initializeApp }  from 'firebase/app'
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjDkFbOWVtbOqIxROpuThL52P3hbxtZhU",
  authDomain: "geekhaton.firebaseapp.com",
  projectId: "geekhaton",
  storageBucket: "geekhaton.appspot.com",
  messagingSenderId: "21819464858",
  appId: "1:21819464858:web:eb30e97f3ce4af0d425323",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DB = getFirestore();

export { app, DB };
