import productService from '../services/products'

const productReducer = (state = [], action) => {
  switch (action.type) {
    case 'INITIALIZE_PRODUCTS':
    case 'SET_PRODUCTS':
      return action.data
    default:
      return state
  }
}

export const initializeProducts = () => {
  return async dispatch => {
    const products = await productService.getAll()
    if (products) {
      dispatch({
        type: 'INITIALIZE_PRODUCTS',
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
    } catch (e) {
      console.log(e.message)
    }
  }
}

export default productReducer


