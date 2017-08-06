/**
 * fetech details of a single course
 */

import axios from 'axios'
import {
  FETCH_ATTEMPT, FETCH_SUCCESS, FETCH_ERROR,
  FETCH_HOT_COURSES_ATTEMPT, FETCH_HOT_COURSES_SUCCESS, FETCH_HOT_COURSES_ERROR,
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

export const fetchHotCoursesAttempt = () => ({
  type: FETCH_HOT_COURSES_ATTEMPT,
})

export const fetchHotCoursesSuccess = resp => ({
  type: FETCH_HOT_COURSES_SUCCESS,
  resp,
})

export const fetchHotCoursesError = resp => ({
  type: FETCH_HOT_COURSES_ERROR,
  resp,
})

export const fetchHotCourses = () =>
  (dispatch) => {
    dispatch(fetchHotCoursesAttempt())
    return axios.get(URL_COURSE, {
      params: {
        populate: 'all',
        sort: 'reviewCount DESC',
        limit: 10,
        skip: 0,
      },
    })
    .then((res) => {
      dispatch(fetchHotCoursesSuccess(res))
    })
    .catch((err) => {
      dispatch(fetchHotCoursesError(err))
    })
  }
