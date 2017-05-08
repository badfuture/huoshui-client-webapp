import localStore from 'store'
import {
  SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_REQUEST, LOGOUT_SUCCESS,
 } from '../constants/AuthActionTypes'


export default (state = {
  isFetching: false,
  isAuthenticated: !!localStore.get('token'), // TODO: check expiry as well
  token: localStore.get('token') || '',
  user: localStore.get('user') || null,
  errorMessage: '',
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
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        token: action.token,
        user: action.user,
        errorMessage: '',
      })
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
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        token: action.token,
        user: action.user,
        errorMessage: '',
      })
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
    default:
      return state
  }
}
