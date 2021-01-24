import { SET_PRODUCTS, INCREMENT } from '../actions/products'

const initialState = {
  items: [],
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        items: action.payload,
      }
    case INCREMENT:
      return {
        ...state,
      }
  }
  return state
}

export default products
