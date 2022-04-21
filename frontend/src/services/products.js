import axios from 'axios'

const productsBaseURL = 'http://localhost:3001/products'
let token = null

const extractToken = user => {
  console.log('token set to', user.token)
  token = `bearer ${user.token}`
}

const removeToken = () => {
  console.log('removing token')
  token = null
}

const addProduct = async (title, description, stock, price, image) => {
  const productFormData = new FormData()

  console.log('token is', token)
  productFormData.append('title', title)
  productFormData.append('description', description)
  productFormData.append('stock', stock)
  productFormData.append('price', price)
  productFormData.append('image', image)

  console.log('product form data', productFormData)
  console.log('token is', token)

  const result = await axios.post(
    productsBaseURL,
    productFormData,
    {
      headers: {
        Authorization : token,
        'Content-Type': 'multipart/form-data'
      }
    }
  )
  return result.data
}

const editProduct = async (id, title, description, stock, price) => {
  const data = { id, title, description, stock, price }

  const result = await axios.put(
    productsBaseURL,
    data,
    {
      headers: {
        Authorization : token
      }
    }
  )
  return result.data
}

const buyProduct = async (id, quantity, user) => {
  const result = await axios.put(`${productsBaseURL}/${id}/buy`, {
    quantity
  }, user && { Authorization: `bearer ${user.token}` }
  )
  return result.data
}

const getAll = async () => {
  const result = await axios.get(productsBaseURL)
  return result.data
}

const getOne = async (id) => {
  const result = await axios.get(`${productsBaseURL}/${id}/buy`)
  return result.data
}

const search = async (title) => {
  const result = await axios.get(`${productsBaseURL}/search`, {
    params: { title }
  })

  return result.data
}

export default {
  extractToken,
  removeToken,
  addProduct,
  editProduct,
  buyProduct,
  getAll,
  getOne,
  search
}