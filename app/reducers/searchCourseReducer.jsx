import {
  RESET_COMPONENT, SELECT_OPTION, SET_DISPLAY_VALUE, SET_IME_VALUE,
  FETCH_OPTIONS_ATTEMPT, FETCH_OPTIONS_SUCCESS, FETCH_OPTIONS_ERROR,
  SET_COURSE_ID,
} from '../constants/SearchCourseActionTypes'

import {
  OPEN_ADD_REVIEW_MODAL, CLOSE_ADD_REVIEW_MODAL,
} from '../constants/ModalActionTypes'

export default (state = {
  isFetching: false,
  optionSelected: {},
  valueDisplayed: '',
  valueTempIME: '',
  courseId: null,
  visible: true,
  options: [],
}, action) => {
  switch (action.type) {
    case OPEN_ADD_REVIEW_MODAL:
      return Object.assign({}, state, {
        visible: !(action.courseId),
      })
    case CLOSE_ADD_REVIEW_MODAL:
      return Object.assign({}, state, {
        courseId: null,
      })
    case FETCH_OPTIONS_ATTEMPT:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case FETCH_OPTIONS_SUCCESS: {
      const courses = action.resp.data.Courses
      const options = courses.map(course => ({
        courseId: course.id,
        title: course.name,
        description: course.Prof.name,
      }))
      return Object.assign({}, state, {
        isFetching: false,
        options,
      })
    }
    case FETCH_OPTIONS_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
      })
    case SELECT_OPTION:
      return Object.assign({}, state, {
        optionSelected: action.option,
        valueDisplayed: `${action.option.result.title} by ${action.option.result.description}`,
      })
    case SET_DISPLAY_VALUE:
      return Object.assign({}, state, {
        valueDisplayed: action.value,
      })
    case SET_COURSE_ID:
      return Object.assign({}, state, {
        courseId: action.value,
      })
    case SET_IME_VALUE:
      return Object.assign({}, state, {
        valueTempIME: action.value,
      })
    case RESET_COMPONENT:
      return Object.assign({}, state, {
        isFetching: false,
        optionSelected: null,
        valueDisplayed: '',
        valueTempIME: '',
        options: [],
      })
    default:
      return state
  }
}
