import React from 'react'
import GoogleMap from 'google-map-react'
import Place from './place/Place'
import './Map.css'
import { connect } from 'react-redux'

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


const mapStateToProps = (state) => ({
    points: state.map.points
})


const Map = (props) =>
    <div className="map-container">
        <GoogleMap
            bootstrapURLKeys={{
                key: 'AIzaSyCmKq7BbW9E8wkMALYHdjMHo6D839_cstk'
            }}
            center={[54.4416, 18.5601]}
            zoom={7}
            yesIWantToUseGoogleMapApiInternals
            onClick={console.log}>
            {props.points.map(point => <Place lat={point.lat} lng={point.lng} text={point.label}/>)}
        </GoogleMap>
    </div>

export default connect(mapStateToProps)(Map)