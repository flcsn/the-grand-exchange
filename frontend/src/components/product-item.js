import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = ({ product }) => {
  // convert image buffer data type to base 64 string for image rendering
  const base64Image = btoa(String.fromCharCode(...new Uint8Array(product.image.data.data)))

  return (
    <div className='product-item'>
      <img
        className='product-item-image'
        src={`data:${product.image.contentType};base64,
                     ${base64Image}`}/>
      <h2>{product.title}</h2>
      <p className='product-price'>₱{product.price}</p>
      <p className='product-seller'>Offered by {product.owner.username}</p>
      <Link to={`/products/${product.id}`}>
        <div className='product-item-link'>
          See More
        </div>
      </Link>
    </div>
  )
}

export default ProductItem