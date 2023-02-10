import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt2VUPSt00pjguGMFAXETsDL4Nn8GH56Q",
  authDomain: "chatgpt-messenger-9dd9c.firebaseapp.com",
  projectId: "chatgpt-messenger-9dd9c",
  storageBucket: "chatgpt-messenger-9dd9c.appspot.com",
  messagingSenderId: "203463421410",
  appId: "1:203463421410:web:cacaa7cfa388e5a8645dbb",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
