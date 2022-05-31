// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc3gybeDt3VDHc02yBgat7FOMSdNldaQo",
  authDomain: "instructory-f49db.firebaseapp.com",
  projectId: "instructory-f49db",
  storageBucket: "instructory-f49db.appspot.com",
  messagingSenderId: "261307939115",
  appId: "1:261307939115:web:b96e7eca8b81f13863ed6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth

