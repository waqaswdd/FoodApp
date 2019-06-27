import * as firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDLW5xHtsri7LD9c7AJ0iOOJV0GqnvTVhk",
    authDomain: "foodapp-f0c23.firebaseapp.com",
    databaseURL: "https://foodapp-f0c23.firebaseio.com",
    projectId: "foodapp-f0c23",
    storageBucket: "",
    messagingSenderId: "451685886164",
    appId: "1:451685886164:web:b027b14bcb7c42f5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;