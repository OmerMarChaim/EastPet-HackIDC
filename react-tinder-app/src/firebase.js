import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAmba-Sp8tI4yEcyT3tS3lFZAjoahceWH8",
    authDomain: "team36hackidc.firebaseapp.com",
    databaseURL: "https://team36hackidc-default-rtdb.firebaseio.com",
    projectId: "team36hackidc",
    storageBucket: "team36hackidc.appspot.com",
    messagingSenderId: "484251076406",
    appId: "1:484251076406:web:99585c8f6b02fd70cf5597",
    measurementId: "G-3Q6QKSVH3F"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

export default database;