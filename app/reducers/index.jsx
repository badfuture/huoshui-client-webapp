import { combineReducers } from 'redux'
import authReducers from './authReducers'
import { reviewsReducer, reviewReducer } from './reviewReducers'
import addReviewReducer from './addReviewReducer'
import kelistReducers from './kelistReducers'
import modalReducers from './modalReducers'
import menuReducers from './menuReducers'
import rankDetailListReducer from './rankDetailListReducer'
import deptDetailListReducer from './deptDetailListReducer'
import feedbackReducer from './feedbackReducers'
import courseReducer from './courseReducer'
import profReducer from './profReducer'
import searchCourseReducer from './searchCourseReducer'
import searchGlobalReducer from './searchGlobalReducer'


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
  deptDetailList: deptDetailListReducer,
  feedback: feedbackReducer,
  searchCourse: searchCourseReducer,
  searchGlobal: searchGlobalReducer,
})
