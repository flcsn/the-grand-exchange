import React from 'react'
import Header from './header'
import Footer from './footer'

const ProductPage = ({ product }) => {
  console.log(product)
  const base64Image = btoa(String.fromCharCode(...new Uint8Array(product.image.data.data)))

  return (
    <div>
      <Header />
      <img src={`data:${product.image.contentType};base64,
                     ${base64Image}`} style={{ height: '300px', width: '300px' }}/>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.stock}</p>
      <p>{product.price}</p>
      <a href='#'>Buy Now</a>
      <Footer />
    </div>
  )
}

export default ProductPage