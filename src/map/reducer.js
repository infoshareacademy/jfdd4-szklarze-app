const initialState = {
    points: [
        {lat: 52.2297, lng: 21.0122, label: 'A'},
        {lat: 54.3520, lng: 18.6466, label: 'B'}
    ]
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state
    }
}