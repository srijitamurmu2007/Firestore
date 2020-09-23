import * as firebase from 'firebase'
require('@firebase/firestore')

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAHIH9Y3H4SddFE9oDPHq-QVRYm_JU-h0s",
    authDomain: "wily-app-9523d.firebaseapp.com",
    databaseURL: "https://wily-app-9523d.firebaseio.com",
    projectId: "wily-app-9523d",
    storageBucket: "wily-app-9523d.appspot.com",
    messagingSenderId: "2446594666",
    appId: "1:2446594666:web:f17d9bf2bc9aca3d9c7013"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase.firestore();
