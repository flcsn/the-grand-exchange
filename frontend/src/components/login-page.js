import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../reducers/userReducer'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    dispatch(login(username, password))
    navigate('/main')
  }

  return(
    <div className='landing-page'>
      <div className='landing-page-box'>
        <div className='landing-page-form-container'>
          <form className='landing-page-form' onSubmit={(event) => handleFormSubmit(event)}>
            <h2>Member Login</h2>
            <div className='form-input-container'>
              <input
                className='form-input'
                name='username'
                value={username}
                placeholder='Username'
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
            <button className='form-submit-btn' type='submit'>Log in</button>
          </form>
          <Link to='/register' className='transparent-gray-link'>Don&apos;t have an account?</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage