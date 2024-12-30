// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYIxcD5cw-1bGX8R63_DxWivIU_EKzXI8",
  authDomain: "partygames-efced.firebaseapp.com",
  projectId: "partygames-efced",
  storageBucket: "partygames-efced.firebasestorage.app",
  messagingSenderId: "738986458272",
  appId: "1:738986458272:web:ec0843c75815af9c1eddc5",
  measurementId: "G-81Y53ERLX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase services you might use
export const auth = getAuth(app);
export const db = getFirestore(app);