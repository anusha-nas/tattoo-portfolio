import React from 'react';
import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function EditAccountInfo() {
    return (
        <div>
            <h1>Account</h1>
            <div className="d-flex" id="wrapper">
                <div id="page-content-wrapper">
                    <div className="container-fluid">
                        <div className="tab-pane active" id="profile">
                            <Container>
                                <Form>
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