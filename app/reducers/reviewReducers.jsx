import * as types from '../constants/ReviewActionTypes'

const defaultState = {
  isFetching: true,
  data: [],
}

// handling many reviews
export const reviewsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.FETCH_REVIEWS_ATTEMPT:
      return {
        isFetching: action.status,
        data: state.data,
      }
    case types.FETCH_REVIEWS_SUCCESS:
      return {
        isFetching: state.isFetching,
        data: action.resp.data,
      }
    case types.FETCH_REVIEWS_ERROR:
      return state
    default:
      return state
  }
}

// hanlding a single review
export const reviewReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.FETCH_REVIEW_ATTEMPT:
      return {
        isFetching: true,
        data: state.data,
      }
    case types.FETCH_REVIEW_BY_ID_SUCCESS:
      return {
        isFetching: false,
        data: action.resp.data,
      }
    case types.FETCH_REVIEW_BY_ID_ERROR:
      return state
    default:
      return state
  }
}
