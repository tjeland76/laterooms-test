import 'babel-polyfill';
import React from 'react';
import './styles/styles.css'; // Webpack will run the associated loader and plug this into the page.
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './style.scss';

render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
, document.getElementById('app'));
