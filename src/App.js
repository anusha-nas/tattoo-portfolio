import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Header from "./Header";
import LandingPage from "./LandingPage";
import Map from "./Map";
import Portfolios from "./Portfolios";
import Schedule from "./Schedule";
import Account from "./Account";
import Footer from "./Footer";

import CARDS from './data/Cards.json';
import MAPINFO from './data/MapInfo.json';
import SAMPLEPORTFOLIO from './data/Port.json';

export default function App(props) {

  //currents set of appointments in appointment list 
  const [appointments, setAppointments] = useState(props.appointments);

  const addAppt = (apptType, date, time, name, email, tattoo, budget) => {
    //add if/else appointment for correct appointment type
    let type = "";
    if (apptType === true) {
      type = "Consultation";
    } else {
      type = "Tattoo Appointment";
    }
    const newAppt = {
      id: appointments.length + 1,
      apptType: type,
      date: date,
      time: time,
      name: name,
      email: email,
      tattoo: tattoo,
      budget: budget
    }
    setAppointments([...appointments, newAppt]);
  }

  return (
    <div>
      <Header />
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<LandingPage cards={CARDS} />} />
          <Route path="Home" element={<LandingPage cards={CARDS} />} />
          <Route path="Map" element={<Map popups={MAPINFO} />} />
          <Route path="Portfolios" element={<Portfolios samplePortfolios={SAMPLEPORTFOLIO} />} />
          <Route path="Schedule" element={<Schedule appointments={appointments} addApptCallback={addAppt} />} />
          <Route path="Account" element={<Account />}>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
