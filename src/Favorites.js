import React from 'react';
//import { Routes, Route } from 'react-router-dom';
//import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SingleCard from './Portfolios';


// export default function Favorites(props) {

//     let allCards = props.samplePortfolios;
//     let favCard = allCards.filter(singleCardObj => singleCardObj.favorited == true);
//     console.log(favCard);

//     // const favCardElementArray = allCards.map((card) => {
//     //     if (card.favorited == true) {
//     //         favCard.push(card);
//     //     }
//     // });

//     const favCardElement = favCard.map((card) => {
//         return <SingleCard portfolio={card} key={card.cardArtist} />
//     });

//     // const cardElementArray = portfolioInfoArray.map((portObject) => {
//     //     const oneCard = <SingleCard portfolio={portObject} key={portObject.cardArtist} handleClick={handleClick} />
//     //     return oneCard
//     // });

//     return (
//         <div>
//             <h1>Favorites</h1>
//             {favCardElement}
//         </div>
//     );
// }


// // handleClick={props.handleClick}