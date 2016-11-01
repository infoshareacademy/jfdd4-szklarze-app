import React from 'react'
import {
    Modal,
    Form,
    FormGroup,
    FormControl,
    ControlLabel,
    Button
} from 'react-bootstrap'
import GoogleMap from 'google-map-react'
import Place from './../../map/place/Place'

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
                        <div style={{width: '300px', height: '300px'}}>
                            <GoogleMap
                                bootstrapURLKeys={{
                                    key: 'AIzaSyCmKq7BbW9E8wkMALYHdjMHo6D839_cstk'
                                }}
                                center={[52.2297, 21.0122]}
                                zoom={6}
                                yesIWantToUseGoogleMapApiInternals>
                                <Place lat={52.2297} lng={21.0122} text={'A'}/>
                            </GoogleMap>
                        </div>
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