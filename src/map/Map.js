import React from 'react'
import GoogleMap from 'google-map-react'
import Place from './place/Place'
import './Map.css'
import {connect} from 'react-redux'



const mapStateToProps = (state) => ({
    priceMarkers: state.mapData.priceMarkers
})


class Map extends React.Component {

    render() {

        let priceMarkers = this.props.priceMarkers;

        return (
            <div className="map-container">
                <GoogleMap
                    bootstrapURLKeys={{
                        key: 'AIzaSyCmKq7BbW9E8wkMALYHdjMHo6D839_cstk'
                    }}
                    center={[54.360765, 18.633659]}
                    zoom={15}
                    yesIWantToUseGoogleMapApiInternals
                    onClick={console.log}
                    onChildClick={this._onChildClick}>
                    {priceMarkers.map(priceMarker => <Place lat={priceMarker.shopPosition.lat} lng={priceMarker.shopPosition.lng}/>)}
                </GoogleMap>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Map)