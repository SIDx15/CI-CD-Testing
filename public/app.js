// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3kr-HL-CliFvlgQtIlB9k1M2Xt7lH8Pk",
  authDomain: "fir-cicd-a3093.firebaseapp.com",
  projectId: "fir-cicd-a3093",
  storageBucket: "fir-cicd-a3093.firebasestorage.app",
  messagingSenderId: "350774338425",
  appId: "1:350774338425:web:69dd6ccf530982bc5185a8",
  measurementId: "G-VMPSNJ0P25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


document.addEventListener('DOMContentLoaded', () => {
    const dynamicContent = document.getElementById('dynamic-content');
    const changeButton = document.getElementById('changeContent');

    const messages = [
        "Hello, Firebase CI/CD!",
        "Continuous Integration is awesome!",
        "Deployment made easy!",
        "Web development rocks!"
    ];

    let currentIndex = 0;

    changeButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % messages.length;
        dynamicContent.textContent = messages[currentIndex];
    });

    // Initial content
    dynamicContent.textContent = messages[currentIndex];
});