import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

export default function Schedule() {
    //state variable to keep track of current inputted value 
    const [formData, setFormData] = useState({
        date: null, //what are default values for these form inputs? 
        time: null,
        appointment: null,
        name: "",
        email: "",
        tattoo: "",
        budget: "",
    });

    //create a callback function that updates the current value in the form to the
    //state variable above, add this as a callback to an onChange event to <input>/<form control>
    const handleChange = (event) => {
        let newValue = event.target.value; //what user has typed into form
        setFormData(newValue);
    }

    //save user inputs to form, render data as appointment card, empty form
    const handleSubmit = (event) => {
        setFormData("");
    }

    //create appointment card for user inputted form data
    function createAppointmentCard() {
        return (
            <Card>
                <Card.Title>{formData.date}</Card.Title>
                <Card.Text>{formData.time}</Card.Text>
                <Card.Text>{formData.appointment}</Card.Text>
                <Card.Text>{formData.name}</Card.Text>
                <Card.Text>{formData.email}</Card.Text>
                <Card.Text>{formData.tattoo}</Card.Text>
                <Card.Text>{formData.budget}</Card.Text>
            </Card>
        )
    }

    return (
        <div>
            <h1> New Appointment </h1>
            <container>
                <Form onSubmit={handleSubmit}>
                    {/* to do: create form and formgroup functions, create array for inputs, map to form group objects*/}
                    <Form.Group controlId="duedate">
                        <Form.Control type="date" name="date" placeholder="Date" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Time</Form.Label>
                        <Form.Select defaultValue="Choose time">
                            <option>9:00 am</option>
                            <option>12:00 pm</option>
                            <option>3:00 pm</option>
                            <option>6:00 pm</option>
                        </Form.Select>
                    </Form.Group>
                    <fieldset>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label>Appointment type?</Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="Tattoo Appointment"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Consultation"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                />
                            </Col>
                        </Form.Group>
                    </fieldset>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="name" placeholder="Megan Fox" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="megan-tattoos@uw.edu" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Tattoo</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Describe the tattoo you would like to get. Is it a custom design or from the
                                            artist's portfolio? Placement? Size?"/>
                        </Form.Group>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Budget</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Provide your maximum budget for the tattoo. Note the artist's minimum fee. Artist
                                            will contact you with more information on pricing based on your response."/>
                        </Form.Group>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Update Portfolio
                    </Button>
                </Form>
            </container>
            <div>
                <h1> Appointments</h1>
                <createAppointmentCard />
            </div>
        </div>
    );
}