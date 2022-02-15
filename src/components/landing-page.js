import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  const handleSearch = (event) => {
    event.preventDefault()
    console.log('button clicked')
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