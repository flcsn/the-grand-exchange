import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../reducers/productReducer'

const DeleteConfirmation = ({ closeForm, product }) => {
  const dispatch = useDispatch()

  const close = () => {
    document.body.classList.toggle('no-scroll')
    closeForm()
  }

  const confirm = () => {
    console.log(`deleting ${product.title}`)
    dispatch(deleteProduct(product))
    close()
  }

  const cancel = () => {
    console.log('deletion cancelled')
    close()
  }

  return (
    <div className='modal-backdrop'>
      <div className='modal-form-container-sm confirmation-container'>
        <button
          className='close-modal-form-btn'
          onClick={close}
        >
          &times;
        </button>
        <h2>{product.title}</h2>
        <p>Are you sure you want to delete this product?</p>
        <div className='confirmation-button-container'>
          <button className='cancel-button' onClick={cancel}>Cancel</button>
          <button className='confirm-button delete-button' onClick={confirm}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirmation