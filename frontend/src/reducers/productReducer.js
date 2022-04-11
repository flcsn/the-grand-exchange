import productService from '../services/products'
import { setNotification } from './notificationReducer'

const productReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return action.data
    default:
      return state
  }
}

export const getAllProducts = () => {
  return async dispatch => {
    const products = await productService.getAll()
    if (products) {
      dispatch({
        type: 'SET_PRODUCTS',
        data: products
      })
    }
  }
}

export const addProduct = (title, description, stock, price, image) => {
  return async dispatch => {
    try {
      await productService.addProduct(title, description, stock, price, image)
      const updatedProducts = await productService.getAll()
      dispatch({
        type: 'SET_PRODUCTS',
        data: updatedProducts
      })
      dispatch(setNotification('Successfully posted a new product!'))
    } catch (e) {
      console.log(e.message)
      dispatch(setNotification('Failed to post a new product'))
    }
  }
}

export default productReducer


