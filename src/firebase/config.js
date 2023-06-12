import firebase from "firebase";
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDCFPZUCLUFpik0hCK_LRzUdhek5rv8cO4",
    authDomain: "olx-clone-1ce1e.firebaseapp.com",
    projectId: "olx-clone-1ce1e",
    storageBucket: "olx-clone-1ce1e.appspot.com",
    messagingSenderId: "155565432073",
    appId: "1:155565432073:web:db0380cf36ec58eb3747d8",
    measurementId: "G-GSS8EJ63GG"
  };

export default firebase.initializeApp(firebaseConfig)