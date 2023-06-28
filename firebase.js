import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF64V3lXWQexuPGz1gziEC1mdaA_8xyw4",
  authDomain: "appdevelopmentproject03.firebaseapp.com",
  projectId: "appdevelopmentproject03",
  storageBucket: "appdevelopmentproject03.appspot.com",
  messagingSenderId: "21352069935",
  appId: "1:21352069935:web:f09de5e89a9d88a290bfda",
  measurementId: "G-CC8HV9N61X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
