// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0L0eYKMLad3CrT3XRosMJQKMWrDoaTMs",
  authDomain: "admindocs-3ab77.firebaseapp.com",
  projectId: "admindocs-3ab77",
  storageBucket: "admindocs-3ab77.appspot.com",
  messagingSenderId: "681055753279",
  appId: "1:681055753279:web:afb9b20e3c713bbbd0948a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)