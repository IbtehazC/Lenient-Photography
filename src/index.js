import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './components/Homepage/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/Contacts';
import About from './components/About';
import Package from './components/Homepage/Package';



ReactDOM.render(
  <React.StrictMode>
    <Package />
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
