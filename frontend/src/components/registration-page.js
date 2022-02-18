import React, { useState }from 'react'
import userService from '../services/users'

const RegistrationPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [emailAddress, setEmailAddress] = useState('')

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    try {
      const result = await userService.register(username, password, emailAddress)
      console.log('registration successful', result)
    } catch (e) {
      console.log('error:', e)
    }
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