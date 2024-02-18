// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm0gcTtHBgAMJTh2ni637cc3z7b-lcegw", 
  authDomain: "reactjsauth-50995.firebaseapp.com",
  projectId: "reactjsauth-50995",
  storageBucket: "reactjsauth-50995.appspot.com",
  messagingSenderId: "721074451121",
  appId: "1:721074451121:web:1945617ed6f7eb9a006890",
  databaseURL: "https://reactjsauth-50995-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//Now Firebase app is connected to the Firebase account
