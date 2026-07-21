// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHfELxQeHStcvtEIxw3_aJVYUwvPQ947Q",
  authDomain: "auth-assignment-aa67a.firebaseapp.com",
  projectId: "auth-assignment-aa67a",
  storageBucket: "auth-assignment-aa67a.firebasestorage.app",
  messagingSenderId: "537802755148",
  appId: "1:537802755148:web:f024828405903e925c78e9",
  measurementId: "G-C0CE7W1XLK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
