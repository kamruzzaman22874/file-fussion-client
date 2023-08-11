// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw-X6RmZMmxFit2UW0luJWnHVz55t6WKM",
  authDomain: "file-fusion-web-application.firebaseapp.com",
  projectId: "file-fusion-web-application",
  storageBucket: "file-fusion-web-application.appspot.com",
  messagingSenderId: "310123033370",
  appId: "1:310123033370:web:921afe0d06a4dff3f1f2a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;