import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7Cv_IhpmhtMdz0wkVO-lX9hhAhFHbpYs",
  authDomain: "facebook-messenger-clone-3ab5f.firebaseapp.com",
  projectId: "facebook-messenger-clone-3ab5f",
  storageBucket: "facebook-messenger-clone-3ab5f.appspot.com",
  messagingSenderId: "551092235487",
  appId: "1:551092235487:web:a2be3c28c94c624f498d6a",
  measurementId: "G-9XL9BKF1RB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
