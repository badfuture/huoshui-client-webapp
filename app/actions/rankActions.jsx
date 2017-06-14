import axios from 'axios'
import {
  FETCH_RANK_LIST_ATTEMPT, FETCH_RANK_LIST_SUCCESS, FETCH_RANK_LIST_ERROR, SWITCH_VIEW,
} from '../constants/RankActionTypes'
import { URL_COURSE } from '../constants/ApiEndpoints'


/**
 * get API URL
 */
const getAPIParams = ({ limit = 50, skip = 0 }) => {
  const res = {
    params: {
      populate: '[Prof,School,Depts,Stat]',
      paginate: true,
      sort: 'scoreOverall DESC',
      limit,
      skip,
    },
  }
  return res
}

/**
 * fetech all reviews
 */
export const fetchRankListAttempt = () => ({
  type: FETCH_RANK_LIST_ATTEMPT,
})

export const fetchRankListSuccess = resp => ({
  type: FETCH_RANK_LIST_SUCCESS,
  resp,
})

export const fetchRankListError = err => ({
  type: FETCH_RANK_LIST_ERROR,
  error: err,
})

export const switchView = (view, meta) => ({
  type: SWITCH_VIEW,
  view,
  meta,
})

export const initializeRankList = () =>
(dispatch, getState) => {
  const { currentView } = getState().reviews

  dispatch(fetchRankListAttempt())
  return (
    axios
      .get(URL_COURSE, getAPIParams({
        currentView,
      }))
      .then((resp) => {
        dispatch(fetchRankListSuccess(resp))
      })
      .catch((err) => {
        dispatch(fetchRankListError(err))
        throw (err)
      })
  )
}
