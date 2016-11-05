import React from 'react'
import TiStar from 'react-icons/lib/ti/star'
import './Place.css'
import {Popover, OverlayTrigger} from 'react-bootstrap'

const MARKER_SIZE = 25;
const greatPlaceStyle = {
    position: 'absolute',
    width: MARKER_SIZE,
    height: MARKER_SIZE,
    left: -MARKER_SIZE / 2,
    top: -MARKER_SIZE / 2
}

const popoverTop = (
    <Popover id="popover-positioned-scrolling-top" title={}>
        <strong>Holy guacamole!</strong> Check this info.
    </Popover>
);

export default class Place extends React.Component {


    render() {
        return (
            <OverlayTrigger container={this} trigger="click" placement="top" overlay={popoverTop}>
            <div style={greatPlaceStyle} className="place">
                <TiStar/>
            </div>
            </OverlayTrigger>
        )
    }
}

