import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDb9NEf6MsBVd8AlvyOQSDlubbxy533544",
  authDomain: "chat-b365d.firebaseapp.com",
  projectId: "chat-b365d",
  storageBucket: "chat-b365d.appspot.com",
  messagingSenderId: "306973882589",
  appId: "1:306973882589:web:75b7492478dd34b0860334",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
