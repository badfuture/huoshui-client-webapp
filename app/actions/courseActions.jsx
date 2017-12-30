/**
 * fetech details of a single course
 */

import axios from 'axios'
import localStore from 'store'
import {
  FETCH_ATTEMPT, FETCH_SUCCESS, FETCH_ERROR,
  LIKE_COURSE_ATTEMPT, LIKE_COURSE_SUCCESS, LIKE_COURSE_ERROR,
  UNLIKE_COURSE_ATTEMPT, UNLIKE_COURSE_SUCCESS, UNLIKE_COURSE_ERROR,
  FETCH_HOT_COURSES_ATTEMPT, FETCH_HOT_COURSES_SUCCESS, FETCH_HOT_COURSES_ERROR,
} from '../constants/CourseActionTypes'
import { URL_COURSE, URL_USER } from '../constants/ApiEndpoints'

// fetch info for a single course
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

// like course
export const likeCourseAttempt = () => ({
  type: LIKE_COURSE_ATTEMPT,
})
export const likeCourseSuccess = resp => ({
  type: LIKE_COURSE_SUCCESS,
  resp,
})
export const likeCourseError = resp => ({
  type: LIKE_COURSE_ERROR,
  resp,
})

export const likeCourse = courseId =>
  (dispatch) => {
    const user = localStore.get('user')
    dispatch(likeCourseAttempt())
    return axios.put(`${URL_USER}/${user.id}/liked_courses`, {
      courseId,
    })
    .then((res) => {
      dispatch(likeCourseSuccess(res))
    })
    .catch((err) => {
      dispatch(likeCourseError(err))
    })
  }

// unlike course
export const unlikeCourseAttempt = () => ({
  type: UNLIKE_COURSE_ATTEMPT,
})
export const unlikeCourseSuccess = resp => ({
  type: UNLIKE_COURSE_SUCCESS,
  resp,
})
export const unlikeCourseError = resp => ({
  type: UNLIKE_COURSE_ERROR,
  resp,
})

export const unlikeCourse = courseId =>
  (dispatch) => {
    const user = localStore.get('user')
    dispatch(unlikeCourseAttempt())
    return axios.delete(`${URL_USER}/${user.id}/liked_courses/${courseId}`, {
      courseId,
    })
    .then((res) => {
      dispatch(unlikeCourseSuccess(res))
    })
    .catch((err) => {
      dispatch(unlikeCourseError(err))
    })
  }

// fetch hot courses
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
        sort: 'scoreHot DESC',
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
