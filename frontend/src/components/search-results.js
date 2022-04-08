import React from 'react'
import { useLocation } from 'react-router-dom'

import Header from './header'
import ProductList from './product-list'
import Footer from './footer'

const SearchResults = ({ products }) => {
  const location = useLocation()
  const title = new URLSearchParams(location.search).get('title')
  console.log('querying for', title)

  return (
    <div>
      <Header />
      <div className='search-status'>
        <p>{products.length} { products.length === 1 ? 'product' : 'products'} found for &apos;{title}&apos;</p>
      </div>
      <ProductList products={products}/>
      <Footer />
    </div>
  )
}

export default SearchResults