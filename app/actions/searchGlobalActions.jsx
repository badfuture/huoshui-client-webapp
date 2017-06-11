import axios from 'axios'
import {
  RESET_COMPONENT, SELECT_OPTION, SET_DISPLAY_VALUE,
  FETCH_OPTIONS_ATTEMPT, FETCH_OPTIONS_SUCCESS, FETCH_OPTIONS_ERROR,
} from '../constants/SearchGlobalActionTypes'
import { URL_SEARCH } from '../constants/ApiEndpoints'

export const fetchAttempt = () => ({
  type: FETCH_OPTIONS_ATTEMPT,
})

export const fetchSuccess = resp => ({
  type: FETCH_OPTIONS_SUCCESS,
  resp,
})

export const fetchError = resp => ({
  type: FETCH_OPTIONS_ERROR,
  resp,
})

export const resetComponent = () => ({
  type: RESET_COMPONENT,
})

export const setDisplayValue = value => ({
  type: SET_DISPLAY_VALUE,
  value,
})

export const handleOptionSelect = (e, option) => ({
  type: SELECT_OPTION,
  option,
})

export const handleSearchChange = (e, value) =>
  (dispatch) => {
    dispatch(setDisplayValue(value))
    if (value.length < 1) return dispatch(resetComponent())
    dispatch(fetchAttempt())
    return axios.get(`${URL_SEARCH}?query=${value}&scope=[course,prof]`)
    .then((res) => {
      dispatch(fetchSuccess(res))
    })
    .catch((err) => {
      dispatch(fetchError(err))
      throw (err)
    })
  }
