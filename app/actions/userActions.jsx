import * as types from '../constants/actionTypes'

const userActions = user => ({
  type: types.SET_USER,
  user,
})

export default userActions
