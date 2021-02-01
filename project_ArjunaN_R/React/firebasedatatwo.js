import  firebase from 'firebase';
var firebaseConfigone = {
    apiKey: "AIzaSyBWAhlpOLcE9kbukDSjkjvlFgPK9qvp4Us",
    authDomain: "storemanagement-b49de.firebaseapp.com",
    databaseURL: "https://storemanagement-b49de.firebaseio.com",
    projectId: "storemanagement-b49de",
    storageBucket: "storemanagement-b49de.appspot.com",
    messagingSenderId: "877955334560",
    appId: "1:877955334560:web:d62ab7bb9e07d3a0c6a4c5",
    measurementId: "G-9XN6VWP16S"
  };
  // Initialize Firebase
  var firebaseDb= firebase.initializeApp(firebaseConfigone);
 export const db=firebase.auth();
 export const dbf=firebase.firestore();



  

