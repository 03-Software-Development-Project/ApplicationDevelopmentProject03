import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA_2yzshz3tYjoF5su2wzq0xWYIHgCgGoc',
  authDomain: 'registertest-18acc.firebaseapp.com',
  projectId: 'registertest-18acc',
  storageBucket: 'registertest-18acc.appspot.com',
  messagingSenderId: '287256895055',
  appId: '1:287256895055:web:0ad772f772c94bf4ded43a',
};

// const firebaseConfig = {
//   apiKey: 'AIzaSyC9dL4Xh_lLkK0P9Ofw4x7BNjKbUcUi5TY',
//   authDomain: 'testtt-e43f7.firebaseapp.com',
//   projectId: 'testtt-e43f7',
//   storageBucket: 'testtt-e43f7.appspot.com',
//   messagingSenderId: '74804404482',
//   appId: '1:74804404482:web:f777e781b3b51f5c84a21b',
// };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
