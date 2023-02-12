import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

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
