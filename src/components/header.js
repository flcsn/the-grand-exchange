import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/sample-logo.PNG'

const Header = () => {
  const handleClick = (event) => {
    event.preventDefault()
    console.log('button clicked')
  }

  return (
    <div className='header'>
      <img src={logo} alt='sample logo'/>
      <form onSubmit={(event) => handleClick(event)}>
        <input type='text' placeholder='Search for an item' />
        <button type='submit'>Go!</button>
      </form>
      <Link to='/login'>Login</Link>
    </div>
  )
}

export default Header