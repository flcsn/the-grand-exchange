import React from 'react'

import Header from './header'
import ProductItem from './product-item'
import Footer from './footer'

const MainPage = ({ products }) => {
  return (
    <div>
      <Header />
      {products.map(product =>
        <ProductItem key={product.id} product={product} />)
      }
      <Footer />
    </div>
  )
}

export default MainPage