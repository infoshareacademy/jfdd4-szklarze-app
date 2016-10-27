import React from 'react'
import GoogleMap from 'google-map-react'
import Place from './place/Place'
import './Map.css'

export default (props) =>
    <div className="map-container">
        <GoogleMap
            center={[54.4416, 18.5601]}
            zoom={9}>
            <Place lat={54.4416} lng={18.5601} text={'A'}/>
        </GoogleMap>
    </div>