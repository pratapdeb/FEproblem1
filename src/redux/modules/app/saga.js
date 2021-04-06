import { call, put, takeLatest } from "@redux-saga/core/effects"
import { apiRequest } from "../../../utility/fetch"
import actions from './actions'
import {BASE_URLS} from '../../../environment/api'

function * fetchPlanets () {
    try {
        const response  = yield call(apiRequest, `${BASE_URLS.PLANETS_URL}`, { method: 'GET'})
        if(response) yield put({type: actions.FETCH_PLANETS_SUCCESS, payload: response})
        else yield put({type: actions.FETCH_PLANETS_FAILED})
}
    catch(err) {
        yield put({type: actions.FETCH_PLANETS_FAILED, payload: err})
    }
}

function * fetchVehicles () {

    try {
        const response  = yield call(apiRequest, `${BASE_URLS.VEHICLES_URL}`, { method: 'GET'})
        if(response) yield put({type: actions.FETCH_VEHICLES_SUCCESS, payload: response})
        else yield put({type: actions.FETCH_VEHICLES_FAILED})
}
    catch(err) {
        yield put({type: actions.FETCH_VEHICLES_FAILED, payload: err})
    }
}


export default function * actionWatcher () {
    yield takeLatest(actions.FETCH_PLANETS, fetchPlanets)
    yield takeLatest(actions.FETCH_VEHICLES, fetchVehicles)
}