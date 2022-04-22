import React from 'react'
import UserProductListItem from './user-product-list-item'

const UserProductList = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            Title
          </th>
          <th>
            Price
          </th>
          <th>
            Stock
          </th>
          <th>
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map(product =>
          <UserProductListItem key={product.id} product={product} />)
        }
      </tbody>
    </table>
  )
}

export default UserProductList