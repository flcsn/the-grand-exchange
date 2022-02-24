import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = ({ product }) => {
  // convert image buffer data type to base 64 string for image rendering
  const base64Image = btoa(String.fromCharCode(...new Uint8Array(product.image.data.data)))

  return (
    <div className='product-item'>
      <img src={`data:${product.image.contentType};base64,
                     ${base64Image}`} style={{ height: '200px', width: '200px' }}/>
      <h2>{product.title}</h2>
      <p>PhP {product.price}</p>
      <Link to={`/products/${product.id}`}>
        <div className='product-item-link'>
          See More
        </div>
      </Link>
    </div>
  )
}

export default ProductItem