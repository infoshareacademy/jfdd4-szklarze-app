import React from 'react'
import {
    Modal,
    Form,
    FormGroup,
    FormControl,
    ControlLabel,
    Button
} from 'react-bootstrap'
import CurrentLocation from './current-location-map/CurrentLocationMap'
import './PriceReporter.css'

import {hidePriceReportField, updatePriceMarker, updateExternalPriceMarkers} from './actionCreators'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    isPriceReportFieldActive: state.priceReporting.isPriceReportFieldActive,
    currentProductName: state.priceReporting.productName,
    reportedPrice: state.priceReporting.reportedPrice

})

const mapDispatchToProps = (dispatch) => ({
    hidePriceReportField: () => dispatch(hidePriceReportField()),
    updatePriceMarker: (reportedPrice) => dispatch(updatePriceMarker(reportedPrice)),
    updateExternalPriceMarkers: () => dispatch(updateExternalPriceMarkers())
})

class PriceReporter extends React.Component {


    render() {
        const {
            isPriceReportFieldActive,
            hidePriceReportField,
            currentProductName,
            updatePriceMarker,
            updateExternalPriceMarkers,
            reportedPrice
        } = this.props


        const handleChange = function (event) {
            updatePriceMarker(event.target.value)
            console.log(reportedPrice)
        }

        const handleClick = () =>
            isNaN(Number(reportedPrice)) ||
            reportedPrice < 0 || reportedPrice.length === 0 ?
                alert('Wpisana wartość musi być liczbą dodatnią.' +
                    ' Części ułamkowe należy podać po kropce') :
                updateExternalPriceMarkers();


        return (
            <div className="priceReporter">
                <Modal show={isPriceReportFieldActive} onHide={hidePriceReportField}>
                    <Modal.Header closeButton>
                        <Modal.Title>Kupiłeś taniej?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className="productName">
                            {currentProductName}
                        </p>
                        <Form inline>
                            <FormGroup>
                                <ControlLabel >Twoja cena:</ControlLabel>
                                <FormControl
                                    type="text" onChange={handleChange}/>
                            </FormGroup>
                            <CurrentLocation />
                            <Button onClick={handleClick}>
                                Zgłoś promocję
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PriceReporter)