import {types} from './types'
import { fromJS } from 'immutable'
import { fields } from './fields'

export const getFieldValue = (data) => {
  return {
    type: types.INPUT,
    data: data
  }
}

export const getFiElds = () => {
  return {
    type: types.FIELDS
  }
}

export const enableInput = () => {
  return {
    type: types.ENABLE
  }
}

const initialState = fromJS({
  input: '',
  inputEnable: true,
  fields: fields
})

const input = (state = initialState, action) => {
  switch (action.type) {
    case types.INPUT : {
      var updatedFields = state.get('fields').map(
        function (field) {
          var source = field.get('value').get('source')
          var sourceArray = source.split('.')
          if (sourceArray[0] === action.data.key) {
            for (const key of Object.keys(action.data)) {
              if (sourceArray[1] === key) {
                return field
                  .set('value',
                    field
                      .get('value')
                      .set('value', action.data[key]))
                  .set('disable', false)
              }
            }
          }
        }
      )
      return state.set('fields', updatedFields)
    }
    case types.ENABLE :
      return state.set('inputEnable', false)
    default :
      return state
  }
}
export default input
