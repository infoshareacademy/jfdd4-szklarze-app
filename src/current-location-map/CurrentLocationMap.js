import React from 'react'
import GoogleMap from 'google-map-react'
import Place from './place/Place'


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
            <div style={{width: '300px', height: '300px'}}>
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

export default CurrentLocation

