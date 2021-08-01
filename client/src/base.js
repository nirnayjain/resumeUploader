import  firebase from 'firebase/app'
import "firebase/storage";

const app = firebase.initializeApp({
    apiKey: "AIzaSyD_NoHe9L9rrBU2riJ0YXSXzdUxzmutKGE",
  authDomain: "video-player-d70fa.firebaseapp.com",
  projectId: "video-player-d70fa",
  storageBucket: "video-player-d70fa.appspot.com",
  messagingSenderId: "610561483260",
  appId: "1:610561483260:web:5f10e229f0b5868fba9279",
  measurementId: "G-TLT25GXPXT"
  });
  // Initialize Firebase
 
 
   export const storage=app.storage()
  export default app;