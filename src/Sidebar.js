import React from 'react';

export default function Sidebar() {
    return (

        <div>
            <div className="border-end bg-white" id="sidebar-wrapper">
                <div className="card">
                    <img src="img/profile.jpg" className="card-img-top" alt="user profile image" />
                    <div className="card-body">
                        <h5 className="card-title">Megan Fox</h5>
                    </div>
                </div>
                <div className="list-group list-group-flush">
                    <a className="list-group-item list-group-item-action list-group-item-light p-3" href="Account.html">Profile</a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3" href="Favorites.html">Favorites</a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3" href="EditProfile.html">Portfolio</a>
                </div>
            </div>
        </div>
    );
}