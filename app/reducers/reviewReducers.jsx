import {
  FETCH_REVIEWS_ATTEMPT, FETCH_REVIEWS_SUCCESS, FETCH_REVIEWS_ERROR,
  FETCH_HOT_REVIEWS_ATTEMPT, FETCH_HOT_REVIEWS_SUCCESS, FETCH_HOT_REVIEWS_ERROR,
  FETCH_NEW_REVIEWS_ATTEMPT, FETCH_NEW_REVIEWS_SUCCESS, FETCH_NEW_REVIEWS_ERROR,
  FETCH_REVIEW_BY_ID_ATTEMPT, FETCH_REVIEW_BY_ID_SUCCESS, FETCH_REVIEW_BY_ID_ERROR,
  FIRST_PAGE, NEXT_PAGE, PREV_PAGE, SWITCH_VIEW,
} from '../constants/ReviewActionTypes'
import {
  NEW_REVIEW,
} from '../constants/StateEnum'

// handling many reviews
export const reviewsReducer = (state = {
  currentView: NEW_REVIEW,
  isFetching: false,
  data: [],
  itemCount: 0,
  pageSize: 10,
  totalPage: 1,
  newCurrPage: 1,
  hotCurrPage: 1,
}, action) => {
  switch (action.type) {
    case FETCH_REVIEWS_ATTEMPT:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case FETCH_REVIEWS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.resp.data.rows,
        itemCount: action.resp.data.count,
        totalPage: Math.ceil(action.resp.data.count / state.pageSize),
      })
    case FETCH_REVIEWS_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
      })
    case SWITCH_VIEW:
      return Object.assign({}, state, {
        currentView: action.view,
      })
    case FIRST_PAGE: {
      let res = {}
      if (state.currentView === NEW_REVIEW) {
        res = { newCurrPage: 1 }
      } else {
        res = { hotCurrPage: 1 }
      }
      return Object.assign({}, state, res)
    }
    case NEXT_PAGE: {
      let res = {}
      if (state.currentView === NEW_REVIEW) {
        res = { newCurrPage: Math.min(state.newCurrPage + 1, state.totalPage) }
      } else {
        res = { hotCurrPage: Math.min(state.hotCurrPage + 1, state.totalPage) }
      }
      return Object.assign({}, state, res)
    }
    case PREV_PAGE: {
      let res = {}
      if (state.currentView === NEW_REVIEW) {
        res = { newCurrPage: Math.max(state.newCurrPage - 1, 1) }
      } else {
        res = { hotCurrPage: Math.max(state.hotCurrPage - 1, 1) }
      }
      return Object.assign({}, state, res)
    }
    default:
      return state
  }
}

// handling hot reviews
export const hotReviewsReducer = (state = {
  isFetching: false,
  data: [],
}, action) => {
  switch (action.type) {
    case FETCH_HOT_REVIEWS_ATTEMPT:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case FETCH_HOT_REVIEWS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.resp.data,
      })
    case FETCH_HOT_REVIEWS_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
      })
    default:
      return state
  }
}

// handling new reviews
export const newReviewsReducer = (state = {
  isFetching: false,
  data: [],
}, action) => {
  switch (action.type) {
    case FETCH_NEW_REVIEWS_ATTEMPT:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case FETCH_NEW_REVIEWS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.resp.data,
      })
    case FETCH_NEW_REVIEWS_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
      })
    default:
      return state
  }
}

// hanlding a single review
export const reviewReducer = (state = {
  isFetching: false,
  data: {
    Prof: { name: '' },
    Course: { name: '' },
    Author: { username: '' },
  },
}, action) => {
  switch (action.type) {
    case FETCH_REVIEW_BY_ID_ATTEMPT:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case FETCH_REVIEW_BY_ID_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.resp.data,
      })
    case FETCH_REVIEW_BY_ID_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
      })
    default:
      return state
  }
}
