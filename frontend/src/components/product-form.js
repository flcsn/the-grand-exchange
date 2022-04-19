import React from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../reducers/productReducer'
import { closeModal } from '../reducers/modalReducer'

const ProductForm = () => {
  const dispatch = useDispatch()

  const handleAddProduct = (event) => {
    event.preventDefault()
    dispatch(addProduct(
      event.target.title.value,
      event.target.description.value,
      event.target.stock.value,
      event.target.price.value,
      event.target.image.files[0],
    ))
  }

  return (
    <div className='modal-form-container'>
      <h2>Product details</h2>
      <button
        className='close-modal-form-btn'
        onClick={() => dispatch(closeModal())}
      >
        &times;
      </button>
      <form
        className='product-form'
        onSubmit={handleAddProduct}
        encType='multipart/form-data'
      >
        <div className='product-form-field'>
          <label>Title</label>
          <input type='text' name='title' required />
        </div>
        <div className='product-form-field'>
          <label>Description</label>
          <input type='text' name='description' required />
        </div>
        <div className='product-form-field-2-col'>
          <div className='product-form-field'>
            <label>Stock</label>
            <input type='number' name='stock' min='0' required />
          </div>
          <div className='product-form-field'>
            <label>Price</label>
            <input type='number' name='price' min='1' required />
          </div>
        </div>
        <div className='product-form-field product-form-field-file'>
          <label>Image</label>
          <input type='file' name='image' required />
        </div>
        <button
          className='product-form-submit-btn'
          type='submit'
        >
          Add product
        </button>
      </form>
    </div>
  )
}

export default ProductForm