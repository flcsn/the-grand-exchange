import React from 'react'
import sampleProduct from '../assets/sample-items/sample-product'
import ProductItem from './product-item'
import Header from './header'

const MainPage = () => {
  /*
    Structure will be like:
    <Header />
    <ItemsList />
    <Footer />
  */

  return (
    <div>
      <Header />
      <ProductItem product={sampleProduct}/>
    </div>
  )
}

export default MainPage