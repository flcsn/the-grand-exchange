import React from 'react'

const ProductPage = ({ product }) => {
  console.log(product)
  return (
    <div>
      <img src={product.image} style={{ height: '300px', width: '300px' }} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.stock}</p>
      <p>{product.price}</p>
      <a href='#'>Buy Now</a>
    </div>
  )
}

export default ProductPage