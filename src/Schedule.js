import React, { useState } from 'react';

import AppointmentList from "./AppointmentList";

export default function Schedule(props) {


    //state function for each field of form
    const [apptType, setApptType] = useState(false);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tattoo, setTattoo] = useState("");
    const [budget, setBudget] = useState("");


    //create a callback function that updates the current value in the form to the
    //state variable above, add this as a callback to an onChange event to <input>/<form control>
    const handleApptType = (event) => {
        setApptType(event.target.checked);
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
        props.addApptCallback(apptType, date, time, name, email, tattoo, budget);

        //reset field to starting state(empty form)
        setApptType(false);
        setDate("");
        setTime("");
        setName("");
        setEmail("");
        setTattoo("");
        setBudget("");
    }


    return (
        <div className="container-fluid"> 
        <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-12" >
            <h1>Schedule </h1>
            <form method="post" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="control-label ">
                        Appointment type?
                    </label>
                    <div className="form-group">
                        <div className="radio">
                            <label className="radio">
                                <input name="radio" type="radio" value="Consultation" checked={apptType} onChange={handleApptType} />
                                Consultation
                            </label>
                        </div>
                        <div className="radio">
                            <label className="radio">
                                <input name="radio" type="radio" value="Tattoo Appointment" />
                                Tattoo Appointment
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group ">
                    <label className="control-label " htmlFor="date">
                        Date
                    </label>
                    <input className="form-control" id="date" name="date" placeholder="MM/DD/YYYY" value={date}
                        type="text" onChange={handleDate} />
                </div>
                <div className="form-group">
                    <label className="control-label " htmlFor="select">
                        Time
                    </label>
                    <select className="form-select" id="select" name="select" value={time} onChange={handleTime}>
                        <option>
                            9:00 am
                        </option>
                        <option>
                            12:00 pm
                        </option>
                        <option>
                            3:00 pm
                        </option>
                        <option>
                            6:00 pm
                        </option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="control-label " htmlFor="name">
                        Full Name
                    </label>
                    <input className="form-control" id="name" name="name" type="text" placeholder="Megan Fox" value={name} onChange={handleName} />
                </div>
                <div className="form-group">
                    <label className="control-label requiredField" htmlFor="email">
                        Email
                    </label>
                    <input className="form-control" id="email" name="email" type="text" placeholder="megan-tattoos@uw.edu" value={email} onChange={handleEmail} />
                </div>
                <div className="form-group">
                    <label className="control-label requiredField" htmlFor="tattoo">
                        Tattoo
                    </label>
                    <input className="form-control" id="tattoo" name="tattoo" type="text" value={tattoo} onChange={handleTattoo} />
                    <span className="help-block" id="hint_subject1">
                        Describe the tattoo you would like to get. Is it a custom design or from the
                        artist's portfolio? Placement? Size?
                    </span>
                </div>
                <div className="form-group">
                    <label className="control-label requiredField" htmlFor="budget">
                        Budget
                    </label>
                    <input className="form-control" id="budget" name="budget" type="text" value={budget} onChange={handleBudget} />
                    <span className="help-block" id="hint_subject1">
                        Provide your maximum budget for the tattoo. Note the artist's minimum fee. Artist
                        will contact you with more information on pricing based on your response.
                    </span>
                </div>
                <button className="btn ">Submit</button>
            </form>
            </div>
            <div className="col-md-6">
            <h1> Appointments</h1>
            <AppointmentList appointments={props.appointments} />
            </div>
        </div>
        </div>
    );

}