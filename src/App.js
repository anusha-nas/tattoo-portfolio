import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Header from "./Header";
import LandingPage from "./LandingPage";
import Map from "./Map";
import Portfolios from "./Portfolios";
import Favorites from "./Favorites";
import Schedule from "./Schedule";
import Account from "./Account";
import Footer from "./Footer";
// import EditAccountInfo from "./EditAccountInfo";
// import EditProfile from "./EditProfile";

import CARDS from './Cards.json';
import MAPINFO from './MapInfo.json';

export default function App(props) {

  //currents set of appointments in appointment list 
  const [appointments, setAppointments] = useState(props.appointments);

  //append a new appointment to the current appointment list 
  const addAppt= (props) => {
    const newAppt = {
      // id: appointments.length + 1,
      // appt: apptObject.appt,
      // consult: apptObject.consult,
      // date: apptObject.date,
      // time: apptObject.time,
      // name: apptObject.name,
      // email: apptObject.email,
      // tattoo: apptObject.tattoo,
      // budget: apptObject.budget 
      id: appointments.length + 1,
      appt: props.appt,
      consult: props.consult,
      date: props.date,
      time: props.time,
      name: props.name,
      email: props.email,
      tattoo: props.tattoo,
      budget: props.budget 
    }

    setAppointments([...appointments, newAppt]);
  }

  return (
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage cards={CARDS} />} />
        {/* <Route path="Map" element={<Map popups={MAPINFO}/>} /> */}
        <Route path="Map" element={<Map />} />
        <Route path="Portfolios" element={<Portfolios />} />
        <Route path="Favorites" element={<Favorites />} />
        <Route path="Schedule" element={<Schedule appointments={props.appointments} addApptCallback={addAppt}/>} />
        <Route path="Account" element={<Account />}>
          {/* <Route path=":EditAccountInfo" element={<EditAccountInfo />} />    
          <Route path=":EditProfile" element={<EditProfile />} />    */}
        </Route>
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      <Footer />
    </div>
  );
}

