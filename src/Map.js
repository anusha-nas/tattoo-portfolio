import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const position = [47.6076, -122.3362];

export default function Map() {
    return (
        <MapContainer center={position} zoom={9}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
                <Popup>
                    TT661 Tattoo <br /> 11:00 AM - 3:00 PM
                </Popup>
            </Marker>
        </MapContainer>
    );
}