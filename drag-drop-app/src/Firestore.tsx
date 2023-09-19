// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdMSAh8GCpCWH-MUML9MruEwTs8Mfwdoo",
  authDomain: "dnd-app-8ba3c.firebaseapp.com",
  projectId: "dnd-app-8ba3c",
  storageBucket: "dnd-app-8ba3c.appspot.com",
  messagingSenderId: "970772322803",
  appId: "1:970772322803:web:b49542460533b2f8f59a86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);