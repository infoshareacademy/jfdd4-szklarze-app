import React from 'react'
import TiStar from 'react-icons/lib/ti/star'
import './Place.css'

const MARKER_SIZE = 25;
const greatPlaceStyle = {
    position: 'absolute',
    width: MARKER_SIZE,
    height: MARKER_SIZE,
    left: -MARKER_SIZE / 2,
    top: -MARKER_SIZE / 2
}

export default (props) =>

        <div style={greatPlaceStyle} className="place"><TiStar/></div>
