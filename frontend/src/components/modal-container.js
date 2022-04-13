import React from 'react'
import { useSelector } from 'react-redux'
import ProductForm from './product-form'

const ModalContainer = () => {
  const modal = useSelector(state => state.modal)

  if (modal.display === false) return null

  if (modal.content === 'productForm') {
    return (
      <div className='modal-backdrop'>
        <ProductForm />
      </div>
    )
  }
}

export default ModalContainer