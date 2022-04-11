import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../reducers/productReducer'

import Header from './header'
import Footer from './footer'
import ProductList from './product-list'

const MainPage = () => {
  const products = useSelector(state => state.products)

  const dispatch = useDispatch()

  useEffect(async () => {
    dispatch(getAllProducts())
  }, [])

  return (
    <div>
      <Header />
      <ProductList products={products} />
      <Footer />
    </div>
  )
}

export default MainPage