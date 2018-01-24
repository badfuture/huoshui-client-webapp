import { combineReducers } from 'redux'
import authReducers from './authReducers'
import { reviewsReducer, hotReviewsReducer, newReviewsReducer, reviewReducer } from './reviewReducers'
import addReviewReducer from './addReviewReducer'
import kelistReducers from './kelistReducers'
import modalReducers from './modalReducers'
import menuReducers from './menuReducers'
import rankDetailListReducer from './rankDetailListReducer'
import deptDetailListReducer from './deptDetailListReducer'
import feedbackReducer from './feedbackReducers'
import { courseReducer, hotCoursesReducer } from './courseReducer'
import profReducer from './profReducer'
import statReducer from './statReducer'
import searchCourseReducer from './searchCourseReducer'
import searchGlobalReducer from './searchGlobalReducer'
import { reducer as notifications } from 'react-notification-system-redux'


export default combineReducers({
  notifications,
  auth: authReducers,
  kelists: kelistReducers,
  reviews: reviewsReducer,
  hotReviews: hotReviewsReducer,
  newReviews: newReviewsReducer,
  review: reviewReducer,
  addReview: addReviewReducer,
  course: courseReducer,
  hotCourses: hotCoursesReducer,
  prof: profReducer,
  stat: statReducer,
  modals: modalReducers,
  menu: menuReducers,
  rankDetailList: rankDetailListReducer,
  deptDetailList: deptDetailListReducer,
  feedback: feedbackReducer,
  searchCourse: searchCourseReducer,
  searchGlobal: searchGlobalReducer,
})
