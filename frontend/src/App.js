import React from 'react'
import { Routes, Route, useMatch } from 'react-router-dom'
import sampleProduct from './assets/sample-items/sample-product'

import LandingPage from './components/landing-page'
import LoginPage from './components/login-page'
import RegistrationPage from './components/registration-page'
import MainPage from './components/main-page'
import ProductPage from './components/product-page'

const App = () => {
  const match = useMatch('/products/1')
  const product = match
    ? sampleProduct
    : null

  return(
    <div>
      <Routes>
        <Route path='/products/1' element={<ProductPage product={product}/>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegistrationPage />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </div>
  )
}

export default App