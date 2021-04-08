import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './web/containers'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import createSagaMiddleWare from 'redux-saga'
import { configureStore } from './redux/store'
import './index.css'
import { sagas as rootSaga } from './redux/modules'

const segaMiddleWare = createSagaMiddleWare()
// Initilize the redux-store
const { store, persistor } = configureStore({ middleware: segaMiddleWare })
segaMiddleWare.run(rootSaga)

const Root = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <Switch>
          <Route path='*' component={App} />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>
)

const containerElement = document.getElementById('root')
if (containerElement) {
  ReactDOM.render(<Root />, containerElement)
} else {
  throw new Error('Could not find any HTML section with id \'root\', Application start Failed')
}

export default store
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
