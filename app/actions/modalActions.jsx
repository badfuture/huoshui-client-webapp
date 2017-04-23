import {
  OPEN_LOGIN_MODAL, CLOSE_LOGIN_MODAL,
} from '../constants/ModalActionTypes'


export const openLoginModal = () => ({
  type: OPEN_LOGIN_MODAL,
})

export const closeLoginModal = () => ({
  type: CLOSE_LOGIN_MODAL,
})
