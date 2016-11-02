import {GET_LOCATION} from './actionTypes'

const initialState = {
    lat:'',
    lng:''
}



export default (state = initialState, action = {}) => {

    function Pos(position) {
        return ({
            lat: position.coords.latitude,
            lng: position.coords.longitude
        })

    }

    let loc = navigator.geolocation.getCurrentPosition(Pos);

    switch (action.type) {
        case GET_LOCATION:
            return Object.assign({}, state, {
                lat: 'bla',
                lng: 'bla'
            })
        default:
            return state
    }
}