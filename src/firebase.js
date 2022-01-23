import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC5Jvy3kCHqfKl26fdjRZlnTU9CzVES63M",
    authDomain: "linkedin-clone-70d55.firebaseapp.com",
    projectId: "linkedin-clone-70d55",
    storageBucket: "linkedin-clone-70d55.appspot.com",
    messagingSenderId: "49552977936",
    appId: "1:49552977936:web:ef5d5745cacf54f8db9a95"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

