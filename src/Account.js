import React from 'react';

import Form from 'react-bootstrap/Form'
import Form from 'react-bootstrap/Form'

export default function Account() {
    return (
        <div>
            <h1>Account</h1>
            <div className="d-flex" id="wrapper">
                <div id="page-content-wrapper">
                    <div className="container-fluid">
                        <p>Profile Information</p>
                        <div className="tab-pane active" id="profile">
                            <Container>
                                <Form>
                                {/* to do: create form and formgroup functions, create array for name, email, location, map to form group objects*/}
                                    <Form.Group className="mb-3" controlId="formName">
                                        <Form.Label>Full name</Form.Label>
                                        <Form.Control type="name" placeholder="Megan Fox" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="megan-tattoos@uw.edu" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formLocation">
                                        <Form.Label>Location</Form.Label>
                                        <Form.Control type="location" placeholder="Seattle, WA" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Update
                                    </Button>
                                </Form>
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}