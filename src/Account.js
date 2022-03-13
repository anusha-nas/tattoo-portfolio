import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default function Account() {
    return (
        <div>
            <h1>Account</h1>
            <div className="d-flex" id="wrapper">
                <div id="page-content-wrapper">
                    <div className="container-fluid">
                        <div className="tab-pane active" id="profile">
                            <Card className="color-account">
                                <Card.Body>
                                    <Card.Title>Account Information</Card.Title>
                                    <Card.Text>Full Name: "Megan Fox</Card.Text>
                                    <Card.Text>Email address: megan-tattoos@uw.edu</Card.Text>
                                    <Card.Text>Location: Seattle, WA</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex account-edit" id="wrapper">
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