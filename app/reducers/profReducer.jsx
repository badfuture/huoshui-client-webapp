import localStore from 'store'
import {
  SWITCH_VIEW, FETCH_ATTEMPT, FETCH_SUCCESS, FETCH_ERROR,
  FOLLOW_PROF_ATTEMPT, FOLLOW_PROF_SUCCESS, FOLLOW_PROF_ERROR,
  UNFOLLOW_PROF_ATTEMPT, UNFOLLOW_PROF_SUCCESS, UNFOLLOW_PROF_ERROR,
} from '../constants/ProfActionTypes'
import {
  STAT,
} from '../constants/MenuProfStates'

export default (state = {
  isFetching: false,
  currentView: STAT,
  data: {},
  isProfFollowed: false,
  followerCount: 0,
}, action) => {
  switch (action.type) {
    case SWITCH_VIEW:
      return Object.assign({}, state, {
        currentView: action.view,
      })
    case FETCH_ATTEMPT:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case FETCH_SUCCESS: {
      const profId = action.resp.data.id
      const likedProfs = localStore.get('user').LikedProfs.map(prof => (prof.id))

      let followerCount = 0
      if (action.resp.data && action.resp.data.LikedUsers) {
        followerCount = action.resp.data.LikedUsers.length
      }

      return Object.assign({}, state, {
        isFetching: false,
        data: action.resp.data,
        isProfFollowed: likedProfs.indexOf(profId) > -1,
        followerCount,
      })
    }
    case FETCH_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
      })
    case FOLLOW_PROF_ATTEMPT: {
      return Object.assign({}, state, {
        followerCount: state.followerCount + 1,
        isProfFollowed: true,
      })
    }
    case FOLLOW_PROF_SUCCESS:
      return Object.assign({}, state, {
        isProfFollowed: true,
      })
    case FOLLOW_PROF_ERROR:
      return Object.assign({}, state, {})
    case UNFOLLOW_PROF_ATTEMPT: {
      return Object.assign({}, state, {
        followerCount: state.followerCount - 1,
        isProfFollowed: false,
      })
    }
    case UNFOLLOW_PROF_SUCCESS:
      return Object.assign({}, state, {
        isProfFollowed: false,
      })
    case UNFOLLOW_PROF_ERROR:
      return Object.assign({}, state, {})
    default:
      return state
  }
}
