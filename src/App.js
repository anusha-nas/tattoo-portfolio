import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./Header";
import LandingPage from "./LandingPage";
import Map from "./Map";
import Portfolios from "./Portfolios";
import Schedule from "./Schedule";
import Account from "./Account";
import Footer from "./Footer";
import EditAccountInfo from "./EditAccountInfo";
import EditProfile from "./EditProfile";

import CARDS from './Cards.json';

export default function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage cards={CARDS} />} />
        <Route path="Map" element={<Map />} />
        <Route path="Portfolios" element={<Portfolios />} />
        <Route path="Schedule" element={<Schedule />} />
        <Route path="Account" element={<Account />}>
          {/* <Route path=":EditAccountInfo" element={<EditAccountInfo />} />    
          <Route path=":EditProfile" element={<EditProfile />} />    */}
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

