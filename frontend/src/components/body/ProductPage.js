import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNotification } from '../../reducers/notificationReducer'
import base64ArrayBuffer from '../../services/utils'
import PurchaseConfirmation from '../modals/PurchaseConfirmation'

const ProductPage = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  if (!product)
    return null

  const inStock = product.stock > 0
  const base64Image = base64ArrayBuffer(product.image.data.data)
  const imageSrc = `data:${product.image.contentType};base64,${base64Image}`

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

    window.scroll(0,0)
    document.body.classList.toggle('no-scroll')
    setShowConfirmation(true)
  }


  return (
    <div className='body-container'>
      <div className='product-page-container'>
        <div className='product-page-image-container'>
          <img
            className='product-page-image'
            src={imageSrc}
          />
        </div>
        <div className='product-page-details'>
          <div className='title-and-owner-container'>
            <h2>{product.title}</h2>
            <p className='product-owner'>sold by {product.owner.username}</p>
          </div>
          <p>{product.description}</p>
          <p className='product-price'>₱{product.price.toLocaleString()}</p>
          <form className='buy-product-form' onSubmit={(event) => handleSubmit(event)}>
            <input
              className='buy-product-quantity'
              type='number'
              name='quantity'
              value={quantity}
              min='1'
              onChange={(event) => handleChange(event)}
              required
            />
            <button
              className={inStock ? 'buy-product-btn' : 'disabled-btn' }
              type='submit'
              disabled={!inStock}
            >
              Buy Now
            </button>
            {product.stock <= 5
              ? <p className='product-stock'>{product.stock} left!</p>
              : null
            }
          </form>
          { showConfirmation &&
            <PurchaseConfirmation
              closeForm={() => setShowConfirmation(false)}
              product={product}
              quantity={quantity}
              user={user}
              imageSrc={imageSrc}
            />
          }
        </div>
      </div>
    </div>
  )
}

export default ProductPage