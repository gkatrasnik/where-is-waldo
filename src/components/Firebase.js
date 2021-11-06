import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  //hiiden api key
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "where-is-waldo-fcfa2.firebaseapp.com",
  projectId: "where-is-waldo-fcfa2",
  storageBucket: "where-is-waldo-fcfa2.appspot.com",
  messagingSenderId: "318862658885",
  appId: "1:318862658885:web:cb2e2c6e6e4ab04f5ec22c",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;
