// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId:process.env.REACT_APP_projectId,
//   storageBucket:process.env.REACT_APP_storageBucket,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId,
//   appId:process.env.REACT_APP_appId
apiKey: "AIzaSyBKd0zBG75G-sKaEVLXt_8BaAY6gcGG0kE",
authDomain: "car-doctor-8f527.firebaseapp.com",
projectId: "car-doctor-8f527",
storageBucket: "car-doctor-8f527.appspot.com",
messagingSenderId: "1039116954669",
appId: "1:1039116954669:web:dfc7fd901a8934b8b21ca4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;