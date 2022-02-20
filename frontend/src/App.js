import React, { useState, useEffect } from 'react'
import { Routes, Route, useMatch } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { saveUserFromLocalStorage } from './reducers/userReducer'
import sampleProduct from './assets/sample-items/sample-product'
import productService from './services/products'

import LandingPage from './components/landing-page'
import LoginPage from './components/login-page'
import RegistrationPage from './components/registration-page'
import MainPage from './components/main-page'
import ProductPage from './components/product-page'
import UserListings from './components/user-products'

const App = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const [products, setProducts] = useState([])

  useEffect(async () => {
    const p = await productService.getAll()
    if (p) setProducts(p)
  }, [])

  useEffect(() => {
    const user = window.localStorage.getItem('the-grand-exchange-user')
    if (user) {
      const parsedUser = JSON.parse(user)
      dispatch(saveUserFromLocalStorage(parsedUser))
    }
  }, [])

  const productItemMatch = useMatch('/products/1')
  const product = productItemMatch
    ? sampleProduct
    : null

  const userListingMatch = useMatch('/user/:username/products')
  const userProducts = userListingMatch
    ? products.filter(product => product.owner.username === userListingMatch.params.username)
    : null

  return(
    <div>
      <Routes>
        <Route path='/products/1' element={<ProductPage product={product}/>} />
        <Route path='/login' element={user ? <Navigate replace to='/main' /> : <LoginPage />} />
        <Route path='/register' element={<RegistrationPage />} />
        <Route path='/main' element={<MainPage products={products} />} />
        <Route path='/user/:username/products' element={<UserListings products={userProducts} />} />
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </div>
  )
}

export default App