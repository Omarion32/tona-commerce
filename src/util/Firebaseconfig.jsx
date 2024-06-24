


import firebase from "firebase/compat/app";
 import "firebase/compat/auth";
 import "firebase/compat/firestore";
//  import { initializeApp } from "firebase/app";
 import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAySkv2fzT52zCyFsdRehfuw9fk7jFu2M0",
  authDomain: "tona-shopping.firebaseapp.com",
  projectId: "tona-shopping",
  storageBucket: "tona-shopping.appspot.com",
  messagingSenderId: "348379161545",
  appId: "1:348379161545:web:293ce8648debe6b9a73e18",
  measurementId: "G-RW1W4BC0G6"
};

// // Initialize Firebase
 const app = firebase.initializeApp(firebaseConfig);
 export const auth =getAuth(app);
 export const db=app.firestore();
//  const firebaseAuth = firebase.auth();
//  const db = app.firestore();
// export { db, firebaseAuth };