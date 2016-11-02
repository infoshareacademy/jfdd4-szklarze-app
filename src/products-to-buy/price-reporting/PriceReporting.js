import React from 'react'
import {
    Modal,
    Form,
    FormGroup,
    FormControl,
    ControlLabel,
    Button
} from 'react-bootstrap'

import CurrentLocation from '../../current-location-map/CurrentLocationMap'
import './PriceReporting.css'

import {openPriceReportField, hidePriceReportField} from './actionCreators'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    isPriceReportFieldActive: state.priceReporting.isPriceReportFieldActive
})

const mapDispatchToProps = (dispatch) => ({
    openPriceReportField: () => dispatch(openPriceReportField()),
    hidePriceReportField: () => dispatch(hidePriceReportField()),
})

class PriceReporting extends React.Component {


    render() {
        const {
            isPriceReportFieldActive,
            openPriceReportField,
            hidePriceReportField
        } = this.props

        return (
            <div>
                <button onClick={openPriceReportField}>
                    Kupiłem taniej!
                </button>

                <Modal show={isPriceReportFieldActive} onHide={hidePriceReportField}>
                    <Modal.Header closeButton>
                        <Modal.Title>Kupiłeś taniej?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form
                            inline>
                            <FormGroup>
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
export default connect(mapStateToProps, mapDispatchToProps)(PriceReporting)