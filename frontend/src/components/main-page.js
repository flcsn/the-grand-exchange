import React from 'react'

import Header from './header'
import Footer from './footer'
import ProductList from './product-list'

const MainPage = ({ products }) => {
  return (
    <div>
      <Header />
      <ProductList products={products} />
      <Footer />
    </div>
  )
}

export default MainPage