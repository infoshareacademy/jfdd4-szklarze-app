import React from 'react'
import {
    Modal,
    Form,
    FormGroup,
    FormControl,
    Button
} from 'react-bootstrap'

import {openPriceReportField, hidePriceReportField} from './actionCreators'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    isPriceReportFieldActive: state.priceReporting.isPriceReportFieldActive
})

const mapDispatchToProps = (dispatch) => ({
    openPriceReportField: () => dispatch(openPriceReportField()),
    hidePriceReportField: () => dispatch(hidePriceReportField()),
})

const PriceReporting = (props) => (
    <div>
        <button onClick={openPriceReportField}>
            Kupiłem taniej!
        </button>

        <Modal show={props.isPriceReportFieldActive} onHide={hidePriceReportField}>
            <Modal.Header closeButton>
                <Modal.Title>Kupiłeś jeszcze taniej?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form inline>
                    <FormGroup>
                        <FormControl
                            type="text"
                        />
                    </FormGroup>
                    {' '}
                    <Button
                        type="submit"
                        onClick={hidePriceReportField}>
                        Zapisz
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(PriceReporting)