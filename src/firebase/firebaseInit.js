import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2g182jUNnrfA9DVaNT2j8K2m3Cs5Xj-U",
  authDomain: "kosovo-travel-blog.firebaseapp.com",
  projectId: "kosovo-travel-blog",
  storageBucket: "kosovo-travel-blog.appspot.com",
  messagingSenderId: "90966568008",
  appId: "1:90966568008:web:2a83fd76d51600cbb57c7d"
};

const firebaseApp= firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FielValue.serverTimestamp;

const getAuth = firebase.auth();

export {timestamp,getAuth};
export default firebaseApp.firestore();