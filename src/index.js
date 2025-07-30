import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/*
  If you are seeing a blank page, make sure your public/index.html file contains
  a <div id="root"></div> element. Also, check the browser console for errors.
  If nothing appears, try restarting your development server and ensure your
  components are correctly imported and exported.
*/
