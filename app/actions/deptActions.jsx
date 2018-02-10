import axios from 'axios'
import {
  FETCH_LIST_ATTEMPT, FETCH_LIST_SUCCESS, FETCH_LIST_ERROR, ALL_FETCHED, RESET,
} from '../constants/DeptActionTypes'
import { URL_COURSE } from '../constants/ApiEndpoints'


/**
 * get API URL
 */
const getAPIParams = ({ skip = 0, dept = '' }) => {
  const res = {
    params: {
      populate: '[Prof,School,Depts,Stat]',
      '$Depts.shortname$': '数学',
      sort: 'scoreHot DESC',
      limit: 50,
      skip,
    },
  }
  if (dept) {
    res.params['$Depts.shortname$'] = dept
  }
  return res
}

export const fetchDeptListAttempt = () => ({
  type: FETCH_LIST_ATTEMPT,
})

export const fetchDeptListSuccess = resp => ({
  type: FETCH_LIST_SUCCESS,
  resp,
})

export const fetchDeptListError = err => ({
  type: FETCH_LIST_ERROR,
  error: err,
})

export const fetchComplete = () => ({
  type: ALL_FETCHED,
})

export const resetData = () => ({
  type: RESET,
})

export const loadDeptList = ({ skip, dept }) =>
(dispatch) => {
  dispatch(fetchDeptListAttempt())
  return (
    axios
      .get(URL_COURSE, getAPIParams({
        skip,
        dept,
      }))
      .then((resp) => {
        dispatch(fetchDeptListSuccess(resp))
        if (resp.data.length === 0) {
          dispatch(fetchComplete())
        }
      })
      .catch((err) => {
        dispatch(fetchDeptListError(err))
        throw (err)
      })
  )
}
