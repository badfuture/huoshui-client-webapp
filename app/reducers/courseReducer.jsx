import store from 'store'
import {
  FETCH_ATTEMPT, FETCH_SUCCESS, FETCH_ERROR,
  LIKE_COURSE_ATTEMPT, LIKE_COURSE_SUCCESS, LIKE_COURSE_ERROR,
  UNLIKE_COURSE_ATTEMPT, UNLIKE_COURSE_SUCCESS, UNLIKE_COURSE_ERROR,
  FETCH_HOT_COURSES_ATTEMPT, FETCH_HOT_COURSES_SUCCESS, FETCH_HOT_COURSES_ERROR,
} from '../constants/CourseActionTypes'

export const courseReducer = (state = {
  isFetching: false,
  isLiked: false,
  countLiked: 0,
  data: {},
}, action) => {
  switch (action.type) {
    case FETCH_ATTEMPT:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case FETCH_SUCCESS:
      const course = action.resp.data
      const countLiked = course.LikedUsers && course.LikedUsers.length
      const thisUser = store.get('user')
      const isLiked = course.LikedUsers.filter(user => thisUser.id === user.id).length != 0

      return Object.assign({}, state, {
        isFetching: false,
        countLiked,
        isLiked,
        data: action.resp.data,
      })
    case FETCH_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
      })
    case LIKE_COURSE_ATTEMPT: {
      return Object.assign({}, state, {
        countLiked: state.countLiked + 1,
        isLiked: true,
      })
    }
    case LIKE_COURSE_SUCCESS:
      return Object.assign({}, state, {
        isLiked: true,
      })
    case LIKE_COURSE_ERROR:
      return Object.assign({}, state, {})
    case UNLIKE_COURSE_ATTEMPT: {
      return Object.assign({}, state, {
        countLiked: state.countLiked - 1,
        isLiked: false,
      })
    }
    case UNLIKE_COURSE_SUCCESS:
      return Object.assign({}, state, {
        isLiked: false,
      })
    case UNLIKE_COURSE_ERROR:
      return Object.assign({}, state, {})
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
      let isFetching = true
      if (state.data.length) {
        isFetching = false
      }
      return Object.assign({}, state, {
        isFetching,
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
