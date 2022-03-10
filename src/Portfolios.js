import React from 'react';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


function SingleCard(props) {

    const portfolioObject = props.portfolio;

    return (
        <Col>
            <div>
                <Card>
                    <Card.Img variant="top" src={portfolioObject.cardPhoto} />
                    <Card.Body>
                        <Card.Title>{portfolioObject.cardArtist}</Card.Title>
                        <Card.Text>
                            {portfolioObject.cardText}
                        </Card.Text>
                        <Button variant="primary">Favorites</Button>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    )
}

export default function Portfolios(props) {

    const portfolioInfoArray = props.samplePortfolios;

    const cardElementArray = portfolioInfoArray.map((portObject) => {
        const oneCard = <SingleCard portfolio={portObject} key={portObject.cardArtist} />
        return oneCard
    });

    return (
        <div>
            <h1>Portfolios</h1>
            <Container fluid>
                <Row>
                    {cardElementArray}
                </Row>
            </Container>

        </div>
    );
}
