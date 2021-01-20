import { combineReducers } from 'redux'
import usersDatabase from './users'
import products from './products'

const rootReducer = combineReducers({
  usersDatabase,
  products,
})

export default rootReducer
