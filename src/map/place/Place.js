import React from 'react'
import TiStar from 'react-icons/lib/ti/star'
import './Place.css'
import {Popover} from 'react-bootstrap'

const MARKER_SIZE = 25;
const greatPlaceStyle = {
    position: 'absolute',
    width: MARKER_SIZE,
    height: MARKER_SIZE,
    left: -MARKER_SIZE / 2,
    top: -MARKER_SIZE / 2
}

export default class Place extends React.Component {



    render() {
        return (
        <div style={greatPlaceStyle} className="place">
            <TiStar/>
            <div className="">
                <Popover
                    id="popover-basic"
                    placement="right"
                    positionLeft={200}
                    positionTop={50}
                    title="Popover right"
                >
                    And here's some <strong>amazing</strong> content. It's very engaging. right?
                </Popover>
            </div>
            </div>
        )
    }
}

