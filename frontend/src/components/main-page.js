import React, { useState, useEffect } from 'react'
import productService from '../services/products'

import Header from './header'
import ProductItem from './product-item'
import Footer from './footer'

const MainPage = () => {
  const [products, setProducts] = useState([])

  useEffect(async () => {
    const p = await productService.getAll()
    if (p) setProducts(p)
  }, [])

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