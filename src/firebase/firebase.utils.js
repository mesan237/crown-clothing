import firebase from 'firebase/compat/app';
import {doc, getDoc, getFirestore, setDoc} from 'firebase/firestore';
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = doc(firestore,'Users', `${userAuth.uid}`); 

  const snapshot = await getDoc(userRef)

  if(!snapshot.exists()){
    const {displayName, email} = userAuth;
    const createAt = new Date();

    try{
      await setDoc(userRef,{displayName, email, createAt, ...additionalData})
    }catch(error){
      console.log("error creating user", error.message);
    }
  }
  //console.log();

  return userRef;
}

const app = firebase.initializeApp(config);


export const firestore = getFirestore(app);
export const auth = getAuth();

// const provider = new firebase.auth.GoogleAuthProvider();
export const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = ()=> signInWithPopup(auth, provider)

export default firebase;