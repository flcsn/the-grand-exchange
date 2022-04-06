import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SearchBox from './search-box'

const LandingPage = () => {
  const navigate = useNavigate()

  const navigateToMain = () => {
    navigate('/main')
  }

  return (
    <div className='landing-page'>
      <div className='landing-page-box'>
        <h2>Welcome to The Grand Exchange!</h2>
        <p>What are you buying today?</p>
        <SearchBox postHandleSearchFn={navigateToMain}/>
        <Link to='/login' className='transparent-gray-link'>I would like to sell my products</Link>
      </div>
    </div>
  )
}

export default LandingPage