/**
 * fetech global stats
 */

import axios from 'axios'
import {
  FETCH_ATTEMPT, FETCH_SUCCESS, FETCH_ERROR,
} from '../constants/StatActionTypes'
import { URL_STAT } from '../constants/ApiEndpoints'

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

export const fetchStat = () =>
  (dispatch) => {
    dispatch(fetchAttempt())
    return axios.get(`${URL_STAT}`)
    .then((res) => {
      dispatch(fetchSuccess(res))
    })
    .catch((err) => {
      dispatch(fetchError(err))
      throw (err)
    })
  }
