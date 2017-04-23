import {
  OPEN_LOGIN_MODAL, CLOSE_LOGIN_MODAL,
} from '../constants/ModalActionTypes'

export default (state = {
  loginModalVisible: false,
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
    default:
      return state
  }
}
