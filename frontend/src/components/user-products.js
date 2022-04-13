import React from 'react'
import { useDispatch } from 'react-redux'
import { displayModal } from '../reducers/modalReducer'

import ProductList from './product-list'

const UserProducts = ({ products }) => {
  const dispatch = useDispatch()

  return (
    <div>
      <div className='add-new-product-container'>
        <button onClick={() => dispatch(displayModal('productForm'))}>
          Add new product
        </button>
      </div>
      <ProductList products={products} />
    </div>
  )
}

export default UserProducts