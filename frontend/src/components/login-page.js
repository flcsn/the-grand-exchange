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