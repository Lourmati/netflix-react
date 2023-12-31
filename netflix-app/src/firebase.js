import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

// Initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
