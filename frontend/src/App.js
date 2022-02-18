import React, { useEffect } from 'react'
import { Routes, Route, useMatch } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserFromLocalStorage } from './reducers/userReducer'
import sampleProduct from './assets/sample-items/sample-product'

import LandingPage from './components/landing-page'
import LoginPage from './components/login-page'
import RegistrationPage from './components/registration-page'
import MainPage from './components/main-page'
import ProductPage from './components/product-page'

const App = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserFromLocalStorage())
  }, [])

  const match = useMatch('/products/1')
  const product = match
    ? sampleProduct
    : null

  return(
    <div>
      <Routes>
        <Route path='/products/1' element={<ProductPage product={product}/>} />
        <Route path='/login' element={user ? <Navigate replace to='/main' /> : <LoginPage />} />
        <Route path='/register' element={<RegistrationPage />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </div>
  )
}

export default App