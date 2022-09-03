// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD6tq_zrQ1vlyBwmh8IxcWSq3Bs6PpYAEU',
  authDomain: 'cardtonic-dashboard.firebaseapp.com',
  projectId: 'cardtonic-dashboard',
  storageBucket: 'cardtonic-dashboard.appspot.com',
  messagingSenderId: '1000145158362',
  appId: '1:1000145158362:web:fa1437eec97c64458da5e3',
  measurementId: 'G-77YWTBL22E',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
