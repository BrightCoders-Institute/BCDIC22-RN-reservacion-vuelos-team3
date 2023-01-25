import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCzoDAWeGcGTnyUTobBXhvZNhMlSrNXrRU",
  authDomain: "flights-team-3-df47b.firebaseapp.com",
  databaseURL:"https://flights-team-3-df47b-default-rtdb.firebaseio.com/",
  projectId: "flights-team-3-df47b",
  storageBucket: "flights-team-3-df47b.appspot.com",
  messagingSenderId: "8699604787",
  appId: "1:8699604787:web:2cb9a2ba0fc836ea805846",
  measurementId: "G-Y711WVZ14X"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

