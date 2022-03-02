// import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { getModularInstance } from "@firebase/util";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import App from '../App';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtomwAwUjvHjIxBOi6NWWlmliHKuqdTgg",
  authDomain: "resume-builder-dfce6.firebaseapp.com",
  projectId: "resume-builder-dfce6",
  storageBucket: "resume-builder-dfce6.appspot.com",
  messagingSenderId: "61831400983",
  appId: "1:61831400983:web:80bc15482ba56204b09652",
  measurementId: "G-W81SFK8Y7C"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
// let db = getFirestore()

// module.exports.db

export default firebaseConfig;