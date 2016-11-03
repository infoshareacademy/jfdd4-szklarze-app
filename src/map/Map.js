import React from 'react'
import GoogleMap from 'google-map-react'
import Place from './place/Place'
import './Map.css'
import {connect} from 'react-redux'
import {fetchPriceMarkers} from './actionCreators'

const mapStateToProps = (state) => ({
    priceMarkers: state.mapData.priceMarkers
})

const mapDispatchToProps = (dispatch) => ({
    fetchPriceMarkers: () => dispatch(fetchPriceMarkers)
})


class Map extends React.Component {

 render() {

        return (
            <div className="map-container">
                <GoogleMap
                    bootstrapURLKeys={{
                        key: 'AIzaSyCmKq7BbW9E8wkMALYHdjMHo6D839_cstk'
                    }}
                    center={[52.2297, 21.0122]}
                    zoom={6}
                    yesIWantToUseGoogleMapApiInternals
                    onClick={console.log}>
                    {this.props.priceMarkers.map(point => <Place {...point}/>)}
                </GoogleMap>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)