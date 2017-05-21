import {
  SUBMIT_REQUEST, SUBMIT_SUCCESS, SUBMIT_FAILURE,
} from '../constants/FeedbackActionTypes'

export default (state = {
  isFetching: false,
  sendSuccess: false,
  errorMessage: '',
}, action) => {
  switch (action.type) {
    case SUBMIT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
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
