import firebase from "firebase/app"

import "firebase/firestore"
import "firebase/auth"
import "firebase/functions"

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAnjIXELUZTJLuLyP7eafN4kAeu8f6AS5w",
    authDomain: "flash-chat-ios13-da910.firebaseapp.com",
    databaseURL: "https://flash-chat-ios13-da910-default-rtdb.firebaseio.com",
    projectId: "flash-chat-ios13-da910",
    storageBucket: "flash-chat-ios13-da910.appspot.com",
    messagingSenderId: "809958480290",
    appId: "1:809958480290:web:4dac3f1f41cbcefad73afb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore()
// export const functions = firebase.functions()

export default firebaseConfig