// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHRkqGw7RVsDAos_BUeBeI_BhtTg9iP9M",
    authDomain: "rs-hospital-ltd.firebaseapp.com",
    projectId: "rs-hospital-ltd",
    storageBucket: "rs-hospital-ltd.appspot.com",
    messagingSenderId: "453954357671",
    appId: "1:453954357671:web:745d691dbf9572d3fb8e82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;