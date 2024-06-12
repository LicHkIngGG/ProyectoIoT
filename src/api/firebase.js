import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAWKMkyKm-h1OI7Exu2KXU9L8l1eyVn144",
    authDomain: "proy-iot-810ef.firebaseapp.com",
    projectId: "proy-iot-810ef",
    storageBucket: "proy-iot-810ef.appspot.com",
    messagingSenderId: "569840239543",
    appId: "1:569840239543:web:0eab3f7cf16fbd9d341e32"
  };
  
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const firestore = firebase.firestore();

export { firebase, auth, firestore, db };
