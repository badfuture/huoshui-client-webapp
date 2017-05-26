import {
  SUBMIT_REQUEST, SUBMIT_SUCCESS, SUBMIT_FAILURE,
} from '../constants/ReviewActionTypes'

export default (state = {
  isFetching: false,
  sendSuccess: false,
}, action) => {
  switch (action.type) {
    case SUBMIT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        sendSuccess: false,
      })
    case SUBMIT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        sendSuccess: true,
      })
    case SUBMIT_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        sendSuccess: false,
      })
    default:
      return state
  }
}
