import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCZXtEGBftLgFfm9mmUjkCs-M6q_eRnbNI",
  authDomain: "clone-431ae.firebaseapp.com",
  projectId: "clone-431ae",
  storageBucket: "clone-431ae.appspot.com",
  messagingSenderId: "538565967508",
  appId: "1:538565967508:web:45359f24bfdbfb964b3e81",
  measurementId: "G-MTT8CG6RXN"
});

const auth = firebase.auth();

export { auth};