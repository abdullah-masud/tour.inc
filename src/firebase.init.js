// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBb6PCHLO4Cz_ZJyxFYwFL3pzR1pARuXOI",
    authDomain: "tour-inc.firebaseapp.com",
    projectId: "tour-inc",
    storageBucket: "tour-inc.appspot.com",
    messagingSenderId: "911235148374",
    appId: "1:911235148374:web:bf2b1d8411b4df51ca29f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;