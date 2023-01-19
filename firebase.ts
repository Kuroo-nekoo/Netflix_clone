// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCHGgPa2AkGMbdBR6kmiuW15-pxVJ5Eg2s',
  authDomain: 'netflix-clone-8cb00.firebaseapp.com',
  projectId: 'netflix-clone-8cb00',
  storageBucket: 'netflix-clone-8cb00.appspot.com',
  messagingSenderId: '901900581769',
  appId: '1:901900581769:web:44d3be60d08f50cfbb7f58',
  measurementId: 'G-70TCBXR58E',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
