// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuEVmC75e8jL6mRmu6rpnc8ajMjO_lSe8",
  authDomain: "command-11-project.firebaseapp.com",
  projectId: "command-11-project",
  storageBucket: "command-11-project.appspot.com",
  messagingSenderId: "594510792376",
  appId: "1:594510792376:web:26943596e3e52a7a38564d"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export {db};