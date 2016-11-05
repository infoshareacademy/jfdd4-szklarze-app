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

import {openPriceReportField, hidePriceReportField} from './actionCreators'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    isPriceReportFieldActive: state.priceReporting.isPriceReportFieldActive,
    activeProduct: state.priceReporting.activeProduct,
    hello: state.priceReporting.productName
})

const mapDispatchToProps = (dispatch) => ({
    openPriceReportField: (productId, purchaseDate, productName) =>
        dispatch(openPriceReportField(productId, purchaseDate, productName)),
    hidePriceReportField: () => dispatch(hidePriceReportField()),
})

class PriceReporter extends React.Component {


    render() {
        const {
            isPriceReportFieldActive,
            hidePriceReportField,
            productName,
            productId,
            purchaseDate,
            activeProduct
        } = this.props

        return (
            <div className="priceReporter">
                <Modal show={isPriceReportFieldActive} onHide={hidePriceReportField}>
                    <Modal.Header closeButton>
                        <Modal.Title>Kupiłeś taniej? {activeProduct}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form inline>
                            <FormGroup inline>
                                <ControlLabel>Twoja cena:</ControlLabel>
                                <FormControl
                                    type="text"/>
                            </FormGroup>
                            <CurrentLocation />
                            <Button onClick={hidePriceReportField}>
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