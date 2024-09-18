// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyRCv65lZVFxlTnFkvGlEm1GKiWem3jog",
  authDomain: "prolance-482df.firebaseapp.com",
  projectId: "prolance-482df",
  storageBucket: "prolance-482df.appspot.com",
  messagingSenderId: "695961176689",
  appId: "1:695961176689:web:a6aed46e3916f2e8d069d0",
  measurementId: "G-WKKV1WR5MG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export  const auth = getAuth(app)