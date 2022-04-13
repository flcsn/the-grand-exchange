import React from 'react'
import { useDispatch } from 'react-redux'
import { closeModal } from '../reducers/modalReducer'

const WalletForm = () => {
  const dispatch = useDispatch()

  return (
    <div className='modal-form-container'>
      <h2>Add Funds</h2>
      <button
        className='close-modal-form-btn'
        onClick={() => dispatch(closeModal())}
      >
        &times;
      </button>
      <p>Hello!</p>
    </div>
  )
}

export default WalletForm