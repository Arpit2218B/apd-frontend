import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAi6-rDTMQKM2CyjVPWxKQQGaXkRyJ8ZIE",
    authDomain: "auth-development-18ada.firebaseapp.com",
    databaseURL: "https://auth-development-18ada.firebaseio.com",
    projectId: "auth-development-18ada",
    storageBucket: "auth-development-18ada.appspot.com",
    messagingSenderId: "284823492438",
    appId: "1:284823492438:web:a11dba03125527c47368f7"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();