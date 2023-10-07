 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyC9Z293pn0A7z8OM824WIuTTsUqZ0mzjhY",
   authDomain: "fir-a58f7.firebaseapp.com",
   projectId: "fir-a58f7",
   storageBucket: "fir-a58f7.appspot.com",
   messagingSenderId: "949706059325",
   appId: "1:949706059325:web:14a0b048a4238ee610c454",
   measurementId: "G-B1T8RV0QE9"
 };

 // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);