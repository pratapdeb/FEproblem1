const actions = {
  FETCH_PLANETS: 'FETCH_PLANETS',
  FETCH_PLANETS_SUCCESS: 'FETCH_PLANETS_SUCCESS',
  FETCH_PLANETS_FAILED: 'FETCH_PLANETS_FAILED',
  FETCH_VEHICLES: 'FETCH_VEHICLES',
  FETCH_VEHICLES_SUCCESS: 'FETCH_VEHICLES_SUCCESS',
  FETCH_VEHICLES_FAILED: 'FETCH_VEHICLES_FAILED',
  FIND_FALCON: 'FIND_FALCON',
  FIND_FALCON_INIT: 'FIND_FALCON_INIT',
  FIND_FALCON_SUCCESS: 'FIND_FALCON_SUCCESS',
  FIND_FALCON_FAILED: 'FIND_FALCON_FAILED',
  CLEAR_RESULT: 'CLEAR_RESULT'
}

export const getPlanets = () => ({
  type: actions.FETCH_PLANETS
})

export const getVehicles = () => ({
  type: actions.FETCH_VEHICLES
})

export const findFalcon = (data) => ({
  type: actions.FIND_FALCON,
  data: data
})

export const clearResult = () => ({
  type: actions.CLEAR_RESULT
})
export default actions
