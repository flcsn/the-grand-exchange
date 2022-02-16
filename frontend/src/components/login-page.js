import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log('button clicked')
  }

  return(
    <div>
      <form onSubmit={(event) => handleFormSubmit(event)}>
        <h2>Login</h2>
        <label>Username</label>
        <input name='username' type='text' />
        <label>Password</label>
        <input name='password' type='password' />
        <button type='submit'>Login</button>
      </form>
      <Link to='/register'>Don&apos;t have an account?</Link>
    </div>
  )
}

export default LoginPage