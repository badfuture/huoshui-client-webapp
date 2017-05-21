import axios from 'axios'
import { URL_FEEDBACK } from '../constants/ApiEndpoints'
import {
  SUBMIT_REQUEST, SUBMIT_SUCCESS, SUBMIT_FAILURE,
} from '../constants/FeedbackActionTypes'

export const requestSubmit = () => ({
  type: SUBMIT_REQUEST,
})

export const receiveSubmit = () => ({
  type: SUBMIT_SUCCESS,
})

export const submitFailure = message => ({
  type: SUBMIT_FAILURE,
  message,
})

export const submitFeedback = (feedback) => {
  console.log('submitFeedback')
  const { name, contact, content } = feedback
  return (dispatch, getState) => {
    const { isAuthenticated, user } = getState().auth
    const userId = (user && isAuthenticated) ? user.id : null
    dispatch(requestSubmit())
    return axios.post(`${URL_FEEDBACK}`, {
      name,
      contact,
      content,
      userId,
    })
   .then((res) => {
     dispatch(receiveSubmit(res))
   })
   .catch((err) => {
     dispatch(submitFailure(err))
   })
  }
}
