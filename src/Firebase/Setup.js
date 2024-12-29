// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiBrrDVz6n0IS2Ohp4W0Rwph38xoDuihk",
  authDomain: "bbc-clone-2e633.firebaseapp.com",
  projectId: "bbc-clone-2e633",
  storageBucket: "bbc-clone-2e633.firebasestorage.app",
  messagingSenderId: "567372046628",
  appId: "1:567372046628:web:8206c33d366534403213b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const GoogleProvider = new GoogleAuthProvider(app);
export const database = getFirestore(app);
