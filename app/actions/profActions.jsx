/**
 * fetech details of a single Prof
 */

import axios from 'axios'
import localStore from 'store'
import {
  SWITCH_VIEW, FETCH_ATTEMPT, FETCH_SUCCESS, FETCH_ERROR,
  FOLLOW_PROF_ATTEMPT, FOLLOW_PROF_SUCCESS, FOLLOW_PROF_ERROR,
  UNFOLLOW_PROF_ATTEMPT, UNFOLLOW_PROF_SUCCESS, UNFOLLOW_PROF_ERROR,
} from '../constants/ProfActionTypes'
import { URL_PROF, URL_USER } from '../constants/ApiEndpoints'

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

export const likeProfAttempt = () => ({
  type: FOLLOW_PROF_ATTEMPT,
})
export const likeProfSuccess = resp => ({
  type: FOLLOW_PROF_SUCCESS,
  resp,
})
export const likeProfError = resp => ({
  type: FOLLOW_PROF_ERROR,
  resp,
})

export const likeProf = profId =>
  (dispatch) => {
    const user = localStore.get('user')
    dispatch(likeProfAttempt())
    return axios.put(`${URL_USER}/${user.id}/liked_profs`, {
      profId,
    })
    .then((res) => {
      dispatch(likeProfSuccess(res))
    })
    .catch((err) => {
      dispatch(likeProfError(err))
    })
  }

export const unlikeProfAttempt = () => ({
  type: UNFOLLOW_PROF_ATTEMPT,
})
export const unlikeProfSuccess = resp => ({
  type: UNFOLLOW_PROF_SUCCESS,
  resp,
})
export const unlikeProfError = resp => ({
  type: UNFOLLOW_PROF_ERROR,
  resp,
})

export const unlikeProf = profId =>
  (dispatch) => {
    const user = localStore.get('user')
    dispatch(unlikeProfAttempt())
    return axios.delete(`${URL_USER}/${user.id}/liked_profs/${profId}`, {
      profId,
    })
    .then((res) => {
      dispatch(unlikeProfSuccess(res))
    })
    .catch((err) => {
      dispatch(unlikeProfError(err))
    })
  }
