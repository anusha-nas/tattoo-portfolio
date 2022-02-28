import React from 'react';

export default function Schedule() {
    return (
        <div>
            <h1> Appointment Form</h1>
            <container>
                <Form>
                    {/* to do: create form and formgroup functions, create array for inputs, map to form group objects*/}
                    <Form.Group controlId="duedate">
                        <Form.Control type="date" name="date" placeholder="Date" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Time</Form.Label>
                        <Form.Select defaultValue="Choose time">
                            <option>9:00 am</option>
                            <option>.12:00 pm</option>
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
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Anything else?</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Anything else you would like your artist to know or have questions? Leave them a
                                            message here."/>
                        </Form.Group>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Update Portfolio
                    </Button>
                </Form>
            </container>
        </div>
    );
}