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
import { getCookie, deleteAllCookies } from '../utils/parseCookie'

import { success, info, error } from 'react-notification-system-redux'
import Messages from '../constants/NotificationMessages'

const notificationOpts = {
  // uid: 'once-please', // you can specify your own uid if required
  title: 'Hey, it\'s good to see you!',
  message: 'Now you can see how easy it is to use notifications in React!',
  position: 'bc',
  autoDismiss: 0,
  action: {
    label: 'Click me!!',
    callback: () => alert('clicked!'),
  },
}

/**
 * Get latest user info
 */
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
    return axios.get(`${URL_USER}/${user.id}?populate=all`)
   .then((resp) => {
     const data = resp.data
     localStore.set('user', data)
     dispatch(getUserSuccess(data))
   })
   .catch((err) => {
     dispatch(getUserFailure(err))
   })
  }

/**
 * Signup
 */
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
    const { username, email, firstYear, deptId, password } = creds
    return axios.post(`${URL_SIGNUP}`, {
      username,
      email,
      firstYear,
      deptId,
      password,
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
 * Login
 */
export const requestLogin = (creds, isOauth) => ({
  type: LOGIN_REQUEST,
  creds,
  isOauth,
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

export const loginUserOauth = popup =>
  (dispatch) => {
    dispatch(requestLogin(null, true))
    const handle = window.setInterval(() => {
      if (!popup || popup.closed) {
        window.clearInterval(handle)
        if (!localStore.get('user')) {
          dispatch(loginError())
        }
      }
      let creds = {}
      // console.log('user', getCookie('user'))
      try {
        const queryParams = getAllParams(popup.location)
      //  console.log('queryParams', queryParams)
        creds = {
          token: queryParams.token,
          user: getCookie('user'),
        }
      //  console.log('creds', creds)
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
        // deleteAllCookies()
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

/**
 * Upload Avatar
 */

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

const dataURItoBlob = (dataURI) => {
    // convert base64/URLEncoded data component to raw binary data held in a string
  let byteString
  if (dataURI.split(',')[0].indexOf('base64') >= 0) { byteString = atob(dataURI.split(',')[1]) } else { byteString = unescape(dataURI.split(',')[1]) }

    // separate out the mime component
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

    // write the bytes of the string to a typed array
  const ia = new Uint8Array(byteString.length)
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }

  return new Blob([ia], { type: mimeString })
}


export const uploadAvatar = dataURL =>
  (dispatch) => {
    const file = dataURItoBlob(dataURL)
    if ((file.size - (1024 * 1024 * 5)) > 0) {
      dispatch(error(Messages.uploadAvatarError))
      return
    }

    const formData = new FormData()
    formData.append('avatar', file, 'avatar')
    dispatch(uploadAvatarRequest())
    return axios.post(
      '/user/avatar',
      formData,
    ).then((updatedUser) => {
      localStore.set('user', updatedUser.data)
      dispatch(info(Messages.uploadAvatarSuccess))
      dispatch(uploadAvatarSuccess(updatedUser.data))
      dispatch(closeEditAvatarModal())
    })
   .catch((err) => {
     dispatch(uploadAvatarFailure(err))
   })
  }
