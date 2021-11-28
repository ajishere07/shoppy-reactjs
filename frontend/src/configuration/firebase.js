import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKgvZlfnc9hiRQJPpa-LMy66zkXz_U9X8",
  authDomain: "shoppy-ecommerce.firebaseapp.com",
  projectId: "shoppy-ecommerce",
  storageBucket: "shoppy-ecommerce.appspot.com",
  messagingSenderId: "701284166219",
  appId: "1:701284166219:web:d65d8364e2f3e8811bbbce",
  measurementId: "G-VFG03LTNH3",
};

const firebaseApp = initializeApp(firebaseConfig);

export const authe = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();
export const githubAuthProvider = new GithubAuthProvider();

export const db = getFirestore(firebaseApp);
