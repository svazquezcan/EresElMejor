import firebase from "firebase";
import "firebase/firestore";

src="https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js"

  let firebaseConfig = {
    apiKey: "AIzaSyDSJlz2JSfdtWHpWmJRvkUle1eIJmC4Mu4",
    authDomain: "thebest-110a1.firebaseapp.com",
    databaseURL: "https://thebest-110a1.firebaseio.com",
    projectId: "thebest-110a1",
    storageBucket: "thebest-110a1.appspot.com",
    messagingSenderId: "1067959958433",
    appId: "1:1067959958433:web:8264afd2967e1c1efe29e0",
    measurementId: "G-YY4NGPS4LF"
  };
  // Initialize Firebase
  let app = firebase.initializeApp(firebaseConfig);
  export const db = app.firestore();
  
  //firebase.analytics();