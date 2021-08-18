import firebase from "firebase";

const firebaseConfig = {
    <enter your firebase config>
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
