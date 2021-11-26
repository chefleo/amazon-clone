import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCDKh_IGTtoZQ_lsUao7hMiltxaa4Y93LA',
  authDomain: 'clone-dfcf8.firebaseapp.com',
  projectId: 'clone-dfcf8',
  storageBucket: 'clone-dfcf8.appspot.com',
  messagingSenderId: '201806684888',
  appId: '1:201806684888:web:4ed6e41dd4f8dcb19e6dad',
  measurementId: 'G-NRD8M2BBEL',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
