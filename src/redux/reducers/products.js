import {SET_PRODUCTS } from '../actions/products'

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
    // case :
    //   return {
    //     ...state,
    //     items: action.payload,
    //   }
  }
  return state
}

export default products
