import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = ({ product }) => {
  // convert image buffer data type to base 64 string for image rendering
  const base64Image = btoa(String.fromCharCode(...new Uint8Array(product.image.data.data)))

  return (
    <div>
      <img src={`data:${product.image.contentType};base64,
                     ${base64Image}`} style={{ height: '200px', width: '200px' }}/>
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <Link to='/products/1'>See More</Link>
    </div>
  )
}

export default ProductItem