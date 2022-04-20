import React from 'react'
import { FaEdit } from 'react-icons/fa'
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
          <button className='td-icon td-edit'>
            <FaEdit />
          </button>
          <button className='td-icon td-delete'>
            <RiDeleteBinLine />
          </button>
        </div>
      </td>
    </tr>
  )
}

export default UserProductListItem