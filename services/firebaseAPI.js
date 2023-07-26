// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrz19sh7Arn7mrvb4nJs14TaAYFxo8ifI",
  authDomain: "mads-4014-project.firebaseapp.com",
  projectId: "mads-4014-project",
  storageBucket: "mads-4014-project.appspot.com",
  messagingSenderId: "525701880377",
  appId: "1:525701880377:web:201fd040ae2a6eda9f4be8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
export { db };