
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBVMPzq1XakU8eiHreFx1VPn6uykRMecdo",
    authDomain: "tinder-clone-ddc8f.firebaseapp.com",
    databaseURL: "https://tinder-clone-ddc8f.firebaseio.com",
    projectId: "tinder-clone-ddc8f",
    storageBucket: "tinder-clone-ddc8f.appspot.com",
    messagingSenderId: "1021557451642",
    appId: "1:1021557451642:web:4d79c159bc3500e93504c3",
    measurementId: "G-555DV305PF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;