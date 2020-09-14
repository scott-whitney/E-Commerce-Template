import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  
    apiKey: "AIzaSyDKLdQkfPRRIV7CTdWbExz3sjDG5k-D_0Y",
    authDomain: "crwn-db-88e5f.firebaseapp.com",
    databaseURL: "https://crwn-db-88e5f.firebaseio.com",
    projectId: "crwn-db-88e5f",
    storageBucket: "crwn-db-88e5f.appspot.com",
    messagingSenderId: "1038887644245",
    appId: "1:1038887644245:web:5ad0e5b4beae2db1a338dc",
    measurementId: "G-FN992ZQ781"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;