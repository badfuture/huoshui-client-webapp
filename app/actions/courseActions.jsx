/**
 * fetech details of a single course
 */

import axios from 'axios'
import {
  FETCH_ATTEMPT, FETCH_SUCCESS, FETCH_ERROR,
} from '../constants/CourseActionTypes'
import { URL_COURSE } from '../constants/ApiEndpoints'


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

export const fetchCourseById = courseId =>
  (dispatch) => {
    dispatch(fetchAttempt())
    return axios.get(`${URL_COURSE}/${courseId}?populate=all`)
    .then((res) => {
      dispatch(fetchSuccess(res))
    })
    .catch((err) => {
      dispatch(fetchError(err))
      throw (err)
    })
  }
