import React from 'react'
import GoogleMap from 'google-map-react'
import Place from './place/Place'
import './CurrentLocationMap.css'
import { connect } from 'react-redux'
import { getCoordinates } from './../actionCreators'

const mapDispatchToProps = (dispatch) => ({
    getCoordinates: (lat,lng) => dispatch(getCoordinates(lat,lng))
})

class CurrentLocation extends React.Component {

    constructor() {
        super()

        this.state = {}

    }

    componentWillMount() {
        var context = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            context.setState({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })
            console.log(context.state);
        })


    }

    render() {

        return (
            <div className="mapContainer">
                <GoogleMap
                    bootstrapURLKeys={{
                        key: 'AIzaSyCmKq7BbW9E8wkMALYHdjMHo6D839_cstk'
                    }}
                    center={[this.state.lat, this.state.lng]}
                    zoom={13}
                    yesIWantToUseGoogleMapApiInternals>
                    <Place lat={this.state.lat} lng={this.state.lng} label={'A'}/>
                </GoogleMap>
            </div>
        )
    }
}

export default connect (null, mapDispatchToProps)(CurrentLocation)

