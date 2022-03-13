import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export function SingleCard(props) {

    const portfolioObject = props.portfolio;
    
    return (
        <Col>
            <div>
                <Card className="portfolioCardSize">
                    <Card.Img variant="top" src={portfolioObject.cardPhoto} />
                    <Card.Body>
                        <Card.Title>{portfolioObject.cardArtist}</Card.Title>
                        <Card.Subtitle>{portfolioObject.cardShop}</Card.Subtitle>
                        <Card.Text>
                            {portfolioObject.cardText}
                        </Card.Text>
                        <Button variant="primary" onClick={props.onClick} id={portfolioObject.cardArtist}> Add to Favorites</Button>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    )
}

export default function Portfolios(props) {

    const [fav, setFav] = useState(props.samplePortfolios);


    const handleClick = (event) => {
        let updateFavCard = fav.map((card) => {
            if (event.target.id == card.cardArtist) {
                card.favorited = true;
            }
            console.log("hi");
            return card;
        })
        setFav(updateFavCard);
    }



    const portfolioInfoArray = props.samplePortfolios;


    const cardElementArray = portfolioInfoArray.map((portObject) => {
        const oneCard = <SingleCard portfolio={portObject} key={portObject.cardArtist} onClick={handleClick} />
        return oneCard
    });

    const favCardArray = fav.map((card) => {
        if (card.favorited == true) {
            const favCard = <SingleCard portfolio={card} key={card.cardArtist} onClick={handleClick} />
            return favCard
        }
    })

    return (
        <div>
            <h1>Portfolios</h1>
            <Container fluid>
                <Row>
                    {cardElementArray}
                </Row>
            </Container>

            <h1>Favorites</h1>
            <div className="d-flex">
                {favCardArray}
            </div>
        </div>
    );
}