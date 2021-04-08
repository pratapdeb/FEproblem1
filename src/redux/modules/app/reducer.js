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
    case actions.FIND_FALCON_INIT:
      return { ...state, loading: true, result: {} }
    case actions.FIND_FALCON_SUCCESS:
      return { ...state, result: action.payload, loading: false }
    case actions.FIND_FALCON_FAILED:
      return { ...state, result: {}, loading: false }
    case actions.CLEAR_RESULT:
      return { ...state, result: {} }
    default:
      return state
  }
}
export default appReducer
