import { combineReducers } from 'redux'
import authReducers from './authReducers'
import { reviewsReducer, reviewReducer } from './reviewReducers'
import addReviewReducer from './addReviewReducer'
import kelistReducers from './kelistReducers'
import modalReducers from './modalReducers'
import menuReducers from './menuReducers'
import rankDetailListReducer from './rankDetailListReducer'
import feedbackReducer from './feedbackReducers'
import courseReducer from './courseReducer'
import profReducer from './profReducer'
import searchCourseReducer from './searchCourseReducer'

export default combineReducers({
  auth: authReducers,
  kelists: kelistReducers,
  reviews: reviewsReducer,
  review: reviewReducer,
  addReview: addReviewReducer,
  course: courseReducer,
  prof: profReducer,
  modals: modalReducers,
  menu: menuReducers,
  rankDetailList: rankDetailListReducer,
  feedback: feedbackReducer,
  searchCourse: searchCourseReducer,
})
