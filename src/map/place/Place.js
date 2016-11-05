import React from 'react'
import TiStar from 'react-icons/lib/ti/star'
import './Place.css'
import {Popover, OverlayTrigger} from 'react-bootstrap'
import { connect } from 'react-redux'

const MARKER_SIZE = 25;
const greatPlaceStyle = {
    position: 'absolute',
    width: MARKER_SIZE,
    height: MARKER_SIZE,
    left: -MARKER_SIZE / 2,
    top: -MARKER_SIZE / 2
}

const mapStateToProps = (state) => ({
    products: state.products
})


class Place extends React.Component {


    render() {

        let date = this.props.date
        let formattedDate = date.substring(0, 10)

        let priceMarkerId = this.props.priceMarkerId
        let products = this.props.products

        let popoverTop = (
            <Popover id="popover-positioned-scrolling-top" title={formattedDate}>
                <strong>
                    {products.map(product => product.id === priceMarkerId ? product.productName : null)}
                </strong>
                <br/>
                {this.props.price} zł
            </Popover>
        );

        return (
            <OverlayTrigger container={this} trigger="click" placement="top" overlay={popoverTop}>
                <div style={greatPlaceStyle} className="place">
                    <TiStar/>
                </div>
            </OverlayTrigger>
        )
    }
}

export default connect (mapStateToProps)(Place)
