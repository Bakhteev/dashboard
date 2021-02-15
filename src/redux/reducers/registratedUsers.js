import { SET_REGISTERED_USERS } from '../actions/registratedUsers'

const inialStateItemsGet = localStorage.getItem('payload')
const initialStateItems = JSON.parse(inialStateItemsGet)

const initialState = {
  items: initialStateItems,
  loading: false,
}

const registratedUsers = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGISTERED_USERS:
      return {
        ...state,
        items: [...action.payload],
      }
    default:
      return state
  }
}

export default registratedUsers
