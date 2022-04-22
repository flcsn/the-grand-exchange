import React from 'react'
import { useDispatch } from 'react-redux'
import { buyProduct } from '../../reducers/productReducer'

const PurchaseConfirmation = ({ closeForm, product, quantity, user, imageSrc }) => {
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
      <div className='modal-form-container-sm confirmation-container'>
        <button
          className='close-modal-form-btn'
          onClick={close}
        >
          &times;
        </button>
        <h2>Confirm your purchase</h2>
        <div>
          <img
            className='purchase-confirmation-image'
            src={imageSrc}
          />
        </div>
        <p className='purchase-confirmation-text'>Buy <strong>{quantity} {product.title}</strong> for <strong>₱{(quantity * product.price).toLocaleString()}</strong>?</p>
        { user && <p>Your wallet: <strong>₱{user.funds.toLocaleString()}</strong></p> }
        <div className='confirmation-button-container'>
          <button className='cancel-button' onClick={cancel}>Cancel</button>
          <button className='confirm-button primary-button' onClick={confirm}>Confirm</button>
        </div>
      </div>
    </div>
  )
}

export default PurchaseConfirmation