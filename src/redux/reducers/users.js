import { SET_USERS_DATABASE } from '../actions/users'

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
  }
  return state
}

export default usersDatabase
