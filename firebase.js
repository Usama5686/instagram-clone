import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  // apiKey: process.env.apiKey,
  // authDomain: process.env.authDomain,
  // projectId: "instagram-clone-68b89",
  // storageBucket: process.env.storageBucket,
  // messagingSenderId: process.env.messagingSenderId,
  // appId: process.env.appId,
  // measurementId: process.env.measurementId,

  apiKey: "AIzaSyBbSZeixpT7g5-r5o1OfpMU_Rp-Y7iEMVw",
  authDomain: "instagram-clone-68b89.firebaseapp.com",
  projectId: "instagram-clone-68b89",
  storageBucket: "instagram-clone-68b89.appspot.com",
  messagingSenderId: "165310294202",
  appId: "1:165310294202:web:32304a9f675533505b3a83",
  measurementId: "G-6L4HFNNG11",
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
