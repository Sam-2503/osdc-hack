// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMAsyYoodM6xuwbRs17GqFhUwAeQx543Q",
  authDomain: "radio-ddbbd.firebaseapp.com",
  projectId: "radio-ddbbd",
  storageBucket: "radio-ddbbd.appspot.com",
  messagingSenderId: "387003813903",
  appId: "1:387003813903:web:b1ca18677661ab1513537a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
