import React from 'react'
import GoogleMap from 'google-map-react'
import Place from './place/Place'


const CurrentLocation = (props) => {

    let bla = {};

    function getLocation() {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude);
            bla.lat = position.coords.latitude;
            bla.lng = position.coords.longitude;
        })
    }

    getLocation();

    console.log(bla);

        return (
            <div style={{width: '300px', height: '300px'}}>
                {console.log(bla)}
                <GoogleMap
                    bootstrapURLKeys={{
                        key: 'AIzaSyCmKq7BbW9E8wkMALYHdjMHo6D839_cstk'
                    }}
                    center={[bla.lat, bla.lng]}
                    zoom={6}
                    yesIWantToUseGoogleMapApiInternals>
                    <Place lat={bla.lat} lng={bla.lng} label={'AMMMM'}/>
                </GoogleMap>
            </div>
        )
}

export default CurrentLocation

