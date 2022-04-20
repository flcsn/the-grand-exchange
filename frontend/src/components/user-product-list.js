import React from 'react'

const UserProductList = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>
            Title
          </td>
          <td>
            Price
          </td>
          <td>
            Stock
          </td>
        </tr>
      </thead>
      <tbody>
        {products.map(product =>
          <tr key={product.id}>
            <td>
              {product.title}
            </td>
            <td>
              {product.price}
            </td>
            <td>
              {product.stock}
            </td>
          </tr>)
        }
      </tbody>
    </table>
  )
}

export default UserProductList