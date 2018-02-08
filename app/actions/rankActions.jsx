import axios from 'axios'
import {
  FETCH_RANK_LIST_ATTEMPT, FETCH_RANK_LIST_SUCCESS, FETCH_RANK_LIST_ERROR, SWITCH_VIEW,
} from '../constants/RankActionTypes'
import { URL_COURSE, URL_PROF } from '../constants/ApiEndpoints'


/**
 * get API URL
 */
const getAPIParams = ({ limit = 50, skip = 0, sort, populate }) => {
  const res = {
    params: {
      paginate: true,
      populate,
      sort,
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

export const initializeRankList = meta =>
(dispatch, getState) => {
  const { currentView } = getState().reviews
  const { type, sort } = meta
  const URL = (type === 'course') ? URL_COURSE : URL_PROF
  const populate = (type === 'course') ? '[Prof,School,Depts,Stat]' : '[Position,School,Depts,Stat]'

  dispatch(fetchRankListAttempt())
  return (
    axios
      .get(URL, getAPIParams({
        currentView,
        sort,
        populate,
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
