export const SET_USERS_DATABASE = 'SET_USERS_DATABASE'
export const SHOW_LOADER = 'SHOW_LOADER'
export const HIDE_LOADER = 'HIDE_LOADER'

export const setUsersDatabase = (items) => ({
  type: SET_USERS_DATABASE,
  payload: items,
})

export const showLoader = () => ({
  type: SHOW_LOADER,
})

