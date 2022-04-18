import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { buyProduct } from '../reducers/productReducer'
import base64ArrayBuffer from '../services/utils'

const ProductPage = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  if (!product)
    return null

  const base64Image = base64ArrayBuffer(product.image.data.data)

  const handleChange = (event) => {
    const q = event.target.value

    if (q > product.stock)
      setQuantity(product.stock)
    else
      setQuantity(q)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (user) {
      if (user.username === product.owner.username) {
        dispatch(setNotification('error', 'cannot purchase products you own'))
        return
      }
      if (user.funds < product.price) {
        dispatch(setNotification('error', 'not enough funds'))
        return
      }
    }

    console.log(`buying ${quantity} items`)
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
          <form className='buy-product-form' onSubmit={(event) => handleSubmit(event)}>
            <input
              type='number'
              name='quantity'
              value={quantity}
              onChange={(event) => handleChange(event)}
              required
            />
            <button
              className='buy-product-btn'
              type='submit'
            >
              Buy Now
            </button>
            {product.stock <= 5
              ? <p className='product-stock'>{product.stock} left!</p>
              : null
            }
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProductPage