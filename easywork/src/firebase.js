// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCknLcH0k9W9pGxD6iajiPvrwv6Jx5l8yQ",
  authDomain: "easywork-web-352bb.firebaseapp.com",
  projectId: "easywork-web-352bb",
  storageBucket: "easywork-web-352bb.appspot.com",
  messagingSenderId: "483282489845",
  appId: "1:483282489845:web:97631a707b347b133090bc",
  databaseURL:"https://easywork-web-352bb-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

export const app=initializeApp(firebaseConfig)