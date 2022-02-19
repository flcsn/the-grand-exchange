import React from 'react'

const ProductForm = () => {
  const addProduct = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target.title.value)
  }

  return (
    <div>
      <h2>Add a new product!</h2>
      <form onSubmit={addProduct}>
        <label>Product title</label>
        <input type='text' name='title' required />
        <label>Product description</label>
        <input type='text' name='description' required />
        <label>Product stock</label>
        <input type='number' name='stock' min='0' required />
        <label>Product price</label>
        <input type='number' name='price' min='1' required />
        <label>Product image</label>
        <input type='file' name='image'/>
        <button type='submit'>Add product</button>
      </form>
    </div>
  )
}

export default ProductForm