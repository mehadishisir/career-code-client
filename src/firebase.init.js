// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVKcMsuDn2LhsrlnAiNxfCbIVvCvje8Qw",
  authDomain: "career-code-d6e82.firebaseapp.com",
  projectId: "career-code-d6e82",
  storageBucket: "career-code-d6e82.firebasestorage.app",
  messagingSenderId: "236984719403",
  appId: "1:236984719403:web:7eee1059c7af1c85a3326e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
