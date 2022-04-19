import React from 'react'
import { useDispatch } from 'react-redux'
import { buyProduct } from '../reducers/productReducer'

const PurchaseConfirmation = ({ closeForm, product, quantity, user }) => {
  const dispatch = useDispatch()

  const close = () => {
    document.body.classList.toggle('no-scroll')
    closeForm()
  }

  const confirm = () => {
    console.log(`buying ${quantity} of ${product.title}`)
    dispatch(buyProduct(product, quantity, user))
    close()
  }

  const cancel = () => {
    console.log('transaction cancelled')
    close()
  }

  return (
    <div className='modal-backdrop'>
      <div className='modal-form-container-sm'>
        <button
          className='close-modal-form-btn'
          onClick={close}
        >
          &times;
        </button>
        <h2>Confirm Purchase</h2>
        <p>Buying {quantity} {product.title} for {quantity * product.price}</p>
        <p>Proceed?</p>
        <button onClick={confirm}>Yes</button>
        <button onClick={cancel}>No</button>
      </div>
    </div>
  )
}

export default PurchaseConfirmation