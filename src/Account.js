import React from 'react';
import {Link} from 'react-router-dom';

import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import EditAccountInfo from "./EditAccountInfo";
import EditProfile from "./EditProfile";

export default function Account(props) {
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
                                        <Link to="/EditAccountInfo" className="btn btn-primary">Edit Account Info</Link>
                                        <Link to="/EditProfile" className="btn btn-primary">Edit Portfolio</Link>
                                    </Card.Body>
                                </Card>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
}