import React, { useState }from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { register } from '../reducers/userReducer'
import { RiArrowGoBackLine } from 'react-icons/ri'

const RegistrationPage = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [emailAddress, setEmailAddress] = useState('')

  const dispatch = useDispatch()

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    dispatch(register(username, password, emailAddress))
    navigate('/main')
  }

  return(
    <div className='landing-page'>
      <div className='landing-page-box'>
        <Link to='/login' >
          <RiArrowGoBackLine className='back-btn-icon' />
        </Link>
        <div className='landing-page-form-container'>
          <form className='landing-page-form' onSubmit={(event) => handleFormSubmit(event)}>
            <h2>Register here!</h2>
            <div className='form-input-container'>
              <input
                className='form-input'
                name='username'
                placeholder='Username'
                value={username}
                onChange = {({ target }) => setUsername(target.value)}
                type='text'
              />
            </div>
            <div className='form-input-container'>
              <input
                className='form-input'
                name='password'
                value={password}
                placeholder='Password'
                onChange = {({ target }) => setPassword(target.value)}
                type='password'
              />
            </div>
            <div className='form-input-container'>
              <input
                className='form-input'
                name='emailAddress'
                placeholder='Email Address'
                value={emailAddress}
                onChange = {({ target }) => setEmailAddress(target.value)}
                type='email'
              />
            </div>
            <button className='form-submit-btn' type='submit'>Create an account</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegistrationPage