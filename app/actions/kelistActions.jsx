import Axios from 'axios'
import * as types from '../constants/KelistActionTypes'

const apiUrl = 'https://api.huoshui.tk/reviews'
export const fetchKelistsSuccess = kelists => ({
  type: types.FETCH_KELISTS_SUCCESS,
  kelists,
})
export const fetchKelists = () =>
  // Returns a dispatcher function
  // that dispatches an action at a later time
   dispatch =>
    // Returns a promise
     Axios.get(apiUrl)
      .then((response) => {
        dispatch(fetchKelistsSuccess(response))
      })
      .catch((error) => {
        throw (error)
      })

export const fetchMyKelists = () =>
  // Returns a dispatcher function
  // that dispatches an action at a later time
   dispatch =>
    // Returns a promise
     Axios.get(apiUrl)
      .then((response) => {
        dispatch(fetchKelistsSuccess(response))
      })
      .catch((error) => {
        throw (error)
      })
