import * as types from '../constants/actionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case types.SET_USER:
      return [
        Object.assign({}, action.user),
      ]
    default:
      return state
  }
}
