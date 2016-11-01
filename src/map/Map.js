import React from 'react'
import GoogleMap from 'google-map-react'
import Place from './place/Place'
import './Map.css'
import { connect } from 'react-redux'

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         console.log("Geolocation is not supported by this browser.");
//     }
// }
// function showPosition(position) {
//     console.log("Latitude: " + position.coords.latitude +
//         "<br>Longitude: " + position.coords.longitude);
// }
//
// getLocation();


const mapStateToProps = (state) => ({
    points: state.map.points
})


const Map = (props) =>
    <div className="map-container">
        <GoogleMap
            bootstrapURLKeys={{
                key: 'AIzaSyCmKq7BbW9E8wkMALYHdjMHo6D839_cstk'
            }}
            center={[52.2297, 21.0122]}
            zoom={6}
            yesIWantToUseGoogleMapApiInternals
            onClick={console.log}>
            {props.points.map(point => <Place {...point}/>)}
        </GoogleMap>
    </div>

export default connect(mapStateToProps)(Map)