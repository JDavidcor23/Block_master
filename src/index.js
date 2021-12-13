import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router/AppRouter';
import {BrowserRouter} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
ReactDOM.render(
  <BrowserRouter>
    <Navbar/>
    <AppRouter />
  </BrowserRouter>,
  document.getElementById('root')
);
