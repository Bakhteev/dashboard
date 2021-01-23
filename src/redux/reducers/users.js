import { SET_USERS_DATABASE, SHOW_LOADER, HIDE_LOADER } from '../actions/users'
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
    case SHOW_LOADER:
      return {
        ...state,
        loading: true,
      }
      case HIDE_LOADER:
        return {
          ...state,
          loading: false,
        }
  }
  return state
}

export default usersDatabase
