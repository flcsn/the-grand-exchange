import React from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../reducers/productReducer'

const ProductForm = ({ closeForm }) => {
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
    <div className='product-form-background'>
      <div className='product-form-container'>
        <h2>Add a new product!</h2>
        <button
          className='close-product-form-btn'
          onClick={closeForm}
        >
          &times;
        </button>
        <form
          onSubmit={handleAddProduct}
          encType='multipart/form-data'
        >
          <label>Product title</label>
          <input type='text' name='title' required />
          <label>Product description</label>
          <input type='text' name='description' required />
          <label>Product stock</label>
          <input type='number' name='stock' min='0' required />
          <label>Product price</label>
          <input type='number' name='price' min='1' required />
          <label>Product image</label>
          <input type='file' name='image' required />
          <button type='submit'>Add product</button>
        </form>
      </div>
    </div>
  )
}

export default ProductForm