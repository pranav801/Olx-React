import firebase from "firebase";
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC6Jw_1EoDrAY8ORbPP9w9b88ykkjWGNqU",
  authDomain: "olx-react-c0f0f.firebaseapp.com",
  projectId: "olx-react-c0f0f",
  storageBucket: "olx-react-c0f0f.appspot.com",
  messagingSenderId: "498299011582",
  appId: "1:498299011582:web:a6e1ce7af899a9cf7ac0af",
  measurementId: "G-T3F8P24ZYT"
};

export default firebase.initializeApp(firebaseConfig)