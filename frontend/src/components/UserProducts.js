import React, { useState } from 'react'

import ProductForm from './ProductForm'
import UserProductList from './UserProductList'

const UserProducts = ({ products }) => {
  const [showProductForm, setShowProductForm] = useState(false)

  const openProductForm = () => {
    window.scroll(0,0)
    document.body.classList.toggle('no-scroll')
    setShowProductForm(true)
  }

  return (
    <div className='body-container'>
      <div className='add-new-product-container'>
        <button onClick={openProductForm}>
          Add new product
        </button>
        { showProductForm && <ProductForm closeForm={() => setShowProductForm(false)}/> }
      </div>
      <UserProductList products={products} />
    </div>
  )
}

export default UserProducts