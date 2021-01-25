import { SET_PRODUCTS, INCREMENT } from '../actions/products'
import { SHOW_LOADER } from '../actions/users'

const initialState = {
  items: [],
  loading: false,
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      }
    case INCREMENT:
      return {
        ...state,
      }
    case SHOW_LOADER:
      return {
        ...state,
        loading: true,
      }
  }
  return state
}

export default products
