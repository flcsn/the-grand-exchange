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
    <div>
      <h2>Welcome to The Grand Exchange!</h2>
      <p>What are you buying today?</p>
      <form onSubmit={(event) => handleSearch(event)}>
        <input name='search' type='text' />
        <button type='submit'>Go!</button>
      </form>
      <Link to='/login'>I would like to sell my products</Link>
    </div>
  )
}

export default LandingPage