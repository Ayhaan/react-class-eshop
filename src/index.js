import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// Your css
import './sass/app.sass'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


