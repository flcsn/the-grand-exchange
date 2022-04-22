import React from 'react'

const ProductItemSkeleton = () => {
  return (
    <div className='product-item'>
      <div className='product-item-image skeleton'></div>
      <div className='skeleton skeleton-title-field'></div>
      <div className='skeleton skeleton-field'></div>
      <div className='skeleton skeleton-field'></div>
      <div className='skeleton skeleton-field'></div>
    </div>
  )
}

export default ProductItemSkeleton