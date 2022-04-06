import React from 'react'
import { HiSearch } from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { getAllProducts, searchProduct } from '../reducers/productReducer'

const SearchBox = ({ postHandleSearchFn }) => {
  const dispatch = useDispatch()

  const handleSearch = (event) => {
    event.preventDefault()
    const title = event.target.search.value
    if (title === '') dispatch(getAllProducts())
    else dispatch(searchProduct(title))

    if (postHandleSearchFn)
      postHandleSearchFn()
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