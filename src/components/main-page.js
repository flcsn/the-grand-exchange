import React from 'react'
import sampleProduct from '../assets/sample-items/sample-product'

import Header from './header'
import ProductItem from './product-item'
import Footer from './footer'

const MainPage = () => {
  return (
    <div>
      <Header />
      <ProductItem product={sampleProduct}/>
      <Footer />
    </div>
  )
}

export default MainPage