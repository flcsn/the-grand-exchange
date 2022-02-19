import React, { useState } from 'react'
import Footer from './footer'
import Header from './header'
import ProductForm from './product-form'
import ProductItem from './product-item'

const UserProducts = ({ products }) => {
  const [showForm, setShowForm] = useState(false)
  return (
    <div>
      <Header />
      <button onClick={() => setShowForm(!showForm)}>Add new product</button>
      {showForm && <ProductForm />}
      {products.map(product =>
        <ProductItem key={product.id} product={product} />)
      }
      <Footer />
    </div>
  )
}

export default UserProducts