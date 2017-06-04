import {
  OPEN_LOGIN_MODAL, CLOSE_LOGIN_MODAL,
  OPEN_SIGNUP_MODAL, CLOSE_SIGNUP_MODAL,
  OPEN_ADD_REVIEW_MODAL, CLOSE_ADD_REVIEW_MODAL,
} from '../constants/ModalActionTypes'

export default (state = {
  loginModalVisible: false,
  signupModalVisible: false,
  addReviewModalVisible: false,
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
    case OPEN_ADD_REVIEW_MODAL:
      return Object.assign({}, state, {
        addReviewModalVisible: true,
      })
    case CLOSE_ADD_REVIEW_MODAL:
      return Object.assign({}, state, {
        addReviewModalVisible: false,
      })
    default:
      return { ...state }
  }
}
