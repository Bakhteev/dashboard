import { SET_PRODUCTS, INCREMENT } from '../actions/products'

const initialState = {
  items: [],
  value: 0,
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
        value: action.payload,
      }
  }
  return state
}

export default products
