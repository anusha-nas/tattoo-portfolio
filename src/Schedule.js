import React, { useState } from 'react';

import AppointmentList from "./AppointmentList";

export default function Schedule(props) {


    //state function for each field of form
    const [appt, setAppt] = useState(null);
    const [consult, setConsult] = useState(null);
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tattoo, setTattoo] = useState("");
    const [budget, setBudget] = useState("");


    //create a callback function that updates the current value in the form to the
    //state variable above, add this as a callback to an onChange event to <input>/<form control>
    const handleAppt = (event) => {
        //console.log(event.target.value);
        setAppt(event.target.value);
    }
    const handleConsult = (event) => {
        setConsult(event.target.value);
    }
    const handleDate = (event) => {
        setDate(event.target.value)
    }
    const handleTime = (event) => {
        setTime(event.target.value);
    }
    const handleName = (event) => {
        setName(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleTattoo = (event) => {
        setTattoo(event.target.value)
    }
    const handleBudget = (event) => {
        setBudget(event.target.value);
    }

    //save user submission
    const handleSubmit = (event) => {
        event.preventDefault();

        //addAppt callback function is executed with the state variables holding all the user inputs
        props.addApptCallback(appt, consult, date, time, name, email, tattoo, budget);

        //reset field to starting state(empty form)
        setAppt(null);
        setConsult(null);
        setDate(null);
        setTime(null);
        setName("");
        setEmail("");
        setTattoo("");
        setBudget("");
    }


    return (
        <div className="col-md-6 col-sm-6 col-xs-12">
            <h1>Schedule </h1>
            <form method="post" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="control-label ">
                        Appointment type?
                    </label>
                    <div className="form-group">
                        <div className="radio">
                            <label className="radio">
                                <input name="radio" type="radio" value="Consultation" onChange={handleConsult} />
                                Consultation
                            </label>
                        </div>
                        <div className="radio">
                            <label className="radio">
                                <input name="radio" type="radio" value="Tattoo Appointment" onChange={handleAppt} />
                                Tattoo Appointment
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group ">
                    <label className="control-label " htmlFor="date">
                        Date
                    </label>
                    <input className="form-control" id="date" name="date" placeholder="MM/DD/YYYY"
                        type="text" onChange={handleDate} />
                </div>
                <div className="form-group ">
                    <label className="control-label " htmlFor="select">
                        Time
                    </label>
                    <select className="select form-control" id="select" name="select" onChange={handleTime}>
                        <option value="9:00 am">
                            9:00 am
                        </option>
                        <option value="12:00 pm">
                            12:00 pm
                        </option>
                        <option value="3:00 pm">
                            3:00 pm
                        </option>
                        <option value="6:00 pm">
                            6:00 pm
                        </option>
                    </select>
                </div>
                <div className="form-group ">
                    <label className="control-label " htmlFor="name">
                        Full Name
                    </label>
                    <input className="form-control" id="name" name="name" type="text" placeholder="Megan Fox" onChange={handleName} />
                </div>
                <div className="form-group">
                    <label className="control-label requiredField" htmlFor="email">
                        Email
                    </label>
                    <input className="form-control" id="email" name="email" type="text" placeholder="megan-tattoos@uw.edu" onChange={handleEmail} />
                </div>
                <div className="form-group">
                    <label className="control-label requiredField" htmlFor="tattoo">
                        Tattoo
                    </label>
                    <input className="form-control" id="tattoo" name="tattoo" type="text" onChange={handleTattoo} />
                    <span className="help-block" id="hint_subject1">
                        Describe the tattoo you would like to get. Is it a custom design or from the
                        artist's portfolio? Placement? Size?
                    </span>
                </div>
                <div className="form-group">
                    <label className="control-label requiredField" htmlFor="budget">
                        Budget
                    </label>
                    <input className="form-control" id="budget" name="budget" type="text" onChange={handleBudget} />
                    <span className="help-block" id="hint_subject1">
                        Provide your maximum budget for the tattoo. Note the artist's minimum fee. Artist
                        will contact you with more information on pricing based on your response.
                    </span>
                </div>
                <button className="btn ">Submit</button>
            </form>
            <h1> Appointments</h1>
            <AppointmentList appointments={props.appointments}/>
        </div>);

}