import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC37I5fgztbAA_DIClTGFqy4poNiUooAJw",
  authDomain: "facebook-clone-ec7e2.firebaseapp.com",
  projectId: "facebook-clone-ec7e2",
  storageBucket: "facebook-clone-ec7e2.appspot.com",
  messagingSenderId: "525004176277",
  appId: "1:525004176277:web:b0850b003be14b275d149c",
  measurementId: "G-E6C1GTKJH5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;