import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getDatabase,set,ref as dbRef ,child, get,onChildChanged,onValue} from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyB74ugz4FHNNIn3FHdjnsojEIAQ2i2i5xI",
  authDomain: "final-hackathon-7a374.firebaseapp.com",
  databaseURL: "https://final-hackathon-7a374-default-rtdb.firebaseio.com",
  projectId: "final-hackathon-7a374",
  storageBucket: "final-hackathon-7a374.appspot.com",
  messagingSenderId: "465159324933",
  appId: "1:465159324933:web:5aba749738eb2c3dee236c"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const database = getDatabase(app);

export { auth,onValue, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut,database,set,dbRef,child, get,onChildChanged};
