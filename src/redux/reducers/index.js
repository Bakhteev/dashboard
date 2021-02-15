import { combineReducers } from 'redux'
import usersDatabase from './users'
import products from './products'
import notifications from './notification'
import registratedUsers from './registratedUsers'

const rootReducer = combineReducers({
  usersDatabase,
  products,
  notifications,
  registratedUsers,
})

export default rootReducer
