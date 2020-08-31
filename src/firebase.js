import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAAlVoxH9xZdpwwk6HWAuAOLB3gkojgRJA",
    authDomain: "facebook-clone-9dfb4.firebaseapp.com",
    databaseURL: "https://facebook-clone-9dfb4.firebaseio.com",
    projectId: "facebook-clone-9dfb4",
    storageBucket: "facebook-clone-9dfb4.appspot.com",
    messagingSenderId: "725571683624",
    appId: "1:725571683624:web:b646f0be9280aea112bc1d",
    measurementId: "G-NCS9F4BCY0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{auth, provider};
  export default db;