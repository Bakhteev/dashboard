export const SET_PRODUCTS = 'SET_PRODUCTS'
export const INCREMENT = 'INCREMENT'

export const setProducts = (items) => ({
  type: SET_PRODUCTS,
  payload: items,
})
export const counter = (payload) => ({
  type: INCREMENT,
  payload
})
