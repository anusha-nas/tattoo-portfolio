import React from 'react';


//create appointment card for user inputted form data
function AppointmentCard(props) {
    const apptObj = props.appointment;
    return (
        <div>
            <div>
                <div className="card mb-3">
                    <div className="card-body">
                        <h3 className="card-title">{apptObj.apptType} </h3>
                        <p className="card-text">Time: {apptObj.date} {apptObj.time}</p>
                        <p className="card-text">Contact: {apptObj.name}, {apptObj.email}</p>
                        <p className="card-text">Tattoo: {apptObj.tattoo}</p>
                        <p className="card-text">Budget: {apptObj.budget} </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// takes an array of appointments as prop
export default function AppointmentList(props) {
    // define a map() function that creates a list of <Appointment /> elements
    // save that in a variable then render the list using an inline expression
    let appointmentItems = props.appointments.map((appointment) => {
        return <AppointmentCard key={appointment.id} appointment={appointment} />
    });

    return (
        <div className="col">
            {appointmentItems}
        </div>
    );
}