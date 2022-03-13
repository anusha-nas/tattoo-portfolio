import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// takes the information of a single popup location as parameter
// returns a popup element for that single location
function PopMarker(props) {

    const { location, shopName, businessHours } = props.popup;

    return (
        <Marker position={location}>
            <Popup>
                {shopName} <br /> {businessHours}
            </Popup>
        </Marker>
    );
}

// takes an array of locations and renders a map of center Seattle with location information popups
export default function Map(props) {

    // apply the popmarker function defined above on each one of the given location,
    // then returns results in an array
    const popupArray = props.popups.map((aPopup) => {
        return <PopMarker popup={ aPopup } key={ aPopup.location } />
    });

    return (
        <MapContainer className="map" center={[47.6062, -122.3321]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {popupArray}

        </MapContainer>
    )
}