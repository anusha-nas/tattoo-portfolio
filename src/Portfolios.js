import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

// takes a portfolio object and an onClick callback function and returns a single card
export function SingleCard(props) {

    // a single portfolio object
    const portfolioObject = props.portfolio;

    return (
        <Col>
            <div className="space-portfolios">
                <Card className="portfolio-card-size">
                    <Card.Img variant="top" src={portfolioObject.cardPhoto} />
                    <Card.Body>
                        <Card.Title>{portfolioObject.cardArtist}</Card.Title>
                        <Card.Subtitle className="portfolio-shop-name">{portfolioObject.cardShop}</Card.Subtitle>
                        <Card.Text>
                            {portfolioObject.cardText}
                        </Card.Text>
                        <Button variant="primary" onClick={props.onClick} id={portfolioObject.cardArtist}> Favorite</Button>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    )
}

// takes an array of portfolio objects and renders the portfolio page
export default function Portfolios(props) {

    // initialize the fav to be an array of portfolios
    const [fav, setFav] = useState(props.samplePortfolios);

    // defines a function to update a portfolio card's favorited attribute if the card is clicked
    const handleClick = (event) => {
        let updateFavCard = fav.map((card) => {
            if (event.target.id == card.cardArtist) {
                card.favorited = true;
            }
            return card;
        })
        setFav(updateFavCard);
    }

    // data of all portfolio objects
    const portfolioInfoArray = props.samplePortfolios;

    // create portfolio cards for all portfolio objects
    const cardElementArray = portfolioInfoArray.map((portObject) => {
        const oneCard = <SingleCard portfolio={portObject} key={portObject.cardArtist} onClick={handleClick} />
        return oneCard
    });

    // create portfolio cards for portfolios objects whose favorited attribute is true
    const favCardArray = fav.map((card) => {
        if (card.favorited == true) {
            const favCard = <SingleCard portfolio={card} key={card.cardArtist} onClick={handleClick} />
            return favCard
        }
    })

    return (
        <div>
            <h1>Portfolios</h1>
            <Container>
                <Row xs={1} sm={2} md={3}>
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