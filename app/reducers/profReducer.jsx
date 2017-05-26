import {
  SWITCH_VIEW, FETCH_ATTEMPT, FETCH_SUCCESS, FETCH_ERROR,
} from '../constants/ProfActionTypes'
import {
  INFO,
} from '../constants/MenuProfStates'

export default (state = {
  isFetching: false,
  currentView: INFO,
  data: {},
}, action) => {
  switch (action.type) {
    case SWITCH_VIEW:
      return Object.assign({}, state, {
        currentView: action.view,
      })
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
