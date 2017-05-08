import {
  OPEN_LOGIN_MODAL, CLOSE_LOGIN_MODAL,
  OPEN_SIGNUP_MODAL, CLOSE_SIGNUP_MODAL,
} from '../constants/ModalActionTypes'

export default (state = {
  loginModalVisible: false,
  signupModalVisible: false,
}, action) => {
  switch (action.type) {
    case OPEN_LOGIN_MODAL:
      return Object.assign({}, state, {
        loginModalVisible: true,
      })
    case CLOSE_LOGIN_MODAL:
      return Object.assign({}, state, {
        loginModalVisible: false,
      })
    case OPEN_SIGNUP_MODAL:
      return Object.assign({}, state, {
        signupModalVisible: true,
      })
    case CLOSE_SIGNUP_MODAL:
      return Object.assign({}, state, {
        signupModalVisible: false,
      })
    default:
      return state
  }
}
