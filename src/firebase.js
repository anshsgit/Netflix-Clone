// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { toast } from 'react-toastify';
  
const firebaseConfig = {
  apiKey: "AIzaSyBxRoZGGrumdJwENo3Xk36E1GqFLh3pkEs",
  authDomain: "netflix-clone-fbd77.firebaseapp.com",
  projectId: "netflix-clone-fbd77",
  storageBucket: "netflix-clone-fbd77.firebasestorage.app",
  messagingSenderId: "883031378507",
  appId: "1:883031378507:web:8cb76ab22713913123dbce",
  measurementId: "G-88TRLW5YXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email
    });
    navigate("/");

  } catch(error) {
      console.error(error);
      toast.error(error.code);
  }
}

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
  } catch(error) {
      console.error(error);
      toast.error(error.code);
  }
}

const logout = async () => {
  signOut(auth);
}

export {auth, db, login, signup, logout};