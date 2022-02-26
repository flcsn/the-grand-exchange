import React from 'react'
import Header from './header'
import Footer from './footer'

const ProductPage = ({ product }) => {
  console.log(product)
  if (!product) return null

  const base64Image = btoa(String.fromCharCode(...new Uint8Array(product.image.data.data)))

  return (
    <div>
      <Header />
      <div className='product-page-container'>
        <div className='product-page-image-container'>
          <img
            className='product-page-image'
            src={`data:${product.image.contentType};base64,
            ${base64Image}`}
          />
        </div>
        <div className='product-page-details'>
          <div className='title-and-owner-container'>
            <h2>{product.title}</h2>
            <p className='product-owner'>sold by {product.owner.username}</p>
          </div>
          <p>{product.description}</p>
          <p className='product-price'>₱{product.price}</p>
          <div className='btn-and-stock-container'>
            <div className='buy-btn-container'>
              <a className='buy-product-btn' href='#'>
                Buy Now
              </a>
            </div>
            {product.stock <= 5
              ? <span className='product-stock'>{product.stock} items left!</span>
              : null
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductPage