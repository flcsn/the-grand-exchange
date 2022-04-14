import productService from '../services/products'
import { setNotification } from './notificationReducer'
import { subtractFunds } from './userReducer'

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
      dispatch(setNotification('success', 'Successfully posted a new product!'))
    } catch (e) {
      console.log(e.message)
      dispatch(setNotification('error', 'Failed to post a new product'))
    }
  }
}

export const buyProduct = (product, user) => {
  return async dispatch => {
    try {
      await productService.buyProduct(product.id, user)
      dispatch(getAllProducts())
      if (user) dispatch(subtractFunds(product.price, user))
      dispatch(setNotification('success', `Successfully bought ${product.title}`))
    } catch (e) {
      console.log(e)
      dispatch(setNotification('error', 'Failed to buy product'))
    }

  }
}

export default productReducer


