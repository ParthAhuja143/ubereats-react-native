import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA4mPvHEQeICCFbl0k7zGKyid5Wx7Np2h4",
    authDomain: "ubereats-clone-faaed.firebaseapp.com",
    projectId: "ubereats-clone-faaed",
    storageBucket: "ubereats-clone-faaed.appspot.com",
    messagingSenderId: "1072942558664",
    appId: "1:1072942558664:web:d2c0e34c1ee9661019a4fd"
  }; 

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;