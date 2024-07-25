import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCag2P6bGQvSyNV2oQuZenws_fmcscu2TA",
  authDomain: "clgshit.firebaseapp.com",
  projectId: "clgshit",
  storageBucket: "clgshit.appspot.com",
  messagingSenderId: "779367187121",
  appId: "1:779367187121:web:643b6ffb04972a066b9890"
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
