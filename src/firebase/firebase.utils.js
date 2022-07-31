import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const config = {
   apiKey: "AIzaSyC-9YTEOdbO8NUw79U5sqMp20vJh8nuta0",
   authDomain: "crwn-db-f0d78.firebaseapp.com",
   projectId: "crwn-db-f0d78",
   storageBucket: "crwn-db-f0d78.appspot.com",
   messagingSenderId: "322480765672",
   appId: "1:322480765672:web:749ef7daa5eb65072e275d",
   measurementId: "G-J6JLLJZ7XE"
 };

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = getAuth();

// const provider = new firebase.auth.GoogleAuthProvider();
export const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = ()=> signInWithPopup(auth, provider)

export default firebase;