/**
 * fetech details of a single Prof
 */

import axios from 'axios'
import {
  SWITCH_VIEW, FETCH_ATTEMPT, FETCH_SUCCESS, FETCH_ERROR,
} from '../constants/ProfActionTypes'
import { URL_PROF } from '../constants/ApiEndpoints'

export const switchView = view => ({
  type: SWITCH_VIEW,
  view,
})

export const fetchAttempt = () => ({
  type: FETCH_ATTEMPT,
})

export const fetchSuccess = resp => ({
  type: FETCH_SUCCESS,
  resp,
})

export const fetchError = resp => ({
  type: FETCH_ERROR,
  resp,
})

export const fetchProfById = profId =>
  (dispatch) => {
    dispatch(fetchAttempt())
    return axios.get(`${URL_PROF}/${profId}?populate=all`)
    .then((res) => {
      dispatch(fetchSuccess(res))
    })
    .catch((err) => {
      dispatch(fetchError(err))
      throw (err)
    })
  }
