import React, { useState }from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register } from '../reducers/userReducer'

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
    <div>
      <form onSubmit={(event) => handleFormSubmit(event)}>
        <h2>Register</h2>
        <label>Username</label>
        <input
          name='username'
          value={username}
          onChange = {({ target }) => setUsername(target.value)}
          type='text'
        />
        <label>Password</label>
        <input
          name='password'
          value={password}
          onChange = {({ target }) => setPassword(target.value)}
          type='password'
        />
        <label>Email Address</label>
        <input
          name='emailAddress'
          value={emailAddress}
          onChange = {({ target }) => setEmailAddress(target.value)}
          type='email'
        />
        <button type='submit'>Create an account</button>
      </form>
    </div>
  )
}

export default RegistrationPage