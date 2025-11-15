// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4mp5_uB9lHURkZM3coAQKeevN4ktEv9I",
  authDomain: "whatsapp-clone-ba674.firebaseapp.com",
  projectId: "whatsapp-clone-ba674",
  storageBucket: "whatsapp-clone-ba674.firebasestorage.app",
  messagingSenderId: "981617556772",
  appId: "1:981617556772:web:7753df02540571a90947b1",
  measurementId: "G-N10FDYNXRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  export { db }