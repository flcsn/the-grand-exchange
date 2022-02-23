import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate()

  const handleSearch = (event) => {
    event.preventDefault()
    console.log('entering main page')
    navigate('/main')
  }

  return (
    <div className='landing-page'>
      <div className='landing-page-box'>
        <h2>Welcome to The Grand Exchange!</h2>
        <p>What are you buying today?</p>
        <form onSubmit={(event) => handleSearch(event)}>
          <div className='search-box-container'>
            <input className='search-box' name='search' type='text' />
            <button className='search-box-button' type='submit'>Search</button>
          </div>
        </form>
        <Link to='/login' className='landing-page-login-link'>I would like to sell my products</Link>
      </div>
    </div>
  )
}

export default LandingPage