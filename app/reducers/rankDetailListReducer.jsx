import {
  FETCH_RANK_LIST_ATTEMPT, FETCH_RANK_LIST_SUCCESS, FETCH_RANK_LIST_ERROR,
  SWITCH_VIEW,
} from '../constants/RankActionTypes'

export default (state = {
  currentView: '',
  meta: {
    header: '',
  },
  isFetching: false,
  data: [],
  itemCount: 0,
}, action) => {
  switch (action.type) {
    case SWITCH_VIEW: {
      return Object.assign({}, state, {
        currentView: action.view,
        meta: action.meta,
      })
    }
    case FETCH_RANK_LIST_ATTEMPT:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case FETCH_RANK_LIST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.resp.data.rows,
        itemCount: action.resp.data.count,
      })
    case FETCH_RANK_LIST_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
      })
    default:
      return state
  }
}
