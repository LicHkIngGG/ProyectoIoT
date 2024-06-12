import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBFtEh-rUwg3GOHsnWkWssF0-KizRoRFys",
    authDomain: "proy-iot-f0754.firebaseapp.com",
    projectId: "proy-iot-f0754",
    storageBucket: "proy-iot-f0754.appspot.com",
    messagingSenderId: "402468369008",
    appId: "1:402468369008:web:1874e314b7b0dfe21cfab5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

export { firebase, auth, firestore };
