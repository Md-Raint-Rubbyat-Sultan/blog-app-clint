// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYzZhqLj73ZgmyNj-c5gt42Db_vNLcbrQ",
  authDomain: "blog-app-rimi.firebaseapp.com",
  projectId: "blog-app-rimi",
  storageBucket: "blog-app-rimi.appspot.com",
  messagingSenderId: "845432823921",
  appId: "1:845432823921:web:909359514d1404516f7bd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;