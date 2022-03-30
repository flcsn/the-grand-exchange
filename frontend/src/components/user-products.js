import React, { useState } from 'react'
import Footer from './footer'
import Header from './header'
import ProductForm from './product-form'
import ProductList from './product-list'

const UserProducts = ({ products }) => {
  const [showForm, setShowForm] = useState(false)
  console.log('products', products)

  return (
    <div>
      <Header />
      <div className='add-new-product-container'>
        <button onClick={() => setShowForm(!showForm)}>
          Add new product
        </button>
      </div>
      {showForm && <ProductForm />}
      <ProductList products={products} />
      <Footer />
    </div>
  )
}

export default UserProducts