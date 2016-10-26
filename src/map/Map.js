import React from 'react'
import GoogleMap from 'google-map-react'
import Place from './place/Place'
import './Map.css'

export default (props) =>
    <div className="map-container">
        <GoogleMap
            center={[59.938043, 30.337157]}
            zoom={9}>
            <Place lat={59.955413} lng={30.337844} text={'A'}/>
            <Place lat={60.955420} lng={30.337860} text={'B'}/>
        </GoogleMap>
    </div>