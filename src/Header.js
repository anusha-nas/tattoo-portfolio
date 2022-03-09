import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';


export default function Header() {
  return (
    <Navbar className="color-nav" variant="light">
      <Container className="notinMobile">
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              alt=""
              src="img/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '} INKD
            </Navbar.Brand></LinkContainer>
        <Nav className=".ms-auto">
          <LinkContainer to="/Map"><Nav.Link>Map</Nav.Link></LinkContainer>
          <LinkContainer to="/Portfolios"><Nav.Link>Portfolios</Nav.Link></LinkContainer>
          <LinkContainer to="/Favorites"><Nav.Link>Favorites</Nav.Link></LinkContainer>
          <LinkContainer to="/Schedule"><Nav.Link>Schedule</Nav.Link></LinkContainer>
          <LinkContainer to="/Account"><Nav.Link>Account</Nav.Link></LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
}

