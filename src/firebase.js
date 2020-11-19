import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDjnonyzyFBdpUlAEMbG7dHYuJ3FLtId2w",
  authDomain: "twouitter-clone.firebaseapp.com",
  databaseURL: "https://twouitter-clone.firebaseio.com",
  projectId: "twouitter-clone",
  storageBucket: "twouitter-clone.appspot.com",
  messagingSenderId: "504977410386",
  appId: "1:504977410386:web:01bdd32645ebad3aea128b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;