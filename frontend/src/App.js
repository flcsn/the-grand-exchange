import React, { useEffect } from 'react'
import { Routes, Route, useMatch } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { saveUserFromLocalStorage } from './reducers/userReducer'
import { getAllProducts } from './reducers/productReducer'

import LandingPage from './components/landing-page'
import LoginPage from './components/login-page'
import RegistrationPage from './components/registration-page'
import MainPage from './components/main-page'
import ProductPage from './components/product-page'
import UserProducts from './components/user-products'
import Notification from './components/notification'
import SearchResults from './components/search-results'
import Header from './components/header'
import Footer from './components/footer'

const App = () => {
  const state = useSelector(state => state)
  const user = state.user
  const products = state.products
  const notification = state.notification

  const dispatch = useDispatch()

  useEffect(async () => {
    dispatch(getAllProducts())
  }, [])

  useEffect(() => {
    const user = window.localStorage.getItem('the-grand-exchange-user')
    if (user) {
      const parsedUser = JSON.parse(user)
      dispatch(saveUserFromLocalStorage(parsedUser))
    }
  }, [])

  const productItemMatch = useMatch('/products/:id')
  const product = productItemMatch
    ? products.find(product => product.id === productItemMatch.params.id)
    : null

  const userProductsMatch = useMatch('/user/:username/products')
  const userProducts = userProductsMatch
    ? products.filter(product => product.owner.username === userProductsMatch.params.username)
    : null

  return(
    <div>
      <Notification notification={notification} />
      <Header />
      <Routes>
        <Route path='/products/:id' element={<ProductPage product={product}/>} />
        <Route path='/search' element={<SearchResults />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/user/:username/products' element={<UserProducts products={userProducts} />} />
        <Route path='/login' element={user ? <Navigate replace to='/main' /> : <LoginPage />} />
        <Route path='/register' element={<RegistrationPage />} />
        <Route path='/' element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App