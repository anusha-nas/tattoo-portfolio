import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default function Portfolios(props) {
    return (
        <div>
            <h1>Portfolios</h1>
            <div className="container fluid">
                <div className="col">
                    <span id="reservations">Survey Tattoo Artists</span>
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
                    <Col>
                        <div>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/img/661.jpg" />
                                <Card.Body>
                                    <Card.Title>TT661 Tattoo</Card.Title>
                                    <Card.Text>
                                        Luna Webber has over 10 years of tattoo experience, and emphasizes detail
                                        and care in her work.
                                </Card.Text>
                                    <Button variant="primary">More Info</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/img/fall_lake.jpg" />
                                <Card.Body>
                                    <Card.Title>Fall Lake Tattoo</Card.Title>
                                    <Card.Text>
                                        Located in Capitol Hill and always focused on empowering clients through
                                        their art.
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
