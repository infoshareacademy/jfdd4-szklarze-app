import React from 'react'
import GoogleMap from 'google-map-react'
import Place from './place/Place'

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(currentPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}
const currentPosition = function(position) {
    console.log('elo')
    return {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }

}

getLocation();


export default class CurrentLocation extends React.Component {


    render() {
        return (
            <div style={{width: '300px', height: '300px'}} >
                <GoogleMap
                    bootstrapURLKeys={{
                        key: 'AIzaSyCmKq7BbW9E8wkMALYHdjMHo6D839_cstk'
                    }}
                    center={[currentPosition.lat, currentPosition.lng]}
                    zoom={6}>
                    <Place lat={currentPosition.lat} lng={currentPosition.lng} label={'AMMMM'}/>
                </GoogleMap>
            </div>
        )
    }
}

