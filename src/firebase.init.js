// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCavRTML70zZKeJXSkh5zL1lbBueV7QH1U",
    authDomain: "warehouse-management-7d323.firebaseapp.com",
    projectId: "warehouse-management-7d323",
    storageBucket: "warehouse-management-7d323.appspot.com",
    messagingSenderId: "58861021356",
    appId: "1:58861021356:web:5a3319a2f4c27cdec51709"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;