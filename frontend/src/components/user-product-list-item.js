import React from 'react'
import { Link } from 'react-router-dom'
import { FaEdit, FaRegEye } from 'react-icons/fa'
import { RiDeleteBinLine } from 'react-icons/ri'


const UserProductListItem = ({ product }) => {
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
          <button className='td-icon'>
            <FaEdit />
          </button>
          <button className='td-icon'>
            <RiDeleteBinLine />
          </button>
        </div>
      </td>
    </tr>
  )
}

export default UserProductListItem