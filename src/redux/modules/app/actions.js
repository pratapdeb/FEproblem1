const actions = {
    FETCH_PLANETS: 'FETCH_PLANETS',
    FETCH_PLANETS_SUCCESS: 'FETCH_PLANETS_SUCCESS',
    FETCH_PLANETS_FAILED: 'FETCH_PLANETS_FAILED',
    FETCH_VEHICLES: 'FETCH_VEHICLES',
    FETCH_VEHICLES_SUCCESS: 'FETCH_VEHICLES_SUCCESS',
    FETCH_VEHICLES_FAILED: 'FETCH_VEHICLES_FAILED'
}

export const getPlanets = () => ({
    type: actions.FETCH_PLANETS
})

export const getVehicles = () => ({
    type: actions.FETCH_VEHICLES
})
export default actions