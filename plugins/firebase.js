import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCBnfmF09cw98vGrMBtVD97f4lOfHnc9Tw",
    authDomain: "hrcosts-1.firebaseapp.com",
    projectId: "hrcosts-1",
    storageBucket: "hrcosts-1.appspot.com",
    messagingSenderId: "94260681437",
    appId: "1:94260681437:web:0356b8f8ceb5cab7f19934",
    measurementId: "G-2D0M250KK4"
};

let firebaseApp;

const apps = getApps();
if (!apps.length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = apps[0];
}

const db = getFirestore(firebaseApp, {});
const auth = getAuth(firebaseApp);

export { db, auth };