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

export const followProfAttempt = () => ({
  type: FOLLOW_PROF_ATTEMPT,
})
export const followProfSuccess = resp => ({
  type: FOLLOW_PROF_SUCCESS,
  resp,
})
export const followProfError = resp => ({
  type: FOLLOW_PROF_ERROR,
  resp,
})

export const followProf = profId =>
  (dispatch) => {
    const user = localStore.get('user')
    dispatch(followProfAttempt())
    return axios.put(`${URL_USER}/${user.id}/liked-profs`, {
      profId,
    })
    .then((res) => {
      dispatch(followProfSuccess(res))
    })
    .catch((err) => {
      dispatch(followProfError(err))
    })
  }

export const unfollowProfAttempt = () => ({
  type: UNFOLLOW_PROF_ATTEMPT,
})
export const unfollowProfSuccess = resp => ({
  type: UNFOLLOW_PROF_SUCCESS,
  resp,
})
export const unfollowProfError = resp => ({
  type: UNFOLLOW_PROF_ERROR,
  resp,
})

export const unfollowProf = profId =>
  (dispatch) => {
    const user = localStore.get('user')
    dispatch(unfollowProfAttempt())
    return axios.delete(`${URL_USER}/${user.id}/liked-profs/${profId}`, {
      profId,
    })
    .then((res) => {
      dispatch(unfollowProfSuccess(res))
    })
    .catch((err) => {
      dispatch(unfollowProfError(err))
    })
  }
