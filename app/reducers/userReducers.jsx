import * as types from '../constants/UserActionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case types.SET_USER:
      return [
        Object.assign({}, action.user),
      ]
    case types.FETCH_KELIST:
      return [
        Object.assign({}, {
          image: '/images/dept/full/marxism.jpeg',
          header: '力荐这些马列课程',
          description: '不上你后悔',
          meta: '西南交通大学',
        }),
      ]
    default:
      return state
  }
}
