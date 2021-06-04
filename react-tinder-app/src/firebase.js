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
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const userRef = firestore.doc(`users/${user.uid}`);
const snapshot = await userRef.get();
export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const { email, displayName, photoURL } = user;
      try {
        await userRef.set({
          displayName,
          email,
          photoURL,
          ...additionalData
        });
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return getUserDocument(user.uid);
  };
  const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.doc(`users/${uid}`).get();
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };

  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {displayName});
    }
    catch(error){
      setError('Error Signing up with email and password');

    setEmail("");
    setPassword("");
    setDisplayName("");
  };


export default database;
export {auth};
// export const signInWithGoogle = () => {
//     auth.signInWithPopup(provider);
//   };
  