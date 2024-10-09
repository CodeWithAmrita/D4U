import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyCfpVWeR7Dy55r82iRzAwFxhyKQvsZ2-Tg",
  authDomain: "d4u-app-5454d.firebaseapp.com",
  projectId: "d4u-app-5454d",
  storageBucket: "d4u-app-5454d.appspot.com",
  messagingSenderId: "1029679626922",
  appId: "1:1029679626922:web:dd38421390ec6fe5166ed3"
}; 

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();