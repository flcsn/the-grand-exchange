import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import productService from '../services/products'

import Header from './header'
import ProductList from './product-list'
import Footer from './footer'

const SearchResults = () => {
  const [products, setProducts] = useState([])
  const location = useLocation()
  const title = new URLSearchParams(location.search).get('title')

  useEffect(async () => {
    const p = await productService.search(title)
    setProducts(p)
  }, [title])

  return (
    <div>
      <Header />
      <div className='search-status'>
        <p>{products.length} { products.length === 1 ? 'match' : 'matches'} found for &apos;{title}&apos;</p>
      </div>
      <ProductList products={products}/>
      <Footer />
    </div>
  )
}

export default SearchResults