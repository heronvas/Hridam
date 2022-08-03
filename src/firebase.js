// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


const firebaseConfig = {
  apiKey: "AIzaSyC54onkCMMjSZtVbbMoO-X7GZsAd6W_i3Y",
  authDomain: "hridam-db4db.firebaseapp.com",
  projectId: "hridam-db4db",
  storageBucket: "hridam-db4db.appspot.com",
  messagingSenderId: "637914924795",
  appId: "1:637914924795:web:17d498406661594557925e",
  measurementId: "G-2R2R9HJ9T2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();




export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  
  export function signin(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  
  export function logout() {
    return signOut(auth);
  }
  
  // Custom Hook
  export function useAuth() {
    const [ currentUser, setCurrentUser ] = useState();
  
    useEffect(() => {
      const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
      return unsub;
    }, [])
  
    return currentUser;
  }