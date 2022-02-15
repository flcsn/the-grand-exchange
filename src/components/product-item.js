import React from 'react'

const ProductItem = ({ product }) => {
  return(
    <div>
      <img src={product.image} style={{ height: '200px', width: '200px' }}/>
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <a href='#'>See More</a>
    </div>
  )
}

export default ProductItem