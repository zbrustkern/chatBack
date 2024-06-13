import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBxFf91uMGA4gUUnzlni-K5jvoLDWLMLU4",
  authDomain: "chatback-3db3f.firebaseapp.com",
  projectId: "chatback-3db3f",
  storageBucket: "chatback-3db3f.appspot.com",
  messagingSenderId: "868247613168",
  appId: "1:868247613168:web:be2fab2b859303c6f3dc35"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
