import { SET_USERS_DATABASE, SHOW_LOADER, } from '../actions/users'
const initialState = {
  items: [],
  loading: false
}

const usersDatabase = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_DATABASE:
      return {
        ...state,
        items: action.payload,
        loading: false
      }
    case SHOW_LOADER:
      return {
        ...state,
        loading: true,
      }
  }
  return state
}

export default usersDatabase
