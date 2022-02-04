// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import 'firebase/compat/firestore' // la base de datos practicamente
import "firebase/compat/auth" // carpeta de auntenticasion


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdmJPJ-RLxQ9pI8t5W7oxk8GZvIMPykkY",
  authDomain: "pruebatecnicaco.firebaseapp.com",
  projectId: "pruebatecnicaco",
  storageBucket: "pruebatecnicaco.appspot.com",
  messagingSenderId: "551108429061",
  appId: "1:551108429061:web:3a2daa305b5e3c3bc1e36c",
  measurementId: "G-69C1B4XFJH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {firebase , db , googleAuthProvider}