import React from 'react'
import GoogleMap from 'google-map-react'
import Place from './place/Place'
import './CurrentLocationMap.css'

class CurrentLocation extends React.Component {


    render() {
        var {
            latitude,
            longitude
        } = this.props
        return (
            <div className="mapContainer">
                <GoogleMap
                    bootstrapURLKeys={{
                        key: 'AIzaSyCmKq7BbW9E8wkMALYHdjMHo6D839_cstk'
                    }}
                    center={[latitude, longitude]}
                    zoom={13}
                    yesIWantToUseGoogleMapApiInternals>
                    <Place lat={latitude} lng={longitude} label={'A'}/>
                </GoogleMap>
            </div>
        )
    }
}

export default CurrentLocation

