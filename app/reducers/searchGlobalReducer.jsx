import {
  RESET_COMPONENT, SELECT_OPTION, SET_DISPLAY_VALUE,
  FETCH_OPTIONS_ATTEMPT, FETCH_OPTIONS_SUCCESS, FETCH_OPTIONS_ERROR,
} from '../constants/SearchGlobalActionTypes'

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
      const options = {}

      // fill in course options
      let courses = action.resp.data.Courses
      if (courses.length > 0) {
        courses = courses.slice(0, 7)
        const courseResults = courses.map(course => ({
          key: course.id,
          dbID: course.id,
          type: 'course',
          title: course.name,
          description: course.Prof.name,
        }))
        options.course = {
          name: '课程',
          results: courseResults,
        }
      }
      // fill in prof options
      let profs = action.resp.data.Profs
      if (profs && profs.length > 0) {
        profs = profs.slice(0, 3)
        options.prof = {
          name: '教授',
          results: profs.map(prof => ({
            key: prof.id,
            dbID: prof.id,
            type: 'prof',
            title: prof.name,
            description: (prof.Depts[0] && prof.School) ?
              `${prof.Depts[0].shortname}, ${prof.School.name}`
              : '未知',
          })),
        }
      }
      console.log('options', options)

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
