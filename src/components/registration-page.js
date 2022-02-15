import React from 'react'

const RegistrationPage = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log('button clicked')
  }

  return(
    <div>
      <form onSubmit={(event) => handleFormSubmit(event)}>
        <h2>Register</h2>
        <label>Username</label>
        <input name='username' type='text' />
        <label>Password</label>
        <input name='password' type='password' />
        <label>Email Address</label>
        <input name='email' type='email' />
        <button type='submit'>Create an account</button>
      </form>
    </div>
  )
}

export default RegistrationPage