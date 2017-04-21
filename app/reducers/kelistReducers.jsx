import * as types from '../constants/KelistActionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case types.FETCH_KELISTS_SUCCESS:
      return action.kelists
    default:
      return state
  }
}
