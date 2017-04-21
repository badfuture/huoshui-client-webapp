import Axios from 'axios'
import {
  FETCH_REVIEWS_ATTEMPT, FETCH_REVIEWS_SUCCESS, FETCH_REVIEWS_ERROR,
  FETCH_REVIEW_ATTEMPT, FETCH_REVIEW_BY_ID_SUCCESS,
} from '../constants/ReviewActionTypes'
import { URL_REVIEW } from '../constants/ApiEndpoints'


/**
 * fetech all reviews
 */

export const fetchReviewsAttempt = status => ({
  type: FETCH_REVIEWS_ATTEMPT,
  status,
})

export const fetchReviewsSuccess = resp => ({
  type: FETCH_REVIEWS_SUCCESS,
  resp,
})

export const fetchReviewsError = err => ({
  type: FETCH_REVIEWS_ERROR,
  error: err,
})

export const fetchReviews = () =>
  (dispatch) => {
    dispatch(fetchReviewsAttempt(true))
    return (
      Axios.get(`${URL_REVIEW}?populate=all`)
       .then((resp) => {
         dispatch(fetchReviewsAttempt(false))
         dispatch(fetchReviewsSuccess(resp))
       })
       .catch((err) => {
         dispatch(fetchReviewsAttempt(false))
         dispatch(fetchReviewsError(err))
         throw (err)
       })
    )
  }

/**
 * fetech details of a review
 */
export const fetchReviewAttempt = status => ({
  type: FETCH_REVIEW_ATTEMPT,
  status,
})

export const fetchReviewByIdSuccess = resp => ({
  type: FETCH_REVIEW_BY_ID_SUCCESS,
  resp,
})
export const fetchReviewById = reviewId =>
  dispatch => Axios.get(`${URL_REVIEW}/${reviewId}?populate=[Course,Author,Prof]`)
   .then((resp) => {
     dispatch(fetchReviewByIdSuccess(resp))
   })
   .catch((error) => {
     throw (error)
   })
