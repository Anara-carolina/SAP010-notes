// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbijxKkaBWFMYCyArJC83fjwPRwdsU3J0",
  authDomain: "notas-54a53.firebaseapp.com",
  projectId: "notas-54a53",
  storageBucket: "notas-54a53.appspot.com",
  messagingSenderId: "731435329301",
  appId: "1:731435329301:web:d9b328774ecfeb0b63eb1c",
  measurementId: "G-Y841R0YE61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
