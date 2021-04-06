import actions from './actions'

const initialSatate = {
    planets: [],
    vehicles: []
}

const appReducer = (state = initialSatate, action) => {
    switch (action.type) {
        case actions.FETCH_PLANETS_SUCCESS:
            return { ...state, planets: action.payload }
        case actions.FETCH_VEHICLES_SUCCESS:
            return { ...state, vehicles: action.payload }
        default:
            return state
    }
}
export default appReducer