import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "identity-style-guide/dist/assets/css/styles.css";
import './index.css';
import 'identity-style-guide/dist/assets/js/main.js'
import '../node_modules/identity-style-guide/dist/assets/js/main.js'
import 'uswds/src/js/polyfills';
import { accordion } from 'identity-style-guide';
import Banner from './components/SiteBanner';
import Logo from './components/SiteLogo';

accordion.on();

ReactDOM.render(
  <div><div class="site-wrap bg-light-blue"><Banner/><Logo/><App/></div></div>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
