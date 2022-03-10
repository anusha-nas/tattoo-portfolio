import React from 'react';
//import { Routes, Route } from 'react-router-dom';
//import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Favorites(props) {
    return (
        <div>
            <h1>Favorites</h1>
            <div className="container fluid">
                <div className="col">
                    <span id="reservations">Favorites</span>
                </div>
            </div>
            <Container fluid>
                <Row>
                    <Col>
                        <div>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/img/moonlight.png" />
                                <Card.Body>
                                    <Card.Title>Moonlight Ink</Card.Title>
                                    <Card.Text>
                                        Appointment Only. Please contact schedule with a specific artist directly.
                                </Card.Text>
                                    <Button variant="primary">More Info</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
