import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB5i-UwMp6KUaFCOobXDghw0g3WD7EKF2E",
    authDomain: "drugstoc-app.firebaseapp.com",
    projectId: "drugstoc-app",
    storageBucket: "drugstoc-app.appspot.com",
    messagingSenderId: "353391754987",
    appId: "1:353391754987:web:f91d9e48e41108eef748ae",
    measurementId: "G-LBKD8RGJJX",
    databaseURL: "https://drugstoc-app-default-rtdb.firebaseio.com/"
  };
  
  const app = initializeApp(firebaseConfig);

  const database = getFirestore(app);

  const firebase = {
      app,
      database
  }

  export default firebase;

