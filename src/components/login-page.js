import React from 'react'

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
      <a href='#'>Don&apos;t have an account?</a>
    </div>
  )
}

export default LoginPage