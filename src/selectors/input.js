import { createSelector } from 'reselect'

const selectFeildsValue = state => {
  return state.get('formData').get('input')
}
const makeSelectFeildEnable = () =>
  createSelector(selectFeildsValue, state => {
    return state.get('inputEnable')
  })
const makeSelectFeildsValue = () =>
  createSelector(selectFeildsValue, state => {
    return state.get('input')
  })
const makeSelectFeilds = () =>
  createSelector(selectFeildsValue, state => {
    return state.get('fields').toJS()
  })

export {
  makeSelectFeildsValue,
  makeSelectFeildEnable,
  makeSelectFeilds
}
