import { initializeApp } from "firebase/app";
import {
    getAuth,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAPyXjxsGe2uBmDfTe9wjqrMIroXetYq-k",
    authDomain: "native-auth-c05db.firebaseapp.com",
    projectId: "native-auth-c05db",
    storageBucket: "native-auth-c05db.appspot.com",
    messagingSenderId: "202661654270",
    appId: "1:202661654270:web:99f213da24f207f45fbfaf",
    measurementId: "G-N6MP36347D"
  };

  initializeApp(firebaseConfig);

  export const auth = getAuth();
  export const register = (email: string, password: string) => createUserWithEmailAndPassword(auth,email,password);
  export const login = (email: string, password: string) => signInWithEmailAndPassword(auth,email,password);
  export const logout = () => signOut(auth);
  export const db = getFirestore();

