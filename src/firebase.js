import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA3E7YYfyzN9xO_y_cl_52zFAbsdolbfrQ",
    authDomain: "hotstar-clone-1.firebaseapp.com",
    databaseURL: "https://hotstar-clone-1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "hotstar-clone-1",
    storageBucket: "hotstar-clone-1.appspot.com",
    messagingSenderId: "281674740291",
    appId: "1:281674740291:web:d515ff289aa59867921af6",
    measurementId: "G-5LFH6GFK48"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;