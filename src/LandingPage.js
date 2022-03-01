import React from 'react';

export default function LandingPage(props) {

    const {cardTitle, cardImg, cardAlt, cardIntro, cardContent} = props.cards;

    return (
        <div className="container-fluid">

            <div className="row">
                <div className="col">
                    <span class="line-homepg">Popular Artists</span>
                </div>
            </div>

            <div className="row content-row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-title">{ cardTitle }</p>
                            <img src={ cardImg } alt={ cardAlt } className="shop-img"/>
                            <p className="card-subtitle mb-2 text-muted">{ cardIntro }</p>
                            <p className="card-text">{ cardContent }</p>
                        </div>
                    </div>
                </div>
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
                        <li><a className="to-portfolios" href="Portfolios.html">Step 3: Search artists and shops</a></li>
                        <li>Step 4: Schedule a consultation</li>
                        <li>Step 5: Get the tattoo and aftercare</li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <span className="line-homepg">Log in</span>
                </div>
            </div>
            <div className="row content-row">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label for="inputEmail" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="inputEmail" />
                        </div>
                        <div className="mb-3">
                            <label for="inputPassword" className="form-label">Password</label>
                            <input type="password" className="form-control" id="inputPassword" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="inputCheck" />
                            <label className="form-check-label" for="inputCheck">I'm an artist!</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}