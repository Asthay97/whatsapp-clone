import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDz0xag-jN9pDJJYdAVunKYk3hhS0uamA4",
    authDomain: "whatsapp-clone-fff24.firebaseapp.com",
    projectId: "whatsapp-clone-fff24",
    storageBucket: "whatsapp-clone-fff24.appspot.com",
    messagingSenderId: "1085486644740",
    appId: "1:1085486644740:web:f5d0e1e259b9240944ff51",
    measurementId: "G-M6P10KCJY7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};