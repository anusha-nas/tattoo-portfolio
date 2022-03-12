import React from 'react';

function Card(props) {
    const { cardTitle, cardImg, cardAlt, cardIntro, cardContent } = props.card;

    return (
        <div className="col col-12 col-md-6 col-lg-4 col-xl-4 d-flex">
            <div className="card">
                <div className="card-body">
                    <p className="card-title">{cardTitle}</p>
                    <img src={cardImg} alt={cardAlt} className="shop-img" />
                    <p className="card-subtitle mb-2 text-muted">{cardIntro}</p>                         
                    <p className="card-text">{cardContent}</p>
                </div>
            </div>
        </div>
    )
}

export default function LandingPage(props) {
    const cardArray = props.cards.map((aCard) => {
        const cardElem = <Card card={ aCard } key={ aCard.cardTitle } />
        return cardElem
    });

    return (
        <div className="container-fluid">

            <div className="row">
                <div className="col">
                    <span className="line-homepg">Popular Artists</span>
                </div>
            </div>

            <div className="row content-row">
                { cardArray }
            </div>

            <div className="row">
                <div className="col">
                    <span className="line-homepg">Tattooing Process</span>
                </div>
            </div>
            <div className="row content-row">
                <div className="col">
                    <ul>
                        <li>Step 1: Choose designs</li>
                        <li>Step 2: Think about placement</li>
                        <li>Step 3: Search artists and shops</li>
                        <li>Step 4: Schedule a consultation</li>
                        <li>Step 5: Get the tattoo and aftercare</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}