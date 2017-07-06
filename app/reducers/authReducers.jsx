import localStore from 'store'
import axios from 'axios'
import {
  SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_REQUEST, LOGOUT_SUCCESS,
  UPLOAD_AVATAR_REQUEST, UPLOAD_AVATAR_SUCCESS, UPLOAD_AVATAR_FAILURE,
 } from '../constants/AuthActionTypes'

export default (state = {
  isFetching: false,
  isAuthenticated: !!localStore.get('token'), // TODO: check expiry as well
  token: localStore.get('token') || '',
  user: localStore.get('user') || null,
  errorMessage: '',
  isAvatarUploading: false,
}, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        token: action.token,
        user: action.user,
        creds: action.creds,
      })
    case SIGNUP_SUCCESS:
      {
        axios.defaults.headers.common.Authorization = `Bearer ${action.token}`
        return Object.assign({}, state, {
          isFetching: false,
          isAuthenticated: true,
          token: action.token,
          user: action.user,
          errorMessage: '',
        })
      }
    case SIGNUP_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        token: '',
        user: null,
        errorMessage: action.message,
      })
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        token: action.token,
        user: action.user,
        creds: action.creds,
      })
    case LOGIN_SUCCESS:
      {
        axios.defaults.headers.common.Authorization = `Bearer ${action.token}`
        return Object.assign({}, state, {
          isFetching: false,
          isAuthenticated: true,
          token: action.token,
          user: action.user,
          errorMessage: '',
        })
      }
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        token: '',
        user: null,
        errorMessage: action.message,
      })
    case LOGOUT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: true,
        token: '',
        user: null,
        errorMessage: '',
      })
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        token: '',
        user: null,
        errorMessage: '',
      })
    case UPLOAD_AVATAR_REQUEST:
      return Object.assign({}, state, {
        isAvatarUploading: true,
      })
    case UPLOAD_AVATAR_SUCCESS:
      return Object.assign({}, state, {
        isAvatarUploading: false,
        user: action.updatedUser,
      })
    case UPLOAD_AVATAR_FAILURE:
      return Object.assign({}, state, {
        isAvatarUploading: false,
      })
    default:
      return state
  }
}
