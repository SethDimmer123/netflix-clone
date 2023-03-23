// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDVk_pEkuHKC4mXBYEA9MQFpKV_HwytV_w",
    authDomain: "netflix-clone-7b1ce.firebaseapp.com",
    projectId: "netflix-clone-7b1ce",
    storageBucket: "netflix-clone-7b1ce.appspot.com",
    messagingSenderId: "948532385297",
    appId: "1:948532385297:web:285af45689d82c036943b0"
  };

// Initialize Firebase - i am checking for my app 
// if my app is not already initialized and importing some functions.
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }

//because i am using next.js i have to protect my files if the app
// is already initialized 
// I DO NOT WANT TO REINITIALIZE THE APP
// I ONLY WANT ONE INSTANCE OF MY APPLICATION 
// THAT IS WHY I ADDED LINES 22- 26


