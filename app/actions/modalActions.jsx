import {
  OPEN_LOGIN_MODAL, CLOSE_LOGIN_MODAL,
  OPEN_SIGNUP_MODAL, CLOSE_SIGNUP_MODAL,
  OPEN_ADD_REVIEW_MODAL, CLOSE_ADD_REVIEW_MODAL,
  OPEN_EDIT_AVATAR_MODAL, CLOSE_EDIT_AVATAR_MODAL,
  OPEN_PROMPT_SIGNUP_MODAL, CLOSE_PROMPT_SIGNUP_MODAL,
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

export const openAddReviewModal = courseId => ({
  type: OPEN_ADD_REVIEW_MODAL,
  courseId,
})

export const closeAddReviewModal = () => ({
  type: CLOSE_ADD_REVIEW_MODAL,
})

export const openEditAvatarModal = () => ({
  type: OPEN_EDIT_AVATAR_MODAL,
})

export const closeEditAvatarModal = () => ({
  type: CLOSE_EDIT_AVATAR_MODAL,
})

export const openPromptSignupModal = () => ({
  type: OPEN_PROMPT_SIGNUP_MODAL,
})

export const closePromptSignupModal = () => ({
  type: CLOSE_PROMPT_SIGNUP_MODAL,
})
