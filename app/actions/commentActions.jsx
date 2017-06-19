import axios from 'axios'
import { URL_COMMENT } from '../constants/ApiEndpoints'
import {
  SUBMIT_REQUEST, SUBMIT_SUCCESS, SUBMIT_FAILURE,
} from '../constants/FeedbackActionTypes'

import { fetchReviewById } from '../actions/reviewActions'

export const requestSubmit = () => ({
  type: SUBMIT_REQUEST,
})

export const receiveSubmit = () => ({
  type: SUBMIT_SUCCESS,
})

export const submitFailure = () => ({
  type: SUBMIT_FAILURE,
})

export const submitComment = (comment) => {
  const { commentable, commentableId, text, parentId } = comment
  console.log('submitComment')
  return (dispatch, getState) => {
    const { isAuthenticated, user } = getState().auth
    const authorId = (user && isAuthenticated) ? user.id : null
    dispatch(requestSubmit())
    return axios.post(`${URL_COMMENT}`, {
      commentable,
      commentableId,
      text,
      parentId,
      authorId,
    })
   .then((res) => {
     dispatch(fetchReviewById(commentableId))
     dispatch(receiveSubmit(res))
   })
   .catch((err) => {
     dispatch(submitFailure(err))
   })
  }
}
