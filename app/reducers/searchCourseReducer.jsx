import {
  RESET_COMPONENT, SELECT_OPTION, SET_DISPLAY_VALUE,
  FETCH_OPTIONS_ATTEMPT, FETCH_OPTIONS_SUCCESS, FETCH_OPTIONS_ERROR,
} from '../constants/SearchCourseActionTypes'

export default (state = {
  isFetching: false,
  optionSelected: {},
  valueDisplayed: '',
  options: [],
}, action) => {
  switch (action.type) {
    case FETCH_OPTIONS_ATTEMPT:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case FETCH_OPTIONS_SUCCESS: {
      const courses = action.resp.data.Courses
      const options = courses.map(course => ({
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
        valueDisplayed: action.option.title,
      })
    case SET_DISPLAY_VALUE:
      return Object.assign({}, state, {
        valueDisplayed: action.value,
      })
    case RESET_COMPONENT:
      return Object.assign({}, state, {
        isFetching: false,
        optionSelected: null,
        valueDisplayed: '',
        options: [],
      })
    default:
      return state
  }
}