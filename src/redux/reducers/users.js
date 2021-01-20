import { SET_USERS_DATABASE, ADD_USER_TO_TABLE, } from '../actions/users'

const initialState = {
  items: [],
}

const usersDatabase = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_DATABASE:
      return {
        ...state,
        items: action.payload,
      }
    case ADD_USER_TO_TABLE:
      return {
        ...state,
        items: action.payload,
      }
  }
  return state
}

export default usersDatabase
