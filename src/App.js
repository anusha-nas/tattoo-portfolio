import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from "./Header";
import LandingPage from "./LandingPage";
import Map from "./Map";
import Portfolios from "./Portfolios";
import Schedule from "./Schedule";
import Account from "./Account";

const ACCOUNT_INFO = [  
  { id: "formName",title: "Full name", type:"name", placeholder:"Megan Fox"},
  { id: "formEmail",title: "Email address", type:"email", placeholder:"megan-tattoos@uw.edu"},
  { id: "formLocation",title: "Location", type:"location", placeholder:"Seattle, WA"},
];

export default function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="Map" element={<Map />} />
        <Route path="Portfolios" element={<Portfolios />} />
        <Route path="Schedule" element={<Schedule />} />
        <Route path="Account" element={<Account account={ACCOUNT_INFO}/>} />
      </Routes>
    </div>
  );
}

