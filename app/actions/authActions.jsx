import axios from 'axios'
import localStore from 'store'
import { URL_LOGIN, URL_SIGNUP } from '../constants/ApiEndpoints'
import {
  SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_REQUEST, LOGOUT_SUCCESS,
 } from '../constants/AuthActionTypes'

import { closeLoginModal, closeSignupModal } from './modalActions'
import getAllParams from '../utils/parseURL'

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
     dispatch(SignupSuccess(data))
     dispatch(closeSignupModal())
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
