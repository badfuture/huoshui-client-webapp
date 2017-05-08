import {
  OPEN_LOGIN_MODAL, CLOSE_LOGIN_MODAL,
  OPEN_SIGNUP_MODAL, CLOSE_SIGNUP_MODAL,
} from '../constants/ModalActionTypes'


export const openLoginModal = () => ({
  type: OPEN_LOGIN_MODAL,
})

export const closeLoginModal = () => ({
  type: CLOSE_LOGIN_MODAL,
})

export const openSignupModal = () => ({
  type: OPEN_SIGNUP_MODAL,
})

export const closeSignupModal = () => ({
  type: CLOSE_SIGNUP_MODAL,
})
