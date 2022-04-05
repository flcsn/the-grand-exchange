import React from 'react'

import ProductItem from './product-item'

const ProductList = ({ products }) => {
  return (
    <div className='product-list'>
      {products.map(product =>
        <ProductItem key={product.id} product={product} />)
      }
    </div>
  )
}

export default ProductList