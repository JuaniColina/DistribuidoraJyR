
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCLExINiXipvBmyr0fG6lddvkhWvli75uE",
  authDomain: "distribuidora-jyr.firebaseapp.com",
  projectId: "distribuidora-jyr",
  storageBucket: "distribuidora-jyr.appspot.com",
  messagingSenderId: "879793684467",
  appId: "1:879793684467:web:f844846eab4604a6839c86"
};

const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app)