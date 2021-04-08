import { persistStore, persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, createStore } from 'redux'
import storage from 'redux-persist/lib/storage'
import { reducers as rootReducer } from '../modules'
import { isProduction } from '../../utility'
// redux-store in development
const developmentStore = (reducer, initialState, middleware) => {
  const enhancers = composeWithDevTools(
    applyMiddleware(middleware)
  )
  return createStore(reducer, initialState, enhancers)
}

// redux-store in production
const productionStore = (reducer, initialSatate, middleware) => createStore(reducer, initialSatate, applyMiddleware(middleware))

// persistant configuration
const persistanceConfiguration = {
  key: 'falcon-root',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['app']
}
const persistedReducer = persistReducer(persistanceConfiguration, rootReducer)

// return a map containing a redux store and persistor
const configureStore = ({ middleware, initialState, options }) => {
  const store = isProduction
    ? productionStore(persistedReducer, initialState, middleware)
    : developmentStore(persistedReducer, initialState, middleware)
  return { store, persistor: persistStore(store) }
}

export { configureStore }
