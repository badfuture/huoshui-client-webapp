import {
  FETCH_LIST_ATTEMPT, FETCH_LIST_SUCCESS, FETCH_LIST_ERROR, ALL_FETCHED, RESET,
} from '../constants/DeptActionTypes'

export default (state = {
  isFetching: false,
  data: [],
  hasMore: true,
}, action) => {
  switch (action.type) {
    case RESET:
      return Object.assign({}, state, {
        isFetching: false,
        data: [],
        hasMore: true,
      })
    case ALL_FETCHED:
      return Object.assign({}, state, {
        hasMore: false,
      })
    case FETCH_LIST_ATTEMPT:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case FETCH_LIST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: state.data.concat(action.resp.data),
      })
    case FETCH_LIST_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
      })
    default:
      return state
  }
}
