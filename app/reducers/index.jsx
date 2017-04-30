import { combineReducers } from 'redux'
import authReducers from './authReducers'
import { reviewsReducer, reviewReducer } from './reviewReducers'
import kelistReducers from './kelistReducers'
import modalReducers from './modalReducers'
import menuReducers from './menuReducers'
import rankDetailListReducer from './rankDetailListReducer'

export default combineReducers({
  auth: authReducers,
  kelists: kelistReducers,
  reviews: reviewsReducer,
  review: reviewReducer,
  modals: modalReducers,
  menu: menuReducers,
  rankDetailList: rankDetailListReducer,
})
