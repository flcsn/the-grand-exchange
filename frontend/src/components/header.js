import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/sample-logo.PNG'
import { useSelector } from 'react-redux'
import AccountControls from './account-controls'

const Header = () => {
  const user = useSelector(state => state.user)

  const handleClick = (event) => {
    event.preventDefault()
    console.log('button clicked')
  }

  return (
    <div className='header'>
      <Link to='/main'>
        <img src={logo} alt='sample logo'/>
      </Link>
      <form onSubmit={handleClick}>
        <div className='search-box-container'>
          <input className='search-box' type='text' placeholder='Search for an item' />
          <button className='search-box-button' type='submit'>Search</button>
        </div>
      </form>
      { user ? <AccountControls user={user} /> : <Link to='/login'>Login</Link>}
    </div>
  )
}

export default Header