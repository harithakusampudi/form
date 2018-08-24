import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { fromJS } from 'immutable'
import rootReducer from './modules'
import registerServiceWorker from './registerServiceWorker'

import './index.css'
import App from './App'

const initialState = {}
const enhancers = []
const store = createStore(
  rootReducer(),
  fromJS(initialState),
  ...enhancers
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))
registerServiceWorker()
