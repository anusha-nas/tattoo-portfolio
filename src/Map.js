import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

/*
function Popup(props) {
    const { location, shopName, businessHours } = props.popup;

    return (
        <Marker position={location}>
            <Popup>
                {shopName} <br /> {businessHours}
            </Popup>
        </Marker>
    )

}

export default function Map(props) {

    const popupArray = props.popups.map((aPopup) => {
        const popupElem = <Popup popup={ aPopup } key={ aPopup.location } />
        return popupElem
    });

    return (
        <MapContainer className="map" center={[47.6062, -122.3321]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            { popupArray }

        </MapContainer>
    )
}
*/
export default function Map() {
    return (
        <MapContainer className="map" center={[47.6062, -122.3321]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[47.6076, -122.3362]}>
                <Popup>
                    TT661 Tattoo <br /> 11:00 AM - 3:00 PM
                </Popup>
            </Marker>

            <Marker position={[47.6237, -122.3178]}>
                <Popup>
                    Fall Lake <br /> 12:00 AM - 9:00 PM
                </Popup>
            </Marker>

            <Marker position={[47.5971, -122.3221]}>
                <Popup>
                    Moonlight Ink <br /> Opens at 11:00 AM
                </Popup>
            </Marker>

        </MapContainer>
    )
}