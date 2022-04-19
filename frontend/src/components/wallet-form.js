import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFunds } from '../reducers/userReducer'
import { closeModal } from '../reducers/modalReducer'

const WalletForm = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addFunds(event.target.funds.value, user, true))
  }

  return (
    <div id='wallet-modal-box' className='modal-form-container-sm'>
      <h2>Add Funds</h2>
      <button
        className='close-modal-form-btn'
        onClick={() => dispatch(closeModal())}
      >
        &times;
      </button>
      <p>You currently have: <strong>{user.funds}</strong></p>
      <form
        className='wallet-form'
        onSubmit={(event) => handleSubmit(event)}
      >
        <label>How much would you like to add?</label>
        <input name='funds' type='number' min='1' required />
        <button id='add-funds-btn' type='submit'>Add</button>
      </form>
    </div>
  )
}

export default WalletForm