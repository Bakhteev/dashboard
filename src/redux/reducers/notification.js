import { ADD_NOTIFICATION } from '../actions/notification'

const initialState = {
  notifications: [],
  number: 0,
}

const notifications = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return {
        ...state,
        notifications: action.payload,
        number: action.payload.length,
      }
    default:
      return state
  }
}

export default notifications