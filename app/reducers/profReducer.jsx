import localStore from 'store'
import {
  SWITCH_VIEW, FETCH_ATTEMPT, FETCH_SUCCESS, FETCH_ERROR,
  LIKE_PROF_ATTEMPT, LIKE_PROF_SUCCESS, LIKE_PROF_ERROR,
  UNLIKE_PROF_ATTEMPT, UNLIKE_PROF_SUCCESS, UNLIKE_PROF_ERROR,
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

      // determine if the prof is followed by the currently logged in user
      let isProfFollowed = false
      if (localStore.get('user') && localStore.get('user').LikedProfs) {
        const likedProfs = localStore.get('user').LikedProfs.map(prof => (prof.id))
        isProfFollowed = likedProfs.indexOf(profId) > -1
      }

      // determine how many users follow the prof
      let followerCount = 0
      if (action.resp.data && action.resp.data.LikedUsers) {
        followerCount = action.resp.data.LikedUsers.length
      }

      return Object.assign({}, state, {
        isFetching: false,
        data: action.resp.data,
        isProfFollowed,
        followerCount,
      })
    }
    case FETCH_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
      })
    case LIKE_PROF_ATTEMPT: {
      return Object.assign({}, state, {
        followerCount: state.followerCount + 1,
        isProfFollowed: true,
      })
    }
    case LIKE_PROF_SUCCESS:
      return Object.assign({}, state, {
        isProfFollowed: true,
      })
    case LIKE_PROF_ERROR:
      return Object.assign({}, state, {})
    case UNLIKE_PROF_ATTEMPT: {
      return Object.assign({}, state, {
        followerCount: state.followerCount - 1,
        isProfFollowed: false,
      })
    }
    case UNLIKE_PROF_SUCCESS:
      return Object.assign({}, state, {
        isProfFollowed: false,
      })
    case UNLIKE_PROF_ERROR:
      return Object.assign({}, state, {})
    default:
      return state
  }
}
