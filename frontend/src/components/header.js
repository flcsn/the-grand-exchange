import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/sample-logo.PNG'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../reducers/userReducer'

const Header = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleClick = (event) => {
    event.preventDefault()
    console.log('button clicked')
  }

  const handleLogout = (event) => {
    event.preventDefault()
    dispatch(logout())
  }

  return (
    <div className='header'>
      <Link to='/main'>
        <img src={logo} alt='sample logo'/>
      </Link>
      <form onSubmit={handleClick}>
        <input type='text' placeholder='Search for an item' />
        <button type='submit'>Go!</button>
      </form>
      { user ? <button onClick={handleLogout}>Log Out</button> : <Link to='/login'>Login</Link>}
    </div>
  )
}

export default Header