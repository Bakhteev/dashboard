import { combineReducers } from 'redux'
import usersDatabase from './users'
import products from './products'
import notifications from './notification'

const rootReducer = combineReducers({
  usersDatabase,
  products,
  notifications,
})

export default rootReducer
