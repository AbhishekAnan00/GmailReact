import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {GoogleAuthProvider, getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "clone-9d15a.firebaseapp.com",
  projectId: "clone-9d15a",
  storageBucket: "clone-9d15a.appspot.com",
  messagingSenderId: "391588657559",
  appId: import.meta.env.VITE_DATABASE_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app)
//authentication
const auth = getAuth(app)
const googleAuthProvider = new GoogleAuthProvider()
export {fireDB , auth , googleAuthProvider}