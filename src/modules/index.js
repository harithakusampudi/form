import { combineReducers } from 'redux-immutable'

import formData from './formData'

export default function createReducer (asyncReducers) {
  return combineReducers({
    formData,
    ...asyncReducers
  })
}
