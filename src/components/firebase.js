// import { initializeApp } from 'firebase/app';
// import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

// const firebaseConfig = {
//     apiKey: "AIzaSyBPkRx_Gjb_ziXOeqiNtxLyGEtNj-LW-Ew",
//     authDomain: "phone-auth-318de.firebaseapp.com",
//     projectId: "phone-auth-318de",
//     storageBucket: "phone-auth-318de.firebasestorage.app",
//     messagingSenderId: "501262593454",
//     appId: "1:501262593454:web:8b17dc73a727622818ac3f",
//     measurementId: "G-83NGE3FFBF"
//   };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export {auth}


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv192gkJmKfAqlUlm12qpVvuKNNUKGBes",
  authDomain: "phonenumberauth-f080a.firebaseapp.com",
  projectId: "phonenumberauth-f080a",
  storageBucket: "phonenumberauth-f080a.firebasestorage.app",
  messagingSenderId: "314080400282",
  appId: "1:314080400282:web:341a9814a8a2b0f2566023",
  measurementId: "G-YL0FCC2970"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}


/**
 * 
 */
