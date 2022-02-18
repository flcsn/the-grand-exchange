import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import userService from '../services/users'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    console.log('logging in with', username, password)
    try {
      const result = await userService.login(username, password)
      console.log('login successful', result)
    } catch (e) {
      console.log('error:', e.message)
    }
  }

  return(
    <div>
      <form onSubmit={(event) => handleFormSubmit(event)}>
        <h2>Login</h2>
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
        <button type='submit'>Login</button>
      </form>
      <Link to='/register'>Don&apos;t have an account?</Link>
    </div>
  )
}

export default LoginPage