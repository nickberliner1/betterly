import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Boostrap css file
import 'bootstrap/dist/css/bootstrap.min.css';

// CSS files to not be overridden by Bootstrap
import './App.css';
import './components/styles/navbar.css';
import './components/styles/cv.css';
import './components/styles/edit-cv-form.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
