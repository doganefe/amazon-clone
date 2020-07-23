import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDGwlgsb20OGsB45L2GKY4SW7TITWwFwcE",
  authDomain: "clone-76712.firebaseapp.com",
  databaseURL: "https://clone-76712.firebaseio.com",
  projectId: "clone-76712",
  storageBucket: "clone-76712.appspot.com",
  messagingSenderId: "556159114968",
  appId: "1:556159114968:web:2217bf06faf748dc6101ad",
  measurementId: "G-Y1XKCHJPVY"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
export { auth }

