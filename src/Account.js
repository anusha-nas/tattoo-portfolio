import React from 'react';

import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export default function Account(props) {

    {/* to do:  map account info to form group objects
        const accountInfoObject = props.account.map((elem) => {
        const formElem = <Form.Group key={elem.id} <Form.Label>{form.title}</Form.Label> <Form.Control type={form.type} placeholder={form.placeholder} />/>;
        return formElem;
      });*/}


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