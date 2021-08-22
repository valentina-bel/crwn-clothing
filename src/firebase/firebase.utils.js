import firebase from "firebase/app";
import 'firebase/firestore';
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC4TRPScX1ClXJLUJLCLqlJKsB-C6q-AGs",
  authDomain: "crwn-db-50fdf.firebaseapp.com",
  projectId: "crwn-db-50fdf",
  storageBucket: "crwn-db-50fdf.appspot.com",
  messagingSenderId: "253892758987",
  appId: "1:253892758987:web:afb549cf7e34b6fca83a4e",
  measurementId: "G-H0W3HWQ0BZ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
