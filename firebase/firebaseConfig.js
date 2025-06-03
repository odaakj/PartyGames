// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

isSupported().then((yes) => {
  if (yes) {
    getAnalytics(app);
  }
});

// Use persistent auth for React Native
// export const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage),
// });
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore(app);