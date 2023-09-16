// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
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
  appId: "1:731435329301:web:bb63603d5070f4b563eb1c",
  measurementId: "G-MVXKZB2QT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth, db,
};
