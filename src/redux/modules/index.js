import { combineReducers } from 'redux'
import app from './app/reducer'
import appSaga from './app/saga'
import { all } from 'redux-saga/effects'
const appReducers = combineReducers({
  app
})

export const reducers = (state, action) => {
  // you can empty state on logout here
  return appReducers(state, action)
}

export const sagas = function * () {
  yield all([
    appSaga()
  ])
}
