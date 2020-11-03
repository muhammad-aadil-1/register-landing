import { config } from '../constants';

export const SET_NAVBAR_COLLAPSED = "SET_NAVBAR_COLLAPSED"
export const SET_WEB_LANGUAGE = "SET_WEB_LANGUAGE"

export const setNavbarCollapsed = navBarCollapsed => ({
  type: SET_NAVBAR_COLLAPSED,
  navBarCollapsed,
})

export const setWebLanguage = language => ({
  type: SET_WEB_LANGUAGE,
  language,
})

export default function reducer(
  state = {
    navBarCollapsed: false,
    language: config.englishLanguage,
  },
  action
) {
  switch (action.type) {
    case SET_NAVBAR_COLLAPSED:
      return {
        ...state,
        navBarCollapsed: action.navBarCollapsed,
      }
    case SET_WEB_LANGUAGE:
      return {
        ...state,
        language: action.language,
      }
    default:
      break
  }
  return state
}
