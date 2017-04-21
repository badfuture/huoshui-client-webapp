import { combineReducers } from 'redux'
import userReducers from './userReducers'
import { reviewsReducer, reviewReducer } from './reviewReducers'
import kelistReducers from './kelistReducers'

export default combineReducers({
  user: userReducers,
  kelists: kelistReducers,
  reviews: reviewsReducer,
  review: reviewReducer,
})
