import React from 'react'

import Header from './header'
import ProductList from './product-list'
import Footer from './footer'

const SearchResults = ({ products }) => {
  return (
    <div>
      <Header />
      <ProductList products={products}/>
      <Footer />
    </div>
  )
}

export default SearchResults