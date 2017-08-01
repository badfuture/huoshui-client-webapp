import {
  FETCH_ATTEMPT, FETCH_SUCCESS, FETCH_ERROR,
} from '../constants/StatActionTypes'

export default (state = {
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
