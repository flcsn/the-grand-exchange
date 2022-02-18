import React from 'react'
import Footer from './footer'
import Header from './header'
import ProductItem from './product-item'

const UserProducts = ({ products }) => {
  return (
    <div>
      <Header />
      <p>Add new product</p>
      {products.map(product =>
        <ProductItem key={product.id} product={product} />)
      }
      <Footer />
    </div>
  )
}

export default UserProducts