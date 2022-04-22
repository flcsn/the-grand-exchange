import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct, editProduct } from '../../reducers/productReducer'

const ProductForm = ({ closeForm, prepopulate }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [stock, setStock] = useState(1)
  const [price, setPrice] = useState(1)

  const dispatch = useDispatch()

  useEffect(() => {
    if (prepopulate) {
      setTitle(prepopulate.title)
      setDescription(prepopulate.description)
      setStock(prepopulate.stock)
      setPrice(prepopulate.price)
    }
  }, [prepopulate])

  console.log('prepopulate', prepopulate)

  const close = () => {
    document.body.classList.toggle('no-scroll')
    closeForm()
  }

  const handleEditProduct = (event) => {
    event.preventDefault()
    dispatch(editProduct(
      prepopulate.id,
      title,
      description,
      stock,
      price
    ))
    close()
  }

  const handleAddProduct = (event) => {
    event.preventDefault()
    dispatch(addProduct(
      title,
      description,
      stock,
      price,
      event.target.image.files[0],
    ))
    close()
  }

  return (
    <div className='modal-backdrop'>
      <div className='modal-form-container'>
        <h2>Product details</h2>
        <button
          className='close-modal-form-btn'
          onClick={close}
        >
          &times;
        </button>
        <form
          className='product-form'
          onSubmit={ prepopulate ? handleEditProduct : handleAddProduct }
          encType='multipart/form-data'
        >
          <div className='product-form-field'>
            <label>Title</label>
            <input
              type='text'
              name='title'
              value={title}
              onChange={({ target }) => setTitle(target.value)}
              required
            />
          </div>
          <div className='product-form-field'>
            <label>Description</label>
            <input
              type='text'
              name='description'
              value={description}
              onChange={({ target }) => setDescription(target.value)}
              required
            />
          </div>
          <div className='product-form-field-2-col'>
            <div className='product-form-field'>
              <label>Stock</label>
              <input
                type='number'
                name='stock'
                value={stock}
                onChange={({ target }) => setStock(target.value)}
                min='1'
                required
              />
            </div>
            <div className='product-form-field'>
              <label>Price</label>
              <input
                type='number'
                name='price'
                value={price}
                onChange={({ target }) => setPrice(target.value)}
                min='1'
                required
              />
            </div>
          </div>
          { !prepopulate &&
          <div className='product-form-field product-form-field-file'>
            <label>Image</label>
            <input type='file' name='image' required />
          </div>
          }
          <button
            className='product-form-submit-btn'
            type='submit'
          >
            { prepopulate ? 'Edit' : 'Add' } product
          </button>
        </form>
      </div>
    </div>
  )
}

export default ProductForm