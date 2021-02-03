export const ADD_NOTIFICATION = 'ADD_NOTIFICATION'
export const REMOVE_NOTIFICATIONS = 'REMOVE_NOTIFICATIONS'

export const addNotification = (payload) => ({
  type: ADD_NOTIFICATION,
  payload,
})

export const removeNotifications = () => ({ type: REMOVE_NOTIFICATIONS })
