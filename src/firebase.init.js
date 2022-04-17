// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJEjDBC18_Z3ulD6HLn2V1ORkNAxPqt2U",
    authDomain: "rs-dental.firebaseapp.com",
    projectId: "rs-dental",
    storageBucket: "rs-dental.appspot.com",
    messagingSenderId: "1078816523732",
    appId: "1:1078816523732:web:f8141ae8c1debb06b88241"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;