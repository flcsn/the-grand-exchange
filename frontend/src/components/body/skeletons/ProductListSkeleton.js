import React from 'react'
import ProductItemSkeleton from './ProductItemSkeleton'

const ProductListSkeleton = () => {
  return (
    <div className='product-list'>
      <ProductItemSkeleton />
      <ProductItemSkeleton />
      <ProductItemSkeleton />
      <ProductItemSkeleton />
    </div>
  )
}

export default ProductListSkeleton