import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import ProductForm from './product-form'
import ProductList from './product-list'

const UserProducts = ({ products }) => {
  const [showForm, setShowForm] = useState(false)

  let { username } = useParams()
  console.log('useParams', username)

  const openForm = () => {
    setShowForm(true)
    window.scroll(0,0)
    document.body.classList.toggle('no-scroll')
  }

  const closeForm = () => {
    setShowForm(false)
    document.body.classList.toggle('no-scroll')
  }

  return (
    <div>
      <div className='add-new-product-container'>
        <button onClick={openForm}>
          Add new product
        </button>
      </div>
      {showForm && <ProductForm closeForm={closeForm}/>}
      <ProductList products={products} />
    </div>
  )
}

export default UserProducts