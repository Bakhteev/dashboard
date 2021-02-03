import { ADD_NOTIFICATION, REMOVE_NOTIFICATIONS } from '../actions/notification'

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
    case REMOVE_NOTIFICATIONS:
      return {
        ...state,
        notifications: [],
        number: 0,
      }
    default:
      return state
  }
}


export default notifications
