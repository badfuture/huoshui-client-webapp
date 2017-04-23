import {
  TOGGLE_MENU_SIDEBAR,
  OPEN_MENU_SIDEBAR,
  CLOSE_MENU_SIDEBAR,
} from '../constants/MenuActionTypes'


export const toggleMenuSidebar = () => ({
  type: TOGGLE_MENU_SIDEBAR,
})

export const openMenuSidebar = () => ({
  type: OPEN_MENU_SIDEBAR,
})

export const closeMenuSidebar = () => ({
  type: CLOSE_MENU_SIDEBAR,
})
