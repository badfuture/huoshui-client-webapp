import {
  FETCH_ATTEMPT, FETCH_SUCCESS, FETCH_ERROR,
  FETCH_HOT_COURSES_ATTEMPT, FETCH_HOT_COURSES_SUCCESS, FETCH_HOT_COURSES_ERROR,
} from '../constants/CourseActionTypes'

export const courseReducer = (state = {
  isFetching: false,
  data: {},
}, action) => {
  switch (action.type) {
    case FETCH_ATTEMPT:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case FETCH_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.resp.data,
      })
    case FETCH_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
      })
    default:
      return state
  }
}

// handling hot courses
export const hotCoursesReducer = (state = {
  isFetching: false,
  data: [],
}, action) => {
  switch (action.type) {
    case FETCH_HOT_COURSES_ATTEMPT:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case FETCH_HOT_COURSES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.resp.data,
      })
    case FETCH_HOT_COURSES_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
      })
    default:
      return state
  }
}
