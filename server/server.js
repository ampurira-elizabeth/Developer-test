import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore"
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChIJQ_2gQT8U3v9EVAn06d8ONjOBgtMhA",
  authDomain: "developer-test-bf17a.firebaseapp.com",
  projectId: "developer-test-bf17a",
  storageBucket: "developer-test-bf17a.appspot.com",
  messagingSenderId: "652947068074",
  appId: "1:652947068074:web:53b459d05dee436b84ecd3",
  measurementId: "G-QYLGTXVSN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db= getFirestore(app)
const db_tasks = collection(db, "db_tasks")
export default db_tasks