import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = ({ product }) => {
  return(
    <div>
      <img src={product.image} style={{ height: '200px', width: '200px' }}/>
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <Link to='/products/1'>See More</Link>
    </div>
  )
}

export default ProductItem