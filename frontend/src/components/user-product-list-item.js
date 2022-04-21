import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEdit, FaRegEye } from 'react-icons/fa'
import { RiDeleteBinLine } from 'react-icons/ri'

import ProductForm from './product-form'


const UserProductListItem = ({ product }) => {
  const [edit, setEdit] = useState(false)

  const openEditForm = () => {
    window.scroll(0,0)
    document.body.classList.toggle('no-scroll')
    setEdit(true)
  }

  const handleEdit = () => {
    console.log('edit')
    openEditForm()
  }

  const handleDelete = () => {
    console.log('delete')
  }

  return (
    <tr>
      <td>
        {product.title}
      </td>
      <td className='td-right'>
        {product.price}
      </td>
      <td className='td-right'>
        {product.stock}
      </td>
      <td>
        <div className='td-icon-container'>
          <Link to={`/products/${product.id}`} className='td-icon'>
            <FaRegEye />
          </Link>
          <button className='td-icon' onClick={handleEdit}>
            <FaEdit />
          </button>
          { edit && <ProductForm closeForm={() => setEdit(false)} prepopulate={product}/>}
          <button className='td-icon' onClick={handleDelete}>
            <RiDeleteBinLine />
          </button>
        </div>
      </td>
    </tr>
  )
}

export default UserProductListItem