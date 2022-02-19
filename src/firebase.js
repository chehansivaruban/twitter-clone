import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHJqPgx_kSSsQzXgISPL4TrJpn-IeS2SM",
  authDomain: "twitter-clone-261b2.firebaseapp.com",
  projectId: "twitter-clone-261b2",
  storageBucket: "twitter-clone-261b2.appspot.com",
  messagingSenderId: "1089786666770",
  appId: "1:1089786666770:web:c394661922fedb19ff9dcb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
