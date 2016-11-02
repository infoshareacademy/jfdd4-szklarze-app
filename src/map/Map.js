import React from 'react'
import GoogleMap from 'google-map-react'
import Place from './place/Place'
import './Map.css'
import { connect } from 'react-redux'

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