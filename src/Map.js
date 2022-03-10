import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// `props.popup` is a dictionary of the information of a single popup location
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

// `props.popups` refers to the entire MapInfo data, the information of all 3 shops for popup
export default function Map(props) {

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