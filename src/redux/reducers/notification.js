import { ADD_NOTIFICATION, REMOVE_NOTIFICATIONS } from '../actions/notification'

const number = JSON.parse(localStorage.getItem('notificationNumber'))
const notificationItems = JSON.parse(localStorage.getItem('notificationItems'))

const initialState = {
  notifications: notificationItems || [],
  number,
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
        number: null,
      }
    default:
      return state
  }
}

export default notifications
