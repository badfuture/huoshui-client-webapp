import {
  TOGGLE_MENU_SIDEBAR, OPEN_MENU_SIDEBAR, CLOSE_MENU_SIDEBAR,
} from '../constants/MenuActionTypes'

export default (state = {
  menuSidebarVisible: false,
}, action) => {
  switch (action.type) {
    case TOGGLE_MENU_SIDEBAR:
      return Object.assign({}, state, {
        menuSidebarVisible: !state.menuSidebarVisible,
      })
    case OPEN_MENU_SIDEBAR:
      return Object.assign({}, state, {
        menuSidebarVisible: true,
      })
    case CLOSE_MENU_SIDEBAR:
      return Object.assign({}, state, {
        menuSidebarVisible: false,
      })
    default:
      return state
  }
}
