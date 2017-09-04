import {
  OPEN_LOGIN_MODAL, CLOSE_LOGIN_MODAL,
  OPEN_SIGNUP_MODAL, CLOSE_SIGNUP_MODAL,
  OPEN_ADD_REVIEW_MODAL, CLOSE_ADD_REVIEW_MODAL,
  OPEN_EDIT_AVATAR_MODAL, CLOSE_EDIT_AVATAR_MODAL,
  OPEN_PROMPT_SIGNUP_MODAL, CLOSE_PROMPT_SIGNUP_MODAL,
} from '../constants/ModalActionTypes'

export default (state = {
  loginModalVisible: false,
  signupModalVisible: false,
  addReviewModalVisible: false,
  editAvatarModalVisible: false,
  promptSignupModalVisible: false,
}, action) => {
  switch (action.type) {
    case OPEN_PROMPT_SIGNUP_MODAL:
      return Object.assign({}, state, {
        promptSignupModalVisible: true,
      })
    case CLOSE_PROMPT_SIGNUP_MODAL:
      return Object.assign({}, state, {
        promptSignupModalVisible: false,
      })
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
    case OPEN_EDIT_AVATAR_MODAL:
      return Object.assign({}, state, {
        editAvatarModalVisible: true,
      })
    case CLOSE_EDIT_AVATAR_MODAL:
      {
        return Object.assign({}, state, {
          editAvatarModalVisible: false,
        })
      }
    default:
      return { ...state }
  }
}
