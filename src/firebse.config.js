import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCUy8kmqjJyibdeF7n9MLAGe269P1zIEBU",
    authDomain: "e-com-9b5d2.firebaseapp.com",
    projectId: "e-com-9b5d2",
    storageBucket: "e-com-9b5d2.appspot.com",
    messagingSenderId: "601819329448",
    appId: "1:601819329448:web:c0602fc39f00cd64d9639d"
  };

const app = initializeApp(firebaseConfig); 
export const authentication=getAuth(app)