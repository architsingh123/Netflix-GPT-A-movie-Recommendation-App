// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8ABrrUxQS2L0mMc2AcLfb1TmJOa5sKL8",
  authDomain: "netflixgpt-577b0.firebaseapp.com",
  projectId: "netflixgpt-577b0",
  storageBucket: "netflixgpt-577b0.appspot.com",
  messagingSenderId: "412017041856",
  appId: "1:412017041856:web:88206738cb1749fb262825",
  measurementId: "G-DYWCJGGVHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();