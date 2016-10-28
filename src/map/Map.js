import React from 'react'
import GoogleMap from 'google-map-react'
import Place from './place/Place'
import './Map.css'

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude);
}

getLocation();

export default (props) =>
    <div className="map-container">
        <GoogleMap
            bootstrapURLKeys={{
                key: 'AIzaSyCmKq7BbW9E8wkMALYHdjMHo6D839_cstk'
            }}
            center={[54.4416, 18.5601]}
            zoom={9}
            yesIWantToUseGoogleMapApiInternals
            onClick={console.log}>
            <Place lat={54.4416} lng={18.5601} text={'A'}/>
        </GoogleMap>
    </div>