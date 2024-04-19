import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiaC_SetHM8xnXb3XXDVRj46PGzNy7z2M",
  authDomain: "newresumeproject-c64f3.firebaseapp.com",
  projectId: "newresumeproject-c64f3",
  storageBucket: "newresumeproject-c64f3.appspot.com",
  messagingSenderId: "940025030898",
  appId: "1:940025030898:web:adcc596105de0ead7c086b",
  measurementId: "G-4YVZJ0KLV0",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const createUser = createUserWithEmailAndPassword;
const loginUser = signInWithEmailAndPassword;
const logout = signOut;

export { auth, loginUser, createUser, logout, db };
