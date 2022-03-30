import React, { useState } from 'react'
import Footer from './footer'
import Header from './header'
import ProductForm from './product-form'
import ProductList from './product-list'

const UserProducts = ({ products }) => {
  const [showForm, setShowForm] = useState(false)

  const openForm = () => {
    setShowForm(true)
    document.body.classList.toggle('no-scroll')

  }

  const closeForm = () => {
    setShowForm(false)
    document.body.classList.toggle('no-scroll')
  }

  return (
    <div>
      <Header />
      <div className='add-new-product-container'>
        <button onClick={openForm}>
          Add new product
        </button>
      </div>
      {showForm && <ProductForm closeForm={closeForm}/>}
      <ProductList products={products} />
      <Footer />
    </div>
  )
}

export default UserProducts