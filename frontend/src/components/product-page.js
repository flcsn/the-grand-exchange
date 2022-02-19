import React from 'react'
import Header from './header'
import Footer from './footer'

const ProductPage = ({ product }) => {
  return (
    <div>
      <Header />
      <img src={product.image} style={{ height: '300px', width: '300px' }} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.stock}</p>
      <p>{product.price}</p>
      <a href='#'>Buy Now</a>
      <Footer />
    </div>
  )
}

export default ProductPage