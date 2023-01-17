import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import firebase from 'firebase/compat/app';

const config = {
    apiKey: "AIzaSyD6VismmzfvkpwSJgEGbvWv2dPakCD06Qo",
    authDomain: "alexweb-1.firebaseapp.com",
    projectId: "alexweb-1",
    storageBucket: "alexweb-1.appspot.com",
    messagingSenderId: "370821814556",
    appId: "1:370821814556:web:c8832981240b2f21cc82d9",
    measurementId: "G-HVT803NFSG"
};

firebase.initializeApp(config);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);