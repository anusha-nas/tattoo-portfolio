import React from 'react';

export default function Map() {
    return (
        <div>
            <div id="page-content-wrapper">
                <div className="container-fluid">
                    <p>Edit Portfolio</p>
                    <div className="tab-pane active" id="profile">
                        <Container>
                            <Form>
                                {/* to do: create form and formgroup functions, create array for inputs, map to form group objects*/}
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Artist Name</Form.Label>
                                    <Form.Control type="name" placeholder="Megan Fox" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formShop">
                                    <Form.Label>Shop Name</Form.Label>
                                    <Form.Control type="shop" placeholder="Slave to the Needle" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formLocation">
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control type="location" placeholder="Seattle, WA" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Your Bio</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formsocial">
                                    <Form.Label>Social media</Form.Label>
                                    <Form.Control type="socialmedia" placeholder="@megan-tattoos" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formurl">
                                    <Form.Label>URL</Form.Label>
                                    <Form.Control type="url" placeholder="megan-tattoos.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="megan-tattoos@uw.edu" />
                                </Form.Group>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>Select image to upload:</Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Update Portfolio
                                </Button>
                            </Form>
                        </Container>
                    </div>
                </div>
            </div>
        </div >
    );
}