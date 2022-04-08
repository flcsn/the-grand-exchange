import React from 'react'
import { HiSearch } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const SearchBox = () => {
  const navigate = useNavigate()

  const handleSearch = (event) => {
    event.preventDefault()
    const title = event.target.search.value
    if (title === '')
      navigate('/main')
    else
      navigate(`/search?title=${title}`)
  }

  return (
    <form onSubmit={(event) => handleSearch(event)}>
      <div className='search-box-container'>
        <input className='search-box' name='search' type='text' />
        <div className='search-box-button-container'>
          <button className='search-box-button' type='submit'>
            <HiSearch className='search-icon' />
          </button>
        </div>
      </div>
    </form>
  )
}

export default SearchBox