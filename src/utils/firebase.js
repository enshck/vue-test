import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAonGOKxQpbeGXRLiPnoLMxRs5NoVNiTbk",
  authDomain: "vue-test-ddc9f.firebaseapp.com",
  databaseURL: "https://vue-test-ddc9f.firebaseio.com",
  projectId: "vue-test-ddc9f",
  storageBucket: "vue-test-ddc9f.appspot.com",
  messagingSenderId: "582390767098",
  appId: "1:582390767098:web:d3f4e57f32bc02578bd843",
  measurementId: "G-FD69W0K1CB",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const authGoogleProvider = new firebase.auth.GoogleAuthProvider();

export default firebase;
