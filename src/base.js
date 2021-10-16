import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';




const app = firebase.initializeApp({
	 apiKey: "AIzaSyA2iBHpgV1VqULMnfhif40p6Mb8C8NzfGg",
  authDomain: "nft-gram.firebaseapp.com",
  projectId: "nft-gram",
  storageBucket: "nft-gram.appspot.com",
  messagingSenderId: "550326662797",
  appId: "1:550326662797:web:f0f2a9591631ee5553d4c4",
  measurementId: "G-6T0L8P1LZM"
});



export default app;


