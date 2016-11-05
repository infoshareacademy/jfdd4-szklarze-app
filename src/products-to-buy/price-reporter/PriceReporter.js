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

import { hidePriceReportField} from './actionCreators'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    isPriceReportFieldActive: state.priceReporting.isPriceReportFieldActive,
    currentProductId: state.priceReporting.activeProduct,
    currentProductName: state.priceReporting.productName,

})

const mapDispatchToProps = (dispatch) => ({
        hidePriceReportField: () => dispatch(hidePriceReportField()),
})

class PriceReporter extends React.Component {


    render() {
        const {
            isPriceReportFieldActive,
            hidePriceReportField,
            currentProductId,
            currentProductName
        } = this.props

        return (
            <div className="priceReporter">
                <Modal show={isPriceReportFieldActive} onHide={hidePriceReportField}>
                    <Modal.Header closeButton>
                        <Modal.Title>Kupiłeś taniej?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {currentProductName}
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