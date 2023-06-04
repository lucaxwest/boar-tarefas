import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBDP8AFpePsQSuIn_Aj2koaxdOi6elJdJQ",
  authDomain: "todolist-95092.firebaseapp.com",
  projectId: "todolist-95092",
  storageBucket: "todolist-95092.appspot.com",
  messagingSenderId: "237802109780",
  appId: "1:237802109780:web:5ffba9cbf47dc7698166c1"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export { db };