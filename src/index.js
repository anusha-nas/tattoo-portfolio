import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

import Appointments from "./data/Appointments.json";

ReactDOM.render(
  <BrowserRouter>
        <App appointments={Appointments}/>
  </BrowserRouter>,
  document.getElementById('root')
);