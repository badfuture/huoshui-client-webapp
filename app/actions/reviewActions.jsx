import axios from 'axios'
import {
  FETCH_REVIEWS_ATTEMPT, FETCH_REVIEWS_SUCCESS, FETCH_REVIEWS_ERROR,
  FETCH_REVIEW_BY_ID_ATTEMPT, FETCH_REVIEW_BY_ID_SUCCESS, FETCH_REVIEW_BY_ID_ERROR,
  FIRST_PAGE, NEXT_PAGE, PREV_PAGE, SWITCH_VIEW,
} from '../constants/ReviewActionTypes'
import {
  NEW_REVIEW, HOT_REVIEW,
} from '../constants/StateEnum'
import { URL_REVIEW } from '../constants/ApiEndpoints'


/**
 * get API URL
 */
const getAPIParams = ({ currentView, limit, skip = 0 }) => {
  const res = {
    params: {
      populate: 'Author,Prof,Course',
      paginate: true,
      sort: 'createdAt DESC',
      limit,
      skip,
    },
  }

  const params = res.params
  if (currentView === NEW_REVIEW) {
    params.sort = 'createdAt DESC'
  } else if (currentView === HOT_REVIEW) {
    params.sort = 'upVote DESC'
  } else {
    params.sort = 'createdAt DESC'
  }

  return res
}

/**
 * fetech all reviews
 */
export const fetchReviewsAttempt = () => ({
  type: FETCH_REVIEWS_ATTEMPT,
})

export const fetchReviewsSuccess = resp => ({
  type: FETCH_REVIEWS_SUCCESS,
  resp,
})

export const fetchReviewsError = err => ({
  type: FETCH_REVIEWS_ERROR,
  error: err,
})

/**
* pagination for multiple reviews
* {{api_url}}/reviews?paginate=true&limit=3&skip=3
*/
export const switchView = view => ({
  type: SWITCH_VIEW,
  view,
})

export const firtPage = () => ({
  type: FIRST_PAGE,
})

export const nextPage = () => ({
  type: NEXT_PAGE,
})

export const prevPage = () => ({
  type: PREV_PAGE,
})

export const initializePage = () =>
(dispatch, getState) => {
  const state = getState().reviews
  const { currentView, pageSize, newCurrPage, hotCurrPage } = state
  let pageNum = 1
  if (currentView === NEW_REVIEW) {
    pageNum = newCurrPage
  } else {
    pageNum = hotCurrPage
  }
  const skip = pageSize * (pageNum - 1)

  dispatch(fetchReviewsAttempt(true))
  return (
    axios
      .get(URL_REVIEW, getAPIParams({
        currentView,
        limit: pageSize,
        skip,
      }))
      .then((resp) => {
        dispatch(fetchReviewsSuccess(resp))
      })
      .catch((err) => {
        dispatch(fetchReviewsError(err))
        throw (err)
      })
  )
}


export const goNextPage = () =>
(dispatch, getState) => {
  const { currentView, pageSize, newCurrPage, hotCurrPage, totalPage } = getState().reviews
  const currPage = (currentView === NEW_REVIEW) ? newCurrPage : hotCurrPage

  // return if reach end of data
  if (totalPage !== 0 && currPage === totalPage) {
    return false
  }

  const skip = pageSize * currPage
  dispatch(fetchReviewsAttempt(true))
  return (
    axios
      .get(URL_REVIEW, getAPIParams({
        currentView,
        limit: pageSize,
        skip,
      }))
      .then((resp) => {
        dispatch(fetchReviewsSuccess(resp))
        dispatch(nextPage())
      })
      .catch((err) => {
        dispatch(fetchReviewsError(err))
        throw (err)
      })
  )
}

export const goPrevPage = () =>
(dispatch, getState) => {
  const { currentView, pageSize, newCurrPage, hotCurrPage } = getState().reviews
  const currPage = (currentView === NEW_REVIEW) ? newCurrPage : hotCurrPage

  // return if on first page
  if (currPage <= 1) {
    return false
  }

  const skip = pageSize * (currPage - 2)

  dispatch(fetchReviewsAttempt(true))
  return (
    axios
      .get(URL_REVIEW, getAPIParams({
        currentView,
        limit: pageSize,
        skip,
      }))
      .then((resp) => {
        dispatch(fetchReviewsSuccess(resp))
        dispatch(prevPage())
      })
      .catch((err) => {
        dispatch(fetchReviewsError(err))
        throw (err)
      })
  )
}

/**
 * fetech details of a single review
 */
export const fetchReviewByIdAttempt = () => ({
  type: FETCH_REVIEW_BY_ID_ATTEMPT,
})

export const fetchReviewByIdSuccess = resp => ({
  type: FETCH_REVIEW_BY_ID_SUCCESS,
  resp,
})
export const fetchReviewByIdError = resp => ({
  type: FETCH_REVIEW_BY_ID_ERROR,
  resp,
})
export const fetchReviewById = reviewId =>
  (dispatch) => {
    dispatch(fetchReviewByIdAttempt())
    return (
      axios.get(`${URL_REVIEW}/${reviewId}?populate=[Course,Author,Prof,Comments]`)
       .then((resp) => {
         dispatch(fetchReviewByIdSuccess(resp))
       })
       .catch((error) => {
         dispatch(fetchReviewByIdError(error))
         throw (error)
       })
    )
  }
