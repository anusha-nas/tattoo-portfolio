import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

import APPOINTMENTS from "./data/Appointments.json";

ReactDOM.render(
  <BrowserRouter>
    <App appointments={APPOINTMENTS} />
  </BrowserRouter>,
  document.getElementById('root')
);