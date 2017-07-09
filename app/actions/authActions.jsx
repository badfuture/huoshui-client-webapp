import axios from 'axios'
import localStore from 'store'
import { URL_LOGIN, URL_SIGNUP, URL_USER } from '../constants/ApiEndpoints'
import {
  SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_REQUEST, LOGOUT_SUCCESS,
  UPLOAD_AVATAR_REQUEST, UPLOAD_AVATAR_SUCCESS, UPLOAD_AVATAR_FAILURE,
  GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE,
 } from '../constants/AuthActionTypes'

import {
  closeLoginModal, closeSignupModal,
  closeEditAvatarModal,
 } from './modalActions'
import getAllParams from '../utils/parseURL'

/** *****************************************************
* get user info
*******************************************************/
export const getUserRequest = () => ({
  type: GET_USER_REQUEST,
})

export const getUserSuccess = user => ({
  type: GET_USER_SUCCESS,
  user,
})

export const getUserFailure = err => ({
  type: GET_USER_FAILURE,
  err,
})

export const getLatestUserInfo = () =>
  (dispatch) => {
    const token = localStore.get('token')
    const user = localStore.get('user')
    if (!token || !user) {
      return false
    }
    dispatch(getUserRequest())
    return axios.get(`${URL_USER}/${user.id}`)
   .then((resp) => {
     const data = resp.data
     localStore.set('user', data)
     dispatch(getUserSuccess(data))
   })
   .catch((err) => {
     dispatch(getUserFailure(err))
   })
  }

/** *****************************************************
* signup
*******************************************************/
export const requestSignup = creds => ({
  type: SIGNUP_REQUEST,
  creds,
})

export const SignupSuccess = ({ token, user }) => ({
  type: SIGNUP_SUCCESS,
  token,
  user,
})

export const SignupError = message => ({
  type: SIGNUP_FAILURE,
  message,
})

export const signupUser = creds =>
  (dispatch) => {
    dispatch(requestSignup(creds))
    return axios.post(`${URL_SIGNUP}`, {
      username: `${creds.username}`,
      email: `${creds.email}`,
      password: `${creds.password}`,
    })
   .then((resp) => {
     const data = resp.data
     localStore.set('token', data.token)
     localStore.set('user', data.user)
     dispatch(closeSignupModal())
     dispatch(SignupSuccess(data))
   })
   .catch((err) => {
     dispatch(SignupError(err.message))
     return Promise.reject(err)
   })
  }

/**
 * *****************************************************
* login
*******************************************************/
export const requestLogin = creds => ({
  type: LOGIN_REQUEST,
  creds,
})

export const receiveLogin = ({ token, user }) => ({
  type: LOGIN_SUCCESS,
  token,
  user,
})

export const loginError = message => ({
  type: LOGIN_FAILURE,
  message,
})

export const loginUser = creds =>
  (dispatch) => {
    dispatch(requestLogin(creds))
    return axios.post(`${URL_LOGIN}`, {
      email: `${creds.email}`,
      password: `${creds.password}`,
    })
   .then((resp) => {
     const data = resp.data
     localStore.set('token', data.token)
     localStore.set('user', data.user)
     dispatch(receiveLogin(data))
     dispatch(closeLoginModal())
   })
   .catch((err) => {
     dispatch(loginError(err.message))
     return Promise.reject(err)
   })
  }

export const loginUserQQ = popup =>
  (dispatch) => {
    dispatch(requestLogin())
    const handle = window.setInterval(() => {
      if (!popup || popup.closed) {
        window.clearInterval(handle)
        if (!localStore.get('user')) {
          dispatch(loginError())
        }
      }
      let creds = {}
      try {
        creds = getAllParams(popup.location)
      } catch (err) {
        creds = {}
      }
      if (creds.token && creds.user) {
        localStore.set('token', creds.token)
        localStore.set('user', creds.user)
        dispatch(receiveLogin({
          token: creds.token,
          user: creds.user,
        }))
        dispatch(closeLoginModal())
        window.clearInterval(handle)
        popup.close()
      }
    }, 100)
  }

export const loginUserGithub = popup =>
  (dispatch) => {
    dispatch(requestLogin())
    const handle = window.setInterval(() => {
      if (!popup) { window.clearInterval(handle) }
      let creds = {}
      try {
        creds = getAllParams(popup.location)
      } catch (err) {
        creds = {}
      }
      if (creds.token && creds.user) {
        localStore.set('token', creds.token)
        localStore.set('user', creds.user)
        dispatch(receiveLogin({
          token: creds.token,
          user: creds.user,
        }))
        dispatch(closeLoginModal())
        window.clearInterval(handle)
        popup.close()
      }
    }, 100)
  }

// logout
export const requestLogout = () => ({
  type: LOGOUT_REQUEST,
})

export const receiveLogout = () => ({
  type: LOGOUT_SUCCESS,
})

export const logoutUser = () =>
  (dispatch) => {
    dispatch(requestLogout())
    localStore.remove('token')
    localStore.remove('user')
    dispatch(receiveLogout())
  }

/** ****************************************************
* upload avatar
*******************************************************/

export const uploadAvatarRequest = () => ({
  type: UPLOAD_AVATAR_REQUEST,
})

export const uploadAvatarSuccess = updatedUser => ({
  type: UPLOAD_AVATAR_SUCCESS,
  updatedUser,
})

export const uploadAvatarFailure = err => ({
  type: UPLOAD_AVATAR_FAILURE,
  err,
})

export const uploadAvatar = formData =>
  (dispatch) => {
    dispatch(uploadAvatarRequest())
    return axios.post(
      '/user/avatar',
      formData,
    ).then((updatedUser) => {
      localStore.set('user', updatedUser.data)
      dispatch(uploadAvatarSuccess(updatedUser.data))
      dispatch(closeEditAvatarModal())
    })
   .catch((err) => {
     dispatch(uploadAvatarFailure(err))
   })
  }
