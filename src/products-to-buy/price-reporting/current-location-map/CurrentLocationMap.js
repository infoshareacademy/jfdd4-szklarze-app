import React from 'react'
import GoogleMap from 'google-map-react'
import Place from './place/Place'
import { getLocation } from './actionCreators'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    currentLocation: state.currentLocationMap
})

const mapDispatchToProps = (dispatch) => ({
    getLocation: () => dispatch(getLocation())
})


class CurrentLocationMap extends React.Component {

    render() {

        var {
            currentLocation,
            getLocation
        } = this.props

        return (
            <div style={{width: '300px', height: '300px'}}>
                {getLocation}
                <GoogleMap
                    bootstrapURLKeys={{
                        key: 'AIzaSyCmKq7BbW9E8wkMALYHdjMHo6D839_cstk'
                    }}
                    center={[currentLocation.lat, currentLocation.lng]}
                    zoom={13}
                    yesIWantToUseGoogleMapApiInternals>
                    <Place lat={currentLocation.lat} lng={currentLocation.lng} label={'A'}/>
                </GoogleMap>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CurrentLocationMap)

