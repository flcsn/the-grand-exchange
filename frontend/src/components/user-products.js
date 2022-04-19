import React, { useState } from 'react'

import ProductList from './product-list'
import ProductForm from './product-form'

const UserProducts = ({ products }) => {
  const [showProductForm, setShowProductForm] = useState(false)

  const openProductForm = () => {
    window.scroll(0,0)
    document.body.classList.toggle('no-scroll')
    setShowProductForm(true)
  }

  return (
    <div>
      <div className='add-new-product-container'>
        <button onClick={openProductForm}>
          Add new product
        </button>
        { showProductForm && <ProductForm closeForm={() => setShowProductForm(false)}/> }
      </div>
      <ProductList products={products} />
    </div>
  )
}

export default UserProducts