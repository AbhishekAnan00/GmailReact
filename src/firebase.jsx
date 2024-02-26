import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {GoogleAuthProvider, getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAFBFo_U2cX6UCWGCWbK-USq3jR7oSk71g",
  authDomain: "clone-9d15a.firebaseapp.com",
  projectId: "clone-9d15a",
  storageBucket: "clone-9d15a.appspot.com",
  messagingSenderId: "391588657559",
  appId: "1:391588657559:web:6b83f405b73f16240c6cd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app)
//authentication
const auth = getAuth(app)
const googleAuthProvider = new GoogleAuthProvider()
export {fireDB , auth , googleAuthProvider}