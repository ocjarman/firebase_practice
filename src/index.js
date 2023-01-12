import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDG7SbFb_1UQVJNsQLI9nWt3zLR-nyVKdE",
  authDomain: "fir-practice-dcb29.firebaseapp.com",
  databaseURL: "https://fir-practice-dcb29-default-rtdb.firebaseio.com",
  projectId: "fir-practice-dcb29",
  storageBucket: "fir-practice-dcb29.appspot.com",
  messagingSenderId: "310725166175",
  appId: "1:310725166175:web:5472d4a3d1ae80094907ea",
  measurementId: "G-MVFBCJZB9P",
});

// Initialize Firebase
const auth = getAuth(firebaseApp);

// detect auth state
onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    console.log("logged in!");
  } else {
    console.log("no user!");
  }
});
