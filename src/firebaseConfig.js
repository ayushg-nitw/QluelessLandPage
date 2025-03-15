import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// Your Firebase Config (Replace with actual credentials)
const firebaseConfig = {
  apiKey: "AIzaSyDQk-2gsL2fcs7QCwnPSb5pnv1ggxm_cdY",
  authDomain: "qlueless-49f62.firebaseapp.com",
  projectId: "qlueless-49f62",
  storageBucket: "qlueless-49f62.firebasestorage.app",
  messagingSenderId: "830990994352",
  appId: "1:830990994352:web:c30c01c24273ee6aaf2475",
  measurementId: "G-HB0RVKF5SL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, signInWithPopup, db, doc, setDoc, getDoc };
