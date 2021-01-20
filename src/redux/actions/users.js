export const SET_USERS_DATABASE = 'SET_USERS_DATABASE'
export const ADD_USER_TO_TABLE = 'ADD_USER_TO_TABLE'

export const setUsersDatabase = (items) => ({
  type: SET_USERS_DATABASE,
  payload: items,
})

export const addUserToTable = (user) => ({
  type: ADD_USER_TO_TABLE,
  payload: user,
})
