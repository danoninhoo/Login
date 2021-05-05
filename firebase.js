import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD8JAsVVAuXGGA3CAkgEFY7BnggYsqjMBg",
    authDomain: "mealfind-testdb.firebaseapp.com",
    projectId: "mealfind-testdb",
    storageBucket: "mealfind-testdb.appspot.com",
    messagingSenderId: "710487185799",
    appId: "1:710487185799:web:32942a1e9435370be31b22"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =firebase.auth();

  export {
        auth
    

  }