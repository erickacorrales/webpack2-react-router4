/**
 * Created by erickacorrales on 20/4/17.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('app')
);
