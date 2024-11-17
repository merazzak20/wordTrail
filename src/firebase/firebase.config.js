// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvAGhOVYi04EDudr29TZ2VpI3qnu5U8Ek",
  authDomain: "b10-a9-db4e4.firebaseapp.com",
  projectId: "b10-a9-db4e4",
  storageBucket: "b10-a9-db4e4.firebasestorage.app",
  messagingSenderId: "604424526751",
  appId: "1:604424526751:web:5799df6595f93290cbbbaa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
