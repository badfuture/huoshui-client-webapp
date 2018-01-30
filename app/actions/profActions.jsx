/**
 * fetech details of a single Prof
 */

import axios from 'axios'
import localStore from 'store'
import {
  SWITCH_VIEW,
  FETCH_ATTEMPT, FETCH_SUCCESS, FETCH_ERROR,
  LIKE_PROF_ATTEMPT, LIKE_PROF_SUCCESS, LIKE_PROF_ERROR,
  UNLIKE_PROF_ATTEMPT, UNLIKE_PROF_SUCCESS, UNLIKE_PROF_ERROR,
} from '../constants/ProfActionTypes'
import { URL_PROF, URL_USER } from '../constants/ApiEndpoints'
import * as modalActions from '../actions/modalActions'

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
  type: LIKE_PROF_ATTEMPT,
})
export const likeProfSuccess = resp => ({
  type: LIKE_PROF_SUCCESS,
  resp,
})
export const likeProfError = resp => ({
  type: LIKE_PROF_ERROR,
  resp,
})

export const likeProf = profId =>
  (dispatch) => {
    const user = localStore.get('user')
    if (!user) {
      return dispatch(modalActions.openPromptSignupModal())
    }
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
  type: UNLIKE_PROF_ATTEMPT,
})
export const unlikeProfSuccess = resp => ({
  type: UNLIKE_PROF_SUCCESS,
  resp,
})
export const unlikeProfError = resp => ({
  type: UNLIKE_PROF_ERROR,
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
