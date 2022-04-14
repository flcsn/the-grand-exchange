import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { buyProduct } from '../reducers/productReducer'
import base64ArrayBuffer from '../services/utils'

const ProductPage = ({ product }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  if (!product) return null

  const base64Image = base64ArrayBuffer(product.image.data.data)

  const handleBuy = () => {
    if (user && user.funds < product.price) {
      dispatch(setNotification('error', 'not enough funds'))
      return
    }
    console.log('product is', product)
    console.log('user is', user)
    dispatch(buyProduct(product, user))
  }


  return (
    <div>
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
              <a className='buy-product-btn'
                href='#'
                onClick={handleBuy}
              >
                Buy Now
              </a>
            </div>
            {product.stock <= 5
              ? <p className='product-stock'>{product.stock} items left!</p>
              : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage